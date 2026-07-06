import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid, Paper, Stack, IconButton, useTheme } from '@mui/material';
import { 
  AutoAwesome, BugReport, CloudUpload, DeveloperBoard, 
  Dvr, Lightbulb, PlayArrow, Settings, Speed, TrendingUp 
} from '@mui/icons-material';

// Helper component for cyberpunk-styled panels with HUD corner brackets
const CyberBox = ({ children, sx = {}, ...props }) => (
  <Paper 
    className="cyber-box" 
    sx={{ 
      position: 'relative', 
      borderRadius: 3.5, 
      p: { xs: 2, sm: 3 }, 
      overflow: 'hidden', 
      border: '1px solid',
      borderColor: 'divider',
      bgcolor: 'background.paper',
      ...sx 
    }} 
    {...props}
  >
    <div className="cyber-corner top-left" />
    <div className="cyber-corner top-right" />
    <div className="cyber-corner bottom-left" />
    <div className="cyber-corner bottom-right" />
    {children}
  </Paper>
);

// High-UX SVG Circular Progress Gauge Dial
const CircularProgressDial = ({ value, label, color = 'var(--neon-cyan)' }) => {
  const theme = useTheme();
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <Stack alignItems="center" spacing={1} sx={{ flex: 1 }}>
      <Box sx={{ position: 'relative', width: { xs: 52, sm: 68 }, height: { xs: 52, sm: 68 } }}>
        <svg viewBox="0 0 68 68" width="100%" height="100%" style={{ transform: 'rotate(-90deg)' }}>
          {/* Inner Circle Track */}
          <circle 
            cx="34" 
            cy="34" 
            r={radius} 
            stroke="var(--border-dark)" 
            strokeWidth="4.5" 
            fill="transparent" 
          />
          {/* Progress Stroke */}
          <circle 
            cx="34" 
            cy="34" 
            r={radius} 
            stroke={color} 
            strokeWidth="4.5" 
            fill="transparent" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ 
              transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: theme.palette.mode === 'dark' ? `drop-shadow(0 0 6px ${color})` : 'none'
            }}
          />
        </svg>
        {/* Inside percentage value */}
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontFamily: 'var(--font-mono)',
          fontWeight: 800,
          fontSize: { xs: '0.65rem', sm: '0.78rem' },
          color: 'text.primary'
        }}>
          {Math.round(value)}%
        </Box>
      </Box>
      <Typography variant="caption" sx={{ color: 'var(--text-dark-secondary)', fontWeight: 800, fontSize: { xs: '0.55rem', sm: '0.62rem' }, textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center' }}>
        {label}
      </Typography>
    </Stack>
  );
};

// Sounds Hooks for future implementation
const triggerSoundEffect = (soundName) => {
  console.log(`[Sound Hook] Triggered sound: ${soundName}`);
  if (window.playPortfolioSound) {
    window.playPortfolioSound(soundName);
  }
};

const pipelineStages = [
  { id: 'idea', label: '1. Idea Input', icon: <Lightbulb />, desc: 'Concept ingestion & AI product specs planning.' },
  { id: 'agents', label: '2. AI Planning', icon: <AutoAwesome />, desc: 'Autonomous Agent swarm allocating tasks.' },
  { id: 'code', label: '3. Code Generation', icon: <DeveloperBoard />, desc: 'Robotic assembly of source code cubes.' },
  { id: 'test', label: '4. Testing / QA', icon: <BugReport />, desc: 'Automated test suite scanning & bug auto-fix.' },
  { id: 'deploy', label: '5. Build Deploy', icon: <CloudUpload />, desc: 'Container packaging & global CDN sync.' },
  { id: 'monitor', label: '6. Monitoring', icon: <TrendingUp />, desc: 'Real-time telemetry, load tracking, & impact.' }
];

const mockLogs = [
  '💡 [Spec Agent] New requirement: Scale real-time WebSockets',
  '🤖 [Orchestrator] Spawned CodeAgent-4 & TestAgent-2',
  '⚙️ [Code Agent] Appended dynamic buffering to socket handlers',
  '📁 [Code Agent] Saved new file: src/utils/socketBuffer.js',
  '⚡ [Code Agent] Code cube generated: [Socket.io/React]',
  '🔬 [Test Agent] Running unit tests for socketBuffer...',
  '🛡️ [Security Agent] Executing static code vulnerability scan',
  '✅ [Test Agent] Socket buffer latency test PASSED: 1.2ms',
  '📦 [Deploy Agent] Packaging production bundle chunks...',
  '🚀 [Deploy Agent] Syncing dist/ assets to AWS S3 storage',
  '🌐 [Deploy Agent] Invalidation request sent to CloudFront CDN',
  '📈 [Monitor Agent] Telemetry initialized. Active connections: 2,481',
  '📊 [Monitor Agent] CPU: 14% | Response Time: 218ms | Build: 99.98%'
];

const SoftwareFactory = ({ activeSection = 'idea', mode = 'dark' }) => {
  const canvasRef = useRef(null);
  const logContainerRef = useRef(null);
  const [logs, setLogs] = useState(mockLogs.slice(0, 6));
  const [stats, setStats] = useState({
    requests: 12480,
    onlineUsers: 2481,
    todayDeployments: 47,
    cpu: 12,
    memory: 42,
    responseTime: 220
  });

  const [activeStageOverride, setActiveStageOverride] = useState(null);
  const modeRef = useRef(mode);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  // Reset override when scrolling to a new section
  useEffect(() => {
    setActiveStageOverride(null);
  }, [activeSection]);

  // Map scroll section or manual override to factory active stage
  const currentStageIndex = activeStageOverride !== null ? activeStageOverride : useMemoStageIndex(activeSection);
  const currentStageIndexRef = useRef(currentStageIndex);

  useEffect(() => {
    currentStageIndexRef.current = currentStageIndex;
  }, [currentStageIndex]);

  // Live Logs Streaming
  useEffect(() => {
    const timer = setInterval(() => {
      setLogs((prev) => {
        const nextLogIndex = Math.floor(Math.random() * mockLogs.length);
        const nextLog = mockLogs[nextLogIndex];
        const newLogs = [...prev.slice(1), nextLog];
        return newLogs;
      });
      // Scroll to bottom of logs
      if (logContainerRef.current) {
        logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
      }
      triggerSoundEffect('beep');
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  // Live Stats Fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        requests: prev.requests + Math.floor(Math.random() * 5),
        onlineUsers: prev.onlineUsers + (Math.random() > 0.5 ? 1 : -1),
        todayDeployments: prev.todayDeployments + (Math.random() > 0.95 ? 1 : 0),
        cpu: Math.min(Math.max(prev.cpu + Math.floor(Math.random() * 7 - 3), 5), 85),
        memory: Math.min(Math.max(prev.memory + (Math.random() > 0.5 ? 0.1 : -0.1), 40), 45),
        responseTime: Math.min(Math.max(prev.responseTime + Math.floor(Math.random() * 11 - 5), 195), 235)
      }));
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  // Canvas Swarm Orbit & Neural Telemetry Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isTabActive = true;
    let time = 0;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speedScale = prefersReducedMotion ? 0.1 : 1.0;

    // Set canvas dimensions
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = 280);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 280;
    };
    window.addEventListener('resize', handleResize);

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // --- Helper classes for particles ---
    class AmbientNode {
      constructor(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.22;
        this.vy = (Math.random() - 0.5) * 0.22;
        this.radius = 0.8 + Math.random() * 1.5;
      }
      update(w, h) {
        this.x += this.vx * speedScale;
        this.y += this.vy * speedScale;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw(c, isDark) {
        c.fillStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)';
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
      }
    }

    class DataFlowParticle {
      constructor(startX, startY, endX, endY, isMobile) {
        this.t = 0;
        this.speed = (0.012 + Math.random() * 0.008) * speedScale;
        this.size = 1.8 + Math.random() * 1.6;
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.isMobile = isMobile;
      }
      update() {
        this.t += this.speed;
        return this.t >= 1;
      }
      draw(c, isDark) {
        const t = this.t;
        let x, y;
        if (this.isMobile) {
          x = this.startX + (this.endX - this.startX) * t;
          y = this.startY + (this.endY - this.startY) * t;
        } else {
          // Bezier S-curve interpolation
          const cp1x = this.startX + (this.endX - this.startX) * 0.4;
          const cp1y = this.startY;
          const cp2x = this.startX + (this.endX - this.startX) * 0.6;
          const cp2y = this.endY;
          
          x = Math.pow(1 - t, 3) * this.startX + 
              3 * Math.pow(1 - t, 2) * t * cp1x + 
              3 * (1 - t) * Math.pow(t, 2) * cp2x + 
              Math.pow(t, 3) * this.endX;
          y = Math.pow(1 - t, 3) * this.startY + 
              3 * Math.pow(1 - t, 2) * t * cp1y + 
              3 * (1 - t) * Math.pow(t, 2) * cp2y + 
              Math.pow(t, 3) * this.endY;
        }
        
        c.fillStyle = isDark ? '#00f0ff' : '#7000ff';
        c.shadowColor = isDark ? '#00f0ff' : '#7000ff';
        c.shadowBlur = 6;
        c.beginPath();
        c.arc(x, y, this.size, 0, Math.PI * 2);
        c.fill();
        c.shadowBlur = 0;
      }
    }

    // --- Setup background net particles ---
    const ambientNodes = [];
    for (let i = 0; i < 18; i++) {
      ambientNodes.push(new AmbientNode(width, height));
    }

    // --- Active connection particle swarm ---
    let flowParticles = [];

    // --- Mouse interaction state ---
    let mouseX = -9999;
    let mouseY = -9999;
    let hoveredNodeIndex = -1;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
      hoveredNodeIndex = -1;
      canvas.style.cursor = 'default';
    };

    const handleMouseClick = () => {
      if (hoveredNodeIndex !== -1) {
        triggerSoundEffect('click');
        setActiveStageOverride(hoveredNodeIndex);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleMouseClick);

    // Metadata details for each sub-agent
    const agentDetails = [
      {
        name: 'SpecAgent',
        fullName: 'SPECIFICATION_AGENT // v1.2.4',
        task: 'Ingesting concept specs & generating JSON schema...',
        metric: 'COGNITIVE LOAD: 18% | RAM: 250MB',
        speed: 0.04,
        amp: 8
      },
      {
        name: 'PlannerAgent',
        fullName: 'PLANNING_ORCHESTRATOR // v2.0.1',
        task: 'Generating execution plan & allocating sub-agents...',
        metric: 'COGNITIVE LOAD: 64% | RAM: 420MB',
        speed: 0.12,
        amp: 16
      },
      {
        name: 'CodeAgent',
        fullName: 'CODE_GENERATION_BOT // v4.1.0',
        task: 'Synthesizing React component state & WebSocket files...',
        metric: 'COGNITIVE LOAD: 85% | RAM: 890MB',
        speed: 0.22,
        amp: 24
      },
      {
        name: 'QAAgent',
        fullName: 'QA_TEST_RUNNER // v3.0.5',
        task: 'Running Vitest coverage & static vulnerability scans...',
        metric: 'COGNITIVE LOAD: 72% | RAM: 1.2GB',
        speed: 0.18,
        amp: 20
      },
      {
        name: 'DeployAgent',
        fullName: 'DEPLOYMENT_PIPELINE // v1.8.2',
        task: 'Uploading distribution bundle chunks to CloudFront CDN...',
        metric: 'COGNITIVE LOAD: 45% | RAM: 310MB',
        speed: 0.08,
        amp: 12
      },
      {
        name: 'TelemetryAgent',
        fullName: 'MONITORING_DAEMON // v2.4.0',
        task: 'Streaming real-time viewport frames & system metrics...',
        metric: 'COGNITIVE LOAD: 28% | RAM: 180MB',
        speed: 0.06,
        amp: 10
      }
    ];

    // Helper vector drawer for each agent icon
    const drawAgentIcon = (c, x, y, index, size, isActive, isDark) => {
      c.strokeStyle = isActive ? (isDark ? '#00f0ff' : '#ffffff') : (isDark ? '#b4aecc' : '#575466');
      c.lineWidth = 1.8;
      c.lineCap = 'round';
      c.lineJoin = 'round';
      
      const s = size * 0.4;
      
      switch (index) {
        case 0: // SpecAgent - Lightbulb
          c.beginPath();
          c.arc(x, y - s * 0.15, s * 0.5, -Math.PI * 0.8, Math.PI * 1.8);
          c.lineTo(x + s * 0.25, y + s * 0.45);
          c.lineTo(x - s * 0.25, y + s * 0.45);
          c.closePath();
          c.stroke();
          
          c.beginPath();
          c.moveTo(x - s * 0.12, y - s * 0.05);
          c.lineTo(x, y - s * 0.22);
          c.lineTo(x + s * 0.12, y - s * 0.05);
          c.stroke();
          break;
        case 1: // PlannerAgent - Sparkle Star
          c.beginPath();
          c.moveTo(x, y - s * 0.7);
          c.quadraticCurveTo(x, y, x + s * 0.7, y);
          c.quadraticCurveTo(x, y, x, y + s * 0.7);
          c.quadraticCurveTo(x, y, x - s * 0.7, y);
          c.quadraticCurveTo(x, y, x, y - s * 0.7);
          c.stroke();
          break;
        case 2: // CodeAgent - Brackets
          c.beginPath();
          c.moveTo(x - s * 0.55, y);
          c.lineTo(x - s * 0.2, y - s * 0.4);
          c.moveTo(x - s * 0.55, y);
          c.lineTo(x - s * 0.2, y + s * 0.4);
          
          c.moveTo(x + s * 0.55, y);
          c.lineTo(x + s * 0.2, y - s * 0.4);
          c.moveTo(x + s * 0.55, y);
          c.lineTo(x + s * 0.2, y + s * 0.4);
          
          c.moveTo(x + s * 0.12, y - s * 0.55);
          c.lineTo(x - s * 0.12, y + s * 0.55);
          c.stroke();
          break;
        case 3: // QAAgent - Bug Shield
          c.beginPath();
          c.arc(x, y, s * 0.4, 0, Math.PI * 2);
          c.stroke();
          c.beginPath();
          c.moveTo(x - s * 0.4, y); c.lineTo(x - s * 0.7, y);
          c.moveTo(x + s * 0.4, y); c.lineTo(x + s * 0.7, y);
          
          c.moveTo(x - s * 0.35, y - s * 0.2); c.lineTo(x - s * 0.6, y - s * 0.35);
          c.moveTo(x + s * 0.35, y - s * 0.2); c.lineTo(x + s * 0.6, y - s * 0.35);
          
          c.moveTo(x - s * 0.35, y + s * 0.2); c.lineTo(x - s * 0.6, y + s * 0.35);
          c.moveTo(x + s * 0.35, y + s * 0.2); c.lineTo(x + s * 0.6, y + s * 0.35);
          
          c.moveTo(x - s * 0.12, y - s * 0.4); c.quadraticCurveTo(x - s * 0.2, y - s * 0.65, x - s * 0.35, y - s * 0.6);
          c.moveTo(x + s * 0.12, y - s * 0.4); c.quadraticCurveTo(x + s * 0.2, y - s * 0.65, x + s * 0.35, y - s * 0.6);
          c.stroke();
          break;
        case 4: // DeployAgent - Cloud / Arrow
          c.beginPath();
          c.moveTo(x - s * 0.45, y + s * 0.25);
          c.arc(x - s * 0.35, y + s * 0.05, s * 0.25, Math.PI * 0.8, -Math.PI * 0.5);
          c.arc(x, y - s * 0.15, s * 0.35, -Math.PI * 0.9, -Math.PI * 0.1);
          c.arc(x + s * 0.35, y + s * 0.05, s * 0.25, -Math.PI * 0.5, Math.PI * 0.2);
          c.lineTo(x - s * 0.45, y + s * 0.25);
          c.stroke();
          
          c.beginPath();
          c.moveTo(x, y + s * 0.32);
          c.lineTo(x, y - s * 0.05);
          c.moveTo(x - s * 0.15, y + s * 0.1);
          c.lineTo(x, y - s * 0.05);
          c.lineTo(x + s * 0.15, y + s * 0.1);
          c.stroke();
          break;
        case 5: // TelemetryAgent - Activity Graph
          c.beginPath();
          c.moveTo(x - s * 0.7, y + s * 0.2);
          c.lineTo(x - s * 0.35, y + s * 0.2);
          c.lineTo(x - s * 0.18, y - s * 0.45);
          c.lineTo(x + s * 0.02, y + s * 0.45);
          c.lineTo(x + s * 0.2, y - s * 0.15);
          c.lineTo(x + s * 0.4, y + s * 0.2);
          c.lineTo(x + s * 0.7, y + s * 0.2);
          c.stroke();
          break;
        default:
          break;
      }
    };

    // Calculate layout parameters
    const getLayout = (w, h) => {
      if (w < 600) {
        // Mobile layout: central core, nodes in full circle orbit
        const cx = w / 2;
        const cy = h / 2 - 15;
        const r = 70;
        const nodes = [];
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
          nodes.push({
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
            angle
          });
        }
        return { cx, cy, r, nodes, mobile: true };
      } else {
        // Desktop layout: core on the left, sub-agents fanning out to the right
        const cx = w * 0.32;
        const cy = h / 2;
        const r = 100;
        const nodes = [];
        const startAngle = -Math.PI * 0.65;
        const endAngle = Math.PI * 0.65;
        const angleStep = (endAngle - startAngle) / 5;
        for (let i = 0; i < 6; i++) {
          const angle = startAngle + i * angleStep;
          nodes.push({
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
            angle
          });
        }
        return { cx, cy, r, nodes, mobile: false };
      }
    };

    // Animation loop
    const animate = () => {
      if (!isTabActive) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      const isDark = modeRef.current === 'dark';
      time += speedScale;

      // 1. Draw subtle background Grid with small crosshairs (+)
      ctx.strokeStyle = isDark ? 'rgba(112, 0, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let gx = 0; gx < width; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      for (let gy = 0; gy < height; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      // Draw crosshairs at grid intersections
      ctx.fillStyle = isDark ? 'rgba(0, 240, 255, 0.08)' : 'rgba(112, 0, 255, 0.05)';
      ctx.font = '7px var(--font-sans)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let gx = gridSize; gx < width; gx += gridSize * 2) {
        for (let gy = gridSize; gy < height; gy += gridSize * 2) {
          ctx.fillText('+', gx, gy);
        }
      }

      // 2. Draw background ambient network
      ambientNodes.forEach(node => {
        node.update(width, height);
        node.draw(ctx, isDark);
      });
      for (let i = 0; i < ambientNodes.length; i++) {
        for (let j = i + 1; j < ambientNodes.length; j++) {
          const dx = ambientNodes[i].x - ambientNodes[j].x;
          const dy = ambientNodes[i].y - ambientNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            const alpha = (1 - dist / 80) * (isDark ? 0.06 : 0.03);
            ctx.strokeStyle = isDark ? `rgba(112, 0, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(ambientNodes[i].x, ambientNodes[i].y);
            ctx.lineTo(ambientNodes[j].x, ambientNodes[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Compute layout
      const layout = getLayout(width, height);
      const activeIndex = currentStageIndexRef.current;
      const activeNode = layout.nodes[activeIndex];

      // 3.5 Draw Stage-Specific unique animations in the background
      if (activeIndex === 0) {
        // --- Stage 0: SpecAgent (scanning & ideation specs) ---
        const scanY = (time * 1.5) % height;
        ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.25)' : 'rgba(112, 0, 255, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(10, scanY);
        ctx.lineTo(layout.cx - 30, scanY);
        ctx.stroke();

        ctx.fillStyle = isDark ? 'rgba(0, 240, 255, 0.02)' : 'rgba(112, 0, 255, 0.015)';
        ctx.fillRect(10, Math.max(0, scanY - 20), layout.cx - 40, 20);

        ctx.fillStyle = isDark ? 'rgba(0, 240, 255, 0.35)' : 'rgba(112, 0, 255, 0.45)';
        ctx.font = '7.5px var(--font-mono)';
        ctx.textAlign = 'left';
        const specTags = ['spec: WebSockets', 'db: PG_SQL', 'auth: JWT_Token'];
        specTags.forEach((tag, idx) => {
          const floatX = 20 + idx * 45;
          const floatY = 70 + Math.sin(time * 0.02 + idx) * 15 + idx * 30;
          ctx.fillText(tag, floatX, floatY);
        });
      } else if (activeIndex === 1) {
        // --- Stage 1: PlannerAgent (allocation orbits & thinking paths) ---
        ctx.strokeStyle = isDark ? 'rgba(112, 0, 255, 0.15)' : 'rgba(112, 0, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.arc(layout.cx, layout.cy, 52, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(layout.cx, layout.cy, 78, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]); // reset

        // Rotating token circles
        const plannerAngle1 = time * 0.015;
        const px1 = layout.cx + Math.cos(plannerAngle1) * 52;
        const py1 = layout.cy + Math.sin(plannerAngle1) * 52;
        ctx.fillStyle = isDark ? '#00f0ff' : '#7000ff';
        ctx.beginPath();
        ctx.arc(px1, py1, 3.5, 0, Math.PI * 2);
        ctx.fill();

        const plannerAngle2 = -time * 0.01;
        const px2 = layout.cx + Math.cos(plannerAngle2) * 78;
        const py2 = layout.cy + Math.sin(plannerAngle2) * 78;
        ctx.fillStyle = isDark ? '#ff0070' : '#cc0059';
        ctx.beginPath();
        ctx.arc(px2, py2, 3.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (activeIndex === 2) {
        // --- Stage 2: CodeAgent (digital code rain & floating code blocks) ---
        ctx.fillStyle = isDark ? 'rgba(0, 240, 255, 0.15)' : 'rgba(82, 0, 204, 0.12)';
        ctx.font = '7.5px var(--font-mono)';
        ctx.textAlign = 'left';
        const codeLines = ['const s = io()', 's.emit("sync")', 'import React', 'const [val]'];
        codeLines.forEach((cline, idx) => {
          const cx_val = layout.cx + 25 + idx * 28;
          const cy_val = 60 + ((time * 0.8 + idx * 45) % 150);
          ctx.fillText(cline, cx_val, cy_val);
        });

        // Floating assembler cube outline
        if (activeNode) {
          const cubeT = (time * 0.01) % 1.0;
          const startCubeX = layout.cx;
          const startCubeY = layout.cy;
          const endCubeX = activeNode.x;
          const endCubeY = activeNode.y + Math.sin(time * 0.03 + activeIndex) * 3;
          
          const curCubeX = startCubeX + (endCubeX - startCubeX) * cubeT;
          const curCubeY = startCubeY + (endCubeY - startCubeY) * cubeT;
          
          ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.7)' : 'rgba(112, 0, 255, 0.6)';
          ctx.lineWidth = 1.2;
          ctx.save();
          ctx.translate(curCubeX, curCubeY);
          ctx.rotate(time * 0.03);
          ctx.strokeRect(-5, -5, 10, 10);
          ctx.restore();
        }
      } else if (activeIndex === 3) {
        // --- Stage 3: QAAgent (radar sweep & scanlines) ---
        if (activeNode) {
          const activeNodeY = activeNode.y + Math.sin(time * 0.03 + activeIndex) * 3;
          const sweepAngle = (time * 0.02) % (Math.PI * 2);
          
          ctx.save();
          ctx.translate(activeNode.x, activeNodeY);
          ctx.rotate(sweepAngle);
          
          const sweepGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, 45);
          sweepGrad.addColorStop(0, isDark ? 'rgba(0, 255, 102, 0.2)' : 'rgba(0, 179, 74, 0.15)');
          sweepGrad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = sweepGrad;
          
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, 45, 0, Math.PI * 0.25);
          ctx.closePath();
          ctx.fill();
          ctx.restore();

          // Green scanning line
          const verifyY = activeNodeY - 45 + ((time * 1.2) % 90);
          ctx.strokeStyle = isDark ? 'rgba(0, 255, 102, 0.35)' : 'rgba(0, 179, 74, 0.28)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(activeNode.x - 28, verifyY);
          ctx.lineTo(activeNode.x + 28, verifyY);
          ctx.stroke();
        }
      } else if (activeIndex === 4) {
        // --- Stage 4: DeployAgent (upward bubbles & equalization grids) ---
        ctx.fillStyle = isDark ? 'rgba(0, 240, 255, 0.2)' : 'rgba(112, 0, 255, 0.15)';
        for (let idx = 0; idx < 6; idx++) {
          const bubbleX = layout.cx + 20 + idx * 22;
          const bubbleY = height - ((time * (0.8 + idx * 0.1)) % height);
          const bubbleR = 1 + (idx % 3);
          ctx.beginPath();
          ctx.arc(bubbleX, bubbleY, bubbleR, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (activeIndex === 5) {
        // --- Stage 5: TelemetryAgent (realtime chart graphs) ---
        ctx.lineWidth = 1.2;
        // Wave 1
        ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.18)' : 'rgba(0, 122, 135, 0.15)';
        ctx.beginPath();
        for (let wx = 10; wx < layout.cx - 20; wx++) {
          const wy = (height * 0.6) + Math.sin(wx * 0.03 + time * 0.05) * 12 + Math.cos(wx * 0.01 - time * 0.02) * 5;
          if (wx === 10) ctx.moveTo(wx, wy);
          else ctx.lineTo(wx, wy);
        }
        ctx.stroke();

        // Wave 2
        ctx.strokeStyle = isDark ? 'rgba(112, 0, 255, 0.14)' : 'rgba(82, 0, 204, 0.12)';
        ctx.beginPath();
        for (let wx = 10; wx < layout.cx - 20; wx++) {
          const wy = (height * 0.6) + Math.cos(wx * 0.04 - time * 0.04) * 10 + Math.sin(wx * 0.02 + time * 0.03) * 6;
          if (wx === 10) ctx.moveTo(wx, wy);
          else ctx.lineTo(wx, wy);
        }
        ctx.stroke();
      }

      // Spawn data flow particles
      if (Math.round(time) % 18 === 0 && activeNode) {
        flowParticles.push(new DataFlowParticle(layout.cx, layout.cy, activeNode.x, activeNode.y, layout.mobile));
      }

      // 4. Draw connection wires between Orchestrator Core and Sub-agents
      layout.nodes.forEach((node, i) => {
        const floatY = Math.sin(time * 0.03 + i) * 3;
        const nodeY = node.y + floatY;
        const isActive = activeIndex === i;

        ctx.lineWidth = isActive ? 2.2 : 1.2;
        ctx.strokeStyle = isActive 
          ? (isDark ? 'rgba(0, 240, 255, 0.45)' : 'rgba(112, 0, 255, 0.35)')
          : (isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)');
        
        if (isActive && isDark) {
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 8;
        }

        ctx.beginPath();
        ctx.moveTo(layout.cx, layout.cy);
        if (layout.mobile) {
          ctx.lineTo(node.x, nodeY);
        } else {
          // Beautiful Bezier curves
          const cp1x = layout.cx + (node.x - layout.cx) * 0.4;
          const cp1y = layout.cy;
          const cp2x = layout.cx + (node.x - layout.cx) * 0.6;
          const cp2y = nodeY;
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, node.x, nodeY);
        }
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      });

      // Update and draw flow particles
      flowParticles = flowParticles.filter(p => {
        const finished = p.update();
        if (!finished && activeNode) {
          // Update end coordinates dynamically to match floating nodes
          p.endY = activeNode.y + Math.sin(time * 0.03 + activeIndex) * 3;
          p.draw(ctx, isDark);
        }
        return !finished;
      });

      // 5. Draw Orchestrator Core (Neural Brain)
      const corePulse = Math.sin(time * 0.04) * 2;
      const coreRadius = 24 + corePulse;
      
      // Core glowing fill
      const coreGrad = ctx.createRadialGradient(layout.cx, layout.cy, 2, layout.cx, layout.cy, coreRadius);
      if (isDark) {
        coreGrad.addColorStop(0, '#00f0ff');
        coreGrad.addColorStop(0.3, '#7000ff');
        coreGrad.addColorStop(1, 'rgba(3, 0, 20, 0.9)');
      } else {
        coreGrad.addColorStop(0, '#5200cc');
        coreGrad.addColorStop(0.6, '#7000ff');
        coreGrad.addColorStop(1, '#ffffff');
      }

      ctx.fillStyle = coreGrad;
      if (isDark) {
        ctx.shadowColor = '#7000ff';
        ctx.shadowBlur = 15;
      }
      ctx.beginPath();
      ctx.arc(layout.cx, layout.cy, coreRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Inner Core Ring
      ctx.strokeStyle = isDark ? '#ffffff' : '#5200cc';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(layout.cx, layout.cy, coreRadius - 6, 0, Math.PI * 2);
      ctx.stroke();

      // Core Outer concentric rotating HUD rings
      ctx.lineWidth = 1;
      ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.4)' : 'rgba(112, 0, 255, 0.3)';
      
      // Ring 1 (rotates clockwise)
      ctx.save();
      ctx.translate(layout.cx, layout.cy);
      ctx.rotate(time * 0.008);
      ctx.setLineDash([5, 9]);
      ctx.beginPath();
      ctx.arc(0, 0, coreRadius + 12, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Ring 2 (rotates counter-clockwise)
      ctx.save();
      ctx.translate(layout.cx, layout.cy);
      ctx.rotate(-time * 0.005);
      ctx.setLineDash([10, 14]);
      ctx.beginPath();
      ctx.arc(0, 0, coreRadius + 22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Core text tag
      ctx.fillStyle = isDark ? '#00f0ff' : '#5200cc';
      ctx.font = 'bold 7px var(--font-mono)';
      ctx.textAlign = 'center';
      ctx.fillText('CORE', layout.cx, layout.cy - 1);
      ctx.fillStyle = isDark ? '#fff' : '#110e1f';
      ctx.fillText('SWARM', layout.cx, layout.cy + 7);

      // 6. Draw Sub-Agent Swarm Nodes
      let currentHovered = -1;
      layout.nodes.forEach((node, i) => {
        const floatY = Math.sin(time * 0.03 + i) * 3;
        const nodeY = node.y + floatY;
        
        // Hover raycasting check
        const dx = mouseX - node.x;
        const dy = mouseY - nodeY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 22) {
          currentHovered = i;
        }
      });

      hoveredNodeIndex = currentHovered;
      if (hoveredNodeIndex !== -1) {
        canvas.style.cursor = 'pointer';
      } else {
        canvas.style.cursor = 'default';
      }

      layout.nodes.forEach((node, i) => {
        const floatY = Math.sin(time * 0.03 + i) * 3;
        const nodeY = node.y + floatY;
        
        const isActive = activeIndex === i;
        const isHovered = hoveredNodeIndex === i;
        
        // Node radius sizing
        const baseNodeRadius = 15;
        const nodeRadius = isActive ? 18.5 : (isHovered ? 17 : baseNodeRadius);

        // Active node expanding ripples
        if (isActive) {
          const rippleCount = 2;
          for (let r = 0; r < rippleCount; r++) {
            const rippleT = ((time * 0.02 + r / rippleCount) % 1.0);
            const rippleRadius = nodeRadius + rippleT * 22;
            const rippleAlpha = (1.0 - rippleT) * (isDark ? 0.35 : 0.22);
            ctx.strokeStyle = isDark ? `rgba(0, 240, 255, ${rippleAlpha})` : `rgba(112, 0, 255, ${rippleAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(node.x, nodeY, rippleRadius, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        // Draw node background circle
        ctx.shadowColor = isDark ? '#7000ff' : '#00a3b0';
        ctx.shadowBlur = (isActive || isHovered) ? 10 : 0;
        
        const nodeGrad = ctx.createLinearGradient(node.x - nodeRadius, nodeY - nodeRadius, node.x + nodeRadius, nodeY + nodeRadius);
        if (isActive) {
          nodeGrad.addColorStop(0, '#00f0ff');
          nodeGrad.addColorStop(1, '#7000ff');
        } else if (isHovered) {
          nodeGrad.addColorStop(0, isDark ? '#1a1440' : '#eceaf4');
          nodeGrad.addColorStop(1, isDark ? '#0c0824' : '#dfdbf0');
        } else {
          nodeGrad.addColorStop(0, isDark ? '#0b0820' : '#f8f9fa');
          nodeGrad.addColorStop(1, isDark ? '#04020c' : '#ecebf0');
        }

        ctx.fillStyle = nodeGrad;
        ctx.strokeStyle = isActive 
          ? '#fff'
          : (isHovered ? (isDark ? '#00f0ff' : '#7000ff') : (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'));
        ctx.lineWidth = (isActive || isHovered) ? 2 : 1;
        ctx.beginPath();
        ctx.arc(node.x, nodeY, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0; // reset

        // Draw node internal icon glyphs
        drawAgentIcon(ctx, node.x, nodeY, i, nodeRadius, isActive, isDark);

        // Draw text label under the node
        ctx.fillStyle = isActive 
          ? (isDark ? '#00f0ff' : '#5200cc') 
          : (isHovered ? (isDark ? '#fff' : '#110e1f') : 'var(--text-dark-secondary)');
        ctx.font = isActive ? 'bold 8.5px var(--font-mono)' : '7.5px var(--font-mono)';
        ctx.textAlign = 'center';
        ctx.fillText(agentDetails[i].name, node.x, nodeY + nodeRadius + 11);
      });

      // 7. Draw Holographic HUD Card
      const activeAgentInfo = agentDetails[activeIndex];
      
      if (activeAgentInfo) {
        if (!layout.mobile) {
          const hudX = Math.max(layout.cx + 125, width - 250);
          const hudY = 30;
          const hudW = width - hudX - 15;
          const hudH = 220;

          // Draw glass backing
          ctx.fillStyle = isDark ? 'rgba(10, 7, 26, 0.65)' : 'rgba(255, 255, 255, 0.82)';
          ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.22)' : 'rgba(112, 0, 255, 0.18)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(hudX, hudY, hudW, hudH, 8);
          ctx.fill();
          ctx.stroke();

          // Draw HUD glowing corner brackets
          ctx.strokeStyle = isDark ? '#00f0ff' : '#7000ff';
          ctx.lineWidth = 2;
          const cl = 9; // corner line length
          
          // top-left
          ctx.beginPath();
          ctx.moveTo(hudX + cl, hudY); ctx.lineTo(hudX, hudY); ctx.lineTo(hudX, hudY + cl);
          ctx.stroke();
          // top-right
          ctx.beginPath();
          ctx.moveTo(hudX + hudW - cl, hudY); ctx.lineTo(hudX + hudW, hudY); ctx.lineTo(hudX + hudW, hudY + cl);
          ctx.stroke();
          // bottom-left
          ctx.beginPath();
          ctx.moveTo(hudX, hudY + hudH - cl); ctx.lineTo(hudX, hudY + hudH); ctx.lineTo(hudX + cl, hudY + hudH);
          ctx.stroke();
          // bottom-right
          ctx.beginPath();
          ctx.moveTo(hudX + hudW - cl, hudY + hudH); ctx.lineTo(hudX + hudW, hudY + hudH); ctx.lineTo(hudX + hudW, hudY + hudH - cl);
          ctx.stroke();

          // Draw header
          ctx.fillStyle = isDark ? 'rgba(0, 240, 255, 0.7)' : 'rgba(112, 0, 255, 0.9)';
          ctx.font = 'bold 8.5px var(--font-mono)';
          ctx.textAlign = 'left';
          ctx.fillText('⚡ SWARM TELEMETRY DECK', hudX + 15, hudY + 22);

          // Draw divider
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(hudX + 15, hudY + 30);
          ctx.lineTo(hudX + hudW - 15, hudY + 30);
          ctx.stroke();

          // Agent Name
          ctx.fillStyle = isDark ? '#fff' : '#110e1f';
          ctx.font = 'bold 10.5px var(--font-heading)';
          ctx.fillText(activeAgentInfo.fullName, hudX + 15, hudY + 50);

          ctx.fillStyle = isDark ? '#00f0ff' : '#7000ff';
          ctx.font = 'bold 7.5px var(--font-mono)';
          ctx.fillText(`STATUS: ACTIVE // SWARM_ONLINE`, hudX + 15, hudY + 68);

          // Task details (word wrapped)
          ctx.fillStyle = isDark ? '#b4aecc' : '#575466';
          ctx.font = '9.5px var(--font-sans)';
          const taskText = activeAgentInfo.task;
          const words = taskText.split(' ');
          let line = '';
          let textY = hudY + 86;
          const maxWidth = hudW - 30;
          
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
              ctx.fillText(line, hudX + 15, textY);
              line = words[n] + ' ';
              textY += 13;
            } else {
              line = testLine;
            }
          }
          ctx.fillText(line, hudX + 15, textY);

          // Workload metrics
          ctx.fillStyle = isDark ? '#00ff66' : '#008f37';
          ctx.font = 'bold 9px var(--font-mono)';
          ctx.fillText(activeAgentInfo.metric, hudX + 15, hudY + 138);

          // Thinking Frequency Sine Wave
          ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.5)' : 'rgba(112, 0, 255, 0.45)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          const waveY = hudY + 172;
          const waveW = hudW - 30;
          const waveX = hudX + 15;
          
          for (let wx = 0; wx < waveW; wx++) {
            const angle = (wx / waveW) * Math.PI * 4 + time * activeAgentInfo.speed * 1.5;
            const wy = waveY + Math.sin(angle) * activeAgentInfo.amp * 0.7 + Math.sin(angle * 2.3) * (activeAgentInfo.amp * 0.15);
            if (wx === 0) {
              ctx.moveTo(waveX + wx, wy);
            } else {
              ctx.lineTo(waveX + wx, wy);
            }
          }
          ctx.stroke();

          ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.25)';
          ctx.font = '6.5px var(--font-mono)';
          ctx.fillText('COGNITIVE_FREQUENCY_HERTZ', hudX + 15, hudY + 203);
        } else {
          // Mobile compact HUD banner at the top
          ctx.fillStyle = isDark ? 'rgba(10, 7, 26, 0.85)' : 'rgba(255, 255, 255, 0.92)';
          ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.3)' : 'rgba(112, 0, 255, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(10, 8, width - 20, 36, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isDark ? '#00f0ff' : '#7000ff';
          ctx.beginPath();
          ctx.arc(22, 26, 3.5, 0, Math.PI * 2);
          ctx.fill();

          const maxCharCount = Math.max(12, Math.floor((width - 100) / 5.5));
          const slicedTask = activeAgentInfo.task.length > maxCharCount 
            ? `${activeAgentInfo.task.substring(0, maxCharCount)}...` 
            : activeAgentInfo.task;
          ctx.fillText(`${activeAgentInfo.name}: ${slicedTask}`, 32, 29);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleMouseClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box sx={{ width: '100%', minWidth: 0, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
      <Stack spacing={3}>
        {/* Visual Assembly Viewport Card (Top) */}
        <CyberBox sx={{ p: 0, overflow: 'hidden' }}>
          {/* Header Tag */}
          <Box sx={{ borderBottom: '1px solid', borderBottomColor: 'divider', bgcolor: mode === 'dark' ? 'rgba(5, 3, 15, 0.5)' : 'rgba(0, 0, 0, 0.02)', px: 3, py: 1.8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <span className="blinker-dot" />
              <Typography variant="caption" sx={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.15em', color: 'text.primary', fontWeight: 800 }}>
                RMS-NODE-FACTORY // LIVE VIEWPORT
              </Typography>
            </Stack>
            <Typography variant="caption" sx={{ fontFamily: 'var(--font-mono)', color: 'primary.main', fontWeight: 800 }}>
              STABLE_60_FPS
            </Typography>
          </Box>

          {/* Canvas Loop */}
          <Box sx={{ height: 280, width: '100%', position: 'relative' }}>
            <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
          </Box>

          {/* Pipeline Stage Indicators Navigation Footer */}
          <Box sx={{ 
            borderTop: '1px solid', 
            borderTopColor: 'divider',
            bgcolor: mode === 'dark' ? 'rgba(5, 3, 15, 0.6)' : 'rgba(0, 0, 0, 0.01)', 
            p: { xs: 1.5, sm: 2 } 
          }}>
            <Grid container spacing={1} justifyContent="space-between">
              {pipelineStages.map((stage, i) => {
                const isActive = currentStageIndex === i;
                return (
                  <Grid item xs={4} sm={2} key={stage.id}>
                    <Box 
                      onClick={() => {
                        triggerSoundEffect('click');
                        setActiveStageOverride(i);
                      }}
                      sx={{ 
                        textAlign: 'center', 
                        p: { xs: 0.5, sm: 1 }, 
                        borderRadius: 2, 
                        border: '1px solid',
                        borderColor: isActive ? 'primary.main' : 'transparent',
                        bgcolor: isActive 
                          ? (mode === 'dark' ? 'rgba(0, 240, 255, 0.04)' : 'rgba(0, 122, 135, 0.08)') 
                          : 'transparent',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '&:hover': {
                          bgcolor: mode === 'dark' ? 'rgba(0, 240, 255, 0.04)' : 'rgba(112, 0, 255, 0.04)',
                          borderColor: 'primary.main',
                          boxShadow: mode === 'dark' ? '0 4px 12px rgba(0, 240, 255, 0.15)' : '0 4px 12px rgba(112, 0, 255, 0.08)',
                          transform: 'translateY(-2px)'
                        },
                        '&:active': {
                          transform: 'scale(0.96) translateY(0px)'
                        }
                      }}
                    >
                      <Box sx={{ color: isActive ? 'primary.main' : 'var(--text-dark-secondary)', mb: { xs: 0.25, sm: 0.5 }, display: 'flex', justifyContent: 'center', '& .MuiSvgIcon-root': { fontSize: { xs: 16, sm: 20 } } }}>
                        {stage.icon}
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 800, 
                          fontSize: { xs: '0.5rem', sm: '0.62rem' },
                          color: isActive ? 'text.primary' : 'var(--text-dark-secondary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {stage.id}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </CyberBox>

        {/* Telemetry Control Deck (Bottom half - split horizontally) */}
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {/* Stats Deck & Dials (Left) */}
            <Grid item xs={12} lg={6}>
              <CyberBox sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: { xs: 1.5, sm: 2.5 } }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 2, fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: 1, letterSpacing: '0.05em', fontSize: { xs: '0.78rem', sm: '0.875rem' } }}>
                    <Dvr sx={{ color: 'var(--neon-cyan)', fontSize: { xs: 16, sm: 18 } }} /> RESOURCES & DIAGNOSTICS
                  </Typography>
                  
                  {/* 2x2 Numeric Stats Panel */}
                  <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: { xs: 1, sm: 1.5 }, borderRadius: 2, bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)', border: '1px solid var(--border-dark)' }}>
                        <Typography variant="caption" sx={{ color: 'var(--text-dark-secondary)', fontSize: { xs: '0.52rem', sm: '0.58rem' }, display: 'block', mb: 0.5, textTransform: 'uppercase' }}>BUILD SUCCESS</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 900, color: 'var(--neon-green)', fontFamily: 'var(--font-mono)', fontSize: { xs: '0.85rem', sm: '1rem' } }}>99.98%</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: { xs: 1, sm: 1.5 }, borderRadius: 2, bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)', border: '1px solid var(--border-dark)' }}>
                        <Typography variant="caption" sx={{ color: 'var(--text-dark-secondary)', fontSize: { xs: '0.52rem', sm: '0.58rem' }, display: 'block', mb: 0.5, textTransform: 'uppercase' }}>DEPLOYMENTS</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 900, color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)', fontSize: { xs: '0.85rem', sm: '1rem' } }}>{stats.todayDeployments}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: { xs: 1, sm: 1.5 }, borderRadius: 2, bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)', border: '1px solid var(--border-dark)' }}>
                        <Typography variant="caption" sx={{ color: 'var(--text-dark-secondary)', fontSize: { xs: '0.52rem', sm: '0.58rem' }, display: 'block', mb: 0.5, textTransform: 'uppercase' }}>ACTIVE USERS</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 900, color: 'var(--neon-pink)', fontFamily: 'var(--font-mono)', fontSize: { xs: '0.85rem', sm: '1rem' } }}>{stats.onlineUsers}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: { xs: 1, sm: 1.5 }, borderRadius: 2, bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)', border: '1px solid var(--border-dark)' }}>
                        <Typography variant="caption" sx={{ color: 'var(--text-dark-secondary)', fontSize: { xs: '0.52rem', sm: '0.58rem' }, display: 'block', mb: 0.5, textTransform: 'uppercase' }}>LATENCY RATE</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 900, color: 'var(--neon-yellow)', fontFamily: 'var(--font-mono)', fontSize: { xs: '0.85rem', sm: '1rem' } }}>{stats.responseTime}ms</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* SVG Circular Dial Meters */}
                <Stack direction="row" spacing={{ xs: 1, sm: 2 }} sx={{ pt: 1, borderTop: '1px solid', borderTopColor: 'divider' }}>
                  <CircularProgressDial value={stats.cpu} label="CPU Loading" color="var(--neon-cyan)" />
                  <CircularProgressDial value={stats.memory * 2} label="Memory Load" color="var(--neon-purple)" />
                </Stack>
              </CyberBox>
            </Grid>

            {/* Compiler Terminal (Right) */}
            <Grid item xs={12} lg={6}>
              <CyberBox sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 2, fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: 1, letterSpacing: '0.05em', fontSize: { xs: '0.78rem', sm: '0.875rem' } }}>
                  <Speed sx={{ color: 'var(--neon-purple)', fontSize: { xs: 16, sm: 18 } }} /> DIAGNOSTIC FEEDSTREAM
                </Typography>
                
                <Box 
                  ref={logContainerRef}
                  sx={{
                    bgcolor: mode === 'dark' ? '#04020d' : 'rgba(0, 0, 0, 0.03)',
                    borderRadius: 2.5,
                    p: { xs: 1.25, sm: 2 },
                    flexGrow: 1,
                    minHeight: { xs: 120, sm: 155 },
                    overflowY: 'auto',
                    border: '1px solid',
                    borderColor: 'divider',
                    fontFamily: 'var(--font-mono)',
                    fontSize: { xs: '0.62rem', sm: '0.7rem' },
                    lineHeight: 1.5,
                    color: mode === 'dark' ? 'primary.light' : 'text.primary',
                    scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': { width: 3 },
                    '&::-webkit-scrollbar-thumb': { bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', borderRadius: 2 }
                  }}
                >
                  {logs.map((log, i) => (
                    <div key={i} style={{ marginBottom: 4, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {log}
                    </div>
                  ))}
                </Box>
              </CyberBox>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

// Helper hook mapping section key to active stage array index
function useMemoStageIndex(section) {
  switch (section) {
    case 'home':
      return 0; // Stage 1: Idea
    case 'about':
    case 'why-hire-me':
      return 2; // Stage 3: Code Gen
    case 'skills':
      return 3; // Stage 4: Testing / QA
    case 'projects':
      return 4; // Stage 5: Build Deploy
    case 'timeline':
      return 5; // Stage 6: Monitoring
    default:
      return 1; // Stage 2: AI planning
  }
}

export default SoftwareFactory;
