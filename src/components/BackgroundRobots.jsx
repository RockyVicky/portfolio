import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const BackgroundRobots = ({ mode = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // --- AI Chip Power Supply Animation Definitions ---
    const chipSize = 140; // Size of the main processor package
    const coreGridCount = 4; // 4x4 processing units
    let cx = width / 2;
    let cy = height / 2;

    // Pin positions around the chip
    const pins = [];
    const pinOffset = chipSize / 2;

    // Generate pins around the outer edge
    // Top Pins
    for (let i = 0; i < 4; i++) {
      const px = cx - pinOffset + ((i + 0.5) * chipSize) / 4;
      pins.push({ x: px, y: cy - pinOffset, edge: 'top' });
    }
    // Bottom Pins
    for (let i = 0; i < 4; i++) {
      const px = cx - pinOffset + ((i + 0.5) * chipSize) / 4;
      pins.push({ x: px, y: cy + pinOffset, edge: 'bottom' });
    }
    // Left Pins
    for (let i = 0; i < 4; i++) {
      const py = cy - pinOffset + ((i + 0.5) * chipSize) / 4;
      pins.push({ x: cx - pinOffset, y: py, edge: 'left' });
    }
    // Right Pins
    for (let i = 0; i < 4; i++) {
      const py = cy - pinOffset + ((i + 0.5) * chipSize) / 4;
      pins.push({ x: cx + pinOffset, y: py, edge: 'right' });
    }

    // Helper: calculate distance between two points
    const getDistance = (p1, p2) => {
      return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    };

    // Class for PCB electrical traces
    class PowerTrace {
      constructor(pin) {
        this.pin = pin;
        this.path = [];
        this.pulses = [];
        this.totalLength = 0;
        this.generatePath();
      }

      generatePath() {
        const pin = this.pin;
        let startX, startY;
        const bendOffset = 50 + Math.random() * 40;

        // Determine starting point along the screen edges
        if (pin.edge === 'top') {
          startX = pin.x + (Math.random() - 0.5) * 160;
          startY = 0;
          this.path = [
            { x: startX, y: startY },
            { x: startX, y: pin.y - bendOffset },
            { x: pin.x, y: pin.y - 12 },
            { x: pin.x, y: pin.y }
          ];
        } else if (pin.edge === 'bottom') {
          startX = pin.x + (Math.random() - 0.5) * 160;
          startY = height;
          this.path = [
            { x: startX, y: startY },
            { x: startX, y: pin.y + bendOffset },
            { x: pin.x, y: pin.y + 12 },
            { x: pin.x, y: pin.y }
          ];
        } else if (pin.edge === 'left') {
          startX = 0;
          startY = pin.y + (Math.random() - 0.5) * 160;
          this.path = [
            { x: startX, y: startY },
            { x: pin.x - bendOffset, y: startY },
            { x: pin.x - 12, y: pin.y },
            { x: pin.x, y: pin.y }
          ];
        } else {
          startX = width;
          startY = pin.y + (Math.random() - 0.5) * 160;
          this.path = [
            { x: startX, y: startY },
            { x: pin.x + bendOffset, y: startY },
            { x: pin.x + 12, y: pin.y },
            { x: pin.x, y: pin.y }
          ];
        }

        // Calculate lengths of segments
        this.lengths = [];
        this.totalLength = 0;
        for (let i = 0; i < this.path.length - 1; i++) {
          const dist = getDistance(this.path[i], this.path[i + 1]);
          this.lengths.push(dist);
          this.totalLength += dist;
        }
      }

      // Get (x, y) along the trace based on progress t (0 to 1)
      getPosition(t) {
        const targetDist = t * this.totalLength;
        let accumulatedDist = 0;

        for (let i = 0; i < this.lengths.length; i++) {
          const segLength = this.lengths[i];
          if (targetDist <= accumulatedDist + segLength) {
            const segProgress = (targetDist - accumulatedDist) / segLength;
            const p1 = this.path[i];
            const p2 = this.path[i + 1];
            return {
              x: p1.x + (p2.x - p1.x) * segProgress,
              y: p1.y + (p2.y - p1.y) * segProgress
            };
          }
          accumulatedDist += segLength;
        }
        return this.path[this.path.length - 1];
      }

      update(triggerRipple) {
        // Increment pulses
        for (let i = this.pulses.length - 1; i >= 0; i--) {
          const pulse = this.pulses[i];
          if (prefersReducedMotion) {
            pulse.t += 0.015;
          } else {
            pulse.t += pulse.speed;
          }

          if (pulse.t >= 1) {
            // Reached the pin, trigger power ripple on the chip core
            triggerRipple(this.pin);
            this.pulses.splice(i, 1);
          }
        }

        // Periodically spawn new electrical surges
        if (Math.random() > 0.985 && this.pulses.length < 3) {
          this.pulses.push({
            t: 0,
            speed: 0.003 + Math.random() * 0.004
          });
        }
      }

      draw(c, isDark) {
        // Draw PCB Traces (Electrical wires)
        c.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.15)' : 'rgba(0, 122, 135, 0.12)';
        c.lineWidth = 1.2;
        c.beginPath();
        c.moveTo(this.path[0].x, this.path[0].y);
        for (let i = 1; i < this.path.length; i++) {
          c.lineTo(this.path[i].x, this.path[i].y);
        }
        c.stroke();

        // Draw electrical energy surges flowing through traces
        this.pulses.forEach(pulse => {
          const pos = this.getPosition(pulse.t);
          
          c.save();
          c.fillStyle = '#ffffff';
          c.shadowColor = isDark ? '#00f0ff' : '#7000ff';
          c.shadowBlur = 12;
          
          // Electrical pulse head
          c.beginPath();
          c.arc(pos.x, pos.y, 3, 0, Math.PI * 2);
          c.fill();

          // Tail stream (draw tail trace backwards slightly)
          c.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.8)' : 'rgba(112, 0, 255, 0.8)';
          c.lineWidth = 2.5;
          c.beginPath();
          const tailStart = this.getPosition(Math.max(0, pulse.t - 0.04));
          c.moveTo(tailStart.x, tailStart.y);
          c.lineTo(pos.x, pos.y);
          c.stroke();
          
          c.restore();
        });
      }
    }

    // Initialize Traces for all pins
    const traces = pins.map(pin => new PowerTrace(pin));

    // Chip state properties
    const ripples = [];
    const coreGrid = Array(coreGridCount * coreGridCount).fill(0.15);

    const triggerRipple = (pin) => {
      ripples.push({
        x: pin.x,
        y: pin.y,
        r: 0,
        maxR: 45,
        opacity: 0.9
      });
      // Flash a random core cell inside the die
      const randIndex = Math.floor(Math.random() * coreGrid.length);
      coreGrid[randIndex] = 1.0;
    };

    // Recalculate coordinates on resize
    const recomputeCoordinates = () => {
      cx = width / 2;
      cy = height / 2;
      
      // Update pins
      pins.length = 0;
      for (let i = 0; i < 4; i++) {
        pins.push({ x: cx - pinOffset + ((i + 0.5) * chipSize) / 4, y: cy - pinOffset, edge: 'top' });
        pins.push({ x: cx - pinOffset + ((i + 0.5) * chipSize) / 4, y: cy + pinOffset, edge: 'bottom' });
        pins.push({ x: cx - pinOffset, y: cy - pinOffset + ((i + 0.5) * chipSize) / 4, edge: 'left' });
        pins.push({ x: cx + pinOffset, y: cy - pinOffset + ((i + 0.5) * chipSize) / 4, edge: 'right' });
      }

      // Re-generate trace paths
      traces.forEach((trace, idx) => {
        trace.pin = pins[idx];
        trace.generatePath();
      });
    };

    // Watch resizing for center shifts
    window.addEventListener('resize', recomputeCoordinates);

    const animate = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const isDark = mode === 'dark';
      ctx.clearRect(0, 0, width, height);

      // --- 1. Draw PCB Background Matrix ---
      ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.02)' : 'rgba(0, 122, 135, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // --- 2. Update & Draw Electrical Traces ---
      traces.forEach(trace => {
        trace.update(triggerRipple);
        trace.draw(ctx, isDark);
      });

      // --- 3. Draw AI Chip Package ---
      // Outer Socket Substrate
      ctx.save();
      ctx.shadowColor = isDark ? 'rgba(0, 240, 255, 0.25)' : 'rgba(112, 0, 255, 0.15)';
      ctx.shadowBlur = 24;
      ctx.fillStyle = isDark ? 'rgba(11, 8, 32, 0.94)' : 'rgba(255, 255, 255, 0.96)';
      ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.35)' : 'rgba(112, 0, 255, 0.25)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(cx - chipSize / 2, cy - chipSize / 2, chipSize, chipSize, 10);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Draw Pins Contacts around the Chip Socket
      ctx.fillStyle = isDark ? 'rgba(0, 240, 255, 0.45)' : 'rgba(112, 0, 255, 0.35)';
      pins.forEach(pin => {
        ctx.beginPath();
        if (pin.edge === 'top') {
          ctx.rect(pin.x - 3, pin.y, 6, 4);
        } else if (pin.edge === 'bottom') {
          ctx.rect(pin.x - 3, pin.y - 4, 6, 4);
        } else if (pin.edge === 'left') {
          ctx.rect(pin.x, pin.y - 3, 4, 6);
        } else {
          ctx.rect(pin.x - 4, pin.y - 3, 4, 6);
        }
        ctx.fill();
      });

      // Inner Silicon Die Plate
      const dieSize = chipSize * 0.72;
      ctx.strokeStyle = isDark ? 'rgba(112, 0, 255, 0.4)' : 'rgba(0, 122, 135, 0.3)';
      ctx.fillStyle = isDark ? 'rgba(10, 7, 26, 0.6)' : 'rgba(240, 244, 248, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(cx - dieSize / 2, cy - dieSize / 2, dieSize, dieSize, 6);
      ctx.fill();
      ctx.stroke();

      // Outer golden copper micro-tracks inside Die
      ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.2)' : 'rgba(112, 0, 255, 0.15)';
      ctx.beginPath();
      ctx.roundRect(cx - dieSize / 2 + 5, cy - dieSize / 2 + 5, dieSize - 10, dieSize - 10, 4);
      ctx.stroke();

      // --- 4. Draw Core Grid Processing Blocks ---
      const coreSize = dieSize * 0.65;
      const coreCellSize = coreSize / coreGridCount;
      const coreStartX = cx - coreSize / 2;
      const coreStartY = cy - coreSize / 2;

      for (let row = 0; row < coreGridCount; row++) {
        for (let col = 0; col < coreGridCount; col++) {
          const idx = row * coreGridCount + col;
          // Decay core grid activity
          coreGrid[idx] = Math.max(0.1, coreGrid[idx] - 0.015);
          
          // Random computing fluctuations
          if (Math.random() > 0.993) {
            coreGrid[idx] = 0.8 + Math.random() * 0.2;
          }

          const cellX = coreStartX + col * coreCellSize;
          const cellY = coreStartY + row * coreCellSize;
          const pad = 1.5;

          // Fill core cell with active computing glow
          ctx.fillStyle = isDark
            ? `rgba(0, 240, 255, ${coreGrid[idx] * 0.15})`
            : `rgba(112, 0, 255, ${coreGrid[idx] * 0.12})`;
          ctx.beginPath();
          ctx.roundRect(cellX + pad, cellY + pad, coreCellSize - pad * 2, coreCellSize - pad * 2, 2.5);
          ctx.fill();

          // Border outlines
          ctx.strokeStyle = isDark
            ? `rgba(0, 240, 255, ${coreGrid[idx] * 0.3})`
            : `rgba(112, 0, 255, ${coreGrid[idx] * 0.22})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw AI branding/labels on the Silicon package
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)';
      ctx.font = 'bold 7px var(--font-mono)';
      ctx.textAlign = 'center';
      ctx.fillText('RMS // AI-CORE', cx, cy - coreSize / 2 - 6);
      ctx.fillText('TPU-V4', cx, cy + coreSize / 2 + 10);

      // --- 5. Draw Electrical Ripples (Energy dissipation) ---
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        if (prefersReducedMotion) {
          rip.r += 1.2;
          rip.opacity -= 0.035;
        } else {
          rip.r += 1.8;
          rip.opacity -= 0.025;
        }

        if (rip.opacity <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = isDark
          ? `rgba(0, 240, 255, ${rip.opacity * 0.5})`
          : `rgba(112, 0, 255, ${rip.opacity * 0.4})`;
        ctx.lineWidth = 1.2;

        // Path ripple towards the core
        const dx = cx - rip.x;
        const dy = cy - rip.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const rx = rip.x + (dx / dist) * rip.r;
        const ry = rip.y + (dy / dist) * rip.r;

        ctx.beginPath();
        ctx.arc(rx, ry, rip.r * 0.4 + 2, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', recomputeCoordinates);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        pointerEvents: 'none', 
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{ 
          display: 'block', 
          width: '100%', 
          height: '100%' 
        }} 
      />
    </Box>
  );
};

export default BackgroundRobots;
