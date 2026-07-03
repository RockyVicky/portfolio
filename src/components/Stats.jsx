import { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const statsData = [
  { value: 4, suffix: '+', label: 'Years Experience', description: 'Production-grade software delivery' },
  { value: 15, suffix: '+', label: 'Flagship Techs', description: 'Full Stack & AI integrations' },
  { value: 1000, suffix: '+', label: 'GitHub Commits', description: 'Consistent open-source contributions' },
  { value: 5, suffix: '+', label: 'Production Apps', description: 'Enterprise dashboards & mobile platforms' }
];

const Counter = ({ value, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <Box sx={{ py: 10, position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {statsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 4,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle at top right, rgba(0, 240, 255, 0.05), transparent 70%)',
                      pointerEvents: 'none'
                    }
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: '3rem', md: '4rem' },
                      mb: 1,
                      fontFamily: 'var(--font-heading)',
                      background: index % 2 === 0 
                        ? 'linear-gradient(135deg, var(--neon-cyan) 0%, var(--neon-purple) 100%)' 
                        : 'linear-gradient(135deg, var(--neon-pink) 0%, var(--neon-purple) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'var(--text-dark-primary)',
                      mb: 1,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontSize: '1rem'
                    }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--text-dark-secondary)',
                      lineHeight: 1.5
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
