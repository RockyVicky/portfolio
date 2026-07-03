import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  PrecisionManufacturing, 
  Layers, 
  Psychology, 
  Devices, 
  Api, 
  Speed, 
  AutoAwesome, 
  School 
} from '@mui/icons-material';

const reasons = [
  {
    icon: <PrecisionManufacturing sx={{ fontSize: 36, color: 'var(--neon-cyan)' }} />,
    title: 'Production Experience',
    desc: '4+ years of shipping enterprise web architectures, dashboards, and live-streaming apps.'
  },
  {
    icon: <Layers sx={{ fontSize: 36, color: 'var(--neon-purple)' }} />,
    title: 'Clean Architecture',
    desc: 'Deep focus on code splitting, atomic design, loose coupling, and robust state management.'
  },
  {
    icon: <Psychology sx={{ fontSize: 36, color: 'var(--neon-pink)' }} />,
    title: 'Problem Solving',
    desc: 'Engineering products that tackle real-world customer pain points rather than just writing code.'
  },
  {
    icon: <Devices sx={{ fontSize: 36, color: 'var(--neon-green)' }} />,
    title: 'Cross-Platform Mastery',
    desc: 'Building responsive desktop-grade web applications alongside fully native mobile apps.'
  },
  {
    icon: <Api sx={{ fontSize: 36, color: 'var(--neon-yellow)' }} />,
    title: 'Robust API Design',
    desc: 'Writing highly secure role-based portals, RESTful endpoints, and real-time Socket.io channels.'
  },
  {
    icon: <Speed sx={{ fontSize: 36, color: 'var(--neon-red)' }} />,
    title: 'Performance-First',
    desc: 'Profiling, lazy loading, and database indexing to hit lightning-fast load targets.'
  },
  {
    icon: <AutoAwesome sx={{ fontSize: 36, color: 'var(--neon-cyan)' }} />,
    title: 'AI-First Integration',
    desc: 'Architecting products using LLMs, Prompt Engineering, Agentic AI systems, and MCP servers.'
  },
  {
    icon: <School sx={{ fontSize: 36, color: 'var(--neon-purple-light)' }} />,
    title: 'Continuous Learner',
    desc: 'Currently mastering AWS Cloud architectures, vector databases, and SaaS design patterns.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const WhyHireMe = () => {
  const theme = useTheme();

  return (
    <Box id="why-hire-me" sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      {/* Background radial highlight */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw',
        height: '70vh',
        background: 'radial-gradient(circle, rgba(112,0,255,0.03) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              color: 'primary.main', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              mb: 1 
            }}
          >
            Engineering Strengths
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Why <span className="gradient-text">Hire Me</span>
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={3} 
          component={motion.div} 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: '-100px' }}
        >
          {reasons.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div variants={cardVariants} whileHover={{ y: -6 }}>
                <Box
                    className="glass-card"
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      '&:hover': {
                        background: (theme) => theme.palette.mode === 'dark' ? 'rgba(15, 10, 36, 0.65)' : 'rgba(0, 0, 0, 0.02)',
                      }
                    }}
                >
                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 1.5, 
                      fontSize: '1.25rem',
                      color: 'var(--text-dark-primary)' 
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'var(--text-dark-secondary)', 
                      lineHeight: 1.6,
                      fontSize: '0.9rem' 
                    }}
                  >
                    {item.desc}
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

export default WhyHireMe;
