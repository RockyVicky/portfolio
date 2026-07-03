import { Box, Typography, Button, Container, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, CloudDownload, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SoftwareFactory from './SoftwareFactory';

const Hero = ({ activeSection = 'home', mode = 'dark' }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      id="home" 
      sx={{ 
        minHeight: { xs: 'auto', md: '100vh' }, 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative', 
        overflow: 'hidden',
        background: 'var(--bg-dark)',
        pt: { xs: 14, md: 10 },
        pb: { xs: 8, md: 6 }
      }}
    >
      {/* Background Decorative Mesh lights */}
      <Box 
        sx={{
          position: 'absolute', top: '10%', left: '10%', width: { xs: 200, md: 400 }, height: { xs: 200, md: 400 },
          background: 'radial-gradient(circle, rgba(112,0,255,0.06) 0%, rgba(112,0,255,0) 70%)',
          borderRadius: '50%', filter: 'blur(60px)', zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <GridHeroContainer>
          {/* Left Column: Core Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Pulsating heart indicator of active factory */}
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <Box sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: '#00ff66',
                boxShadow: '0 0 10px #00ff66',
                animation: 'pulse 1.8s infinite'
              }} />
              <Typography variant="body2" sx={{ fontWeight: 800, color: '#00ff66', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                AUTONOMOUS SYSTEM ONLINE
              </Typography>
            </Stack>

            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', sm: '3.6rem', md: '4.2rem' }, 
                lineHeight: 1.15, 
                fontWeight: 900,
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                mb: 3
              }}
            >
              Engineering Scalable <br />
              <span className="gradient-text">Software Pipelines.</span>
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                color: 'var(--text-dark-secondary)', 
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.7,
                maxWidth: '560px',
                mb: 5
              }}
            >
              Hi, I'm <strong style={{ color: 'var(--text-dark-primary)' }}>Raakesh Ramakrishnan</strong>. With 4+ years of professional experience, I design and build production-grade web, mobile, and AI applications, treating software delivery as a continuous, automated assembly line.
            </Typography>

            {/* CTA Actions */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ mb: 5 }}>
              <Button 
                variant="contained" 
                size="large" 
                onClick={() => scrollToSection('projects')}
                endIcon={<ArrowForward />} 
                sx={{ 
                  px: 4, 
                  py: 1.8, 
                  fontSize: '0.95rem', 
                  borderRadius: 3,
                  fontWeight: 700,
                  textTransform: 'none',
                  background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)',
                  boxShadow: '0 4px 20px rgba(112, 0, 255, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #00f0ff 20%, #7000ff 100%)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Inspect Factory Works
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                onClick={() => scrollToSection('contact')}
                sx={{ 
                  px: 4, 
                  py: 1.8, 
                  fontSize: '0.95rem', 
                  borderRadius: 3,
                  fontWeight: 700,
                  textTransform: 'none',
                  borderColor: 'divider',
                  color: 'text.primary',
                  background: 'transparent',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: 'action.hover',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Connect with Me
              </Button>
            </Stack>

            {/* Footer socials */}
            <Stack direction="row" spacing={1.5} alignItems="center">
              <IconButton 
                component="a" 
                href="https://www.linkedin.com/in/raakesh-ramakrishnan-349280268" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: 'var(--text-dark-secondary)', 
                  border: '1px solid var(--border-dark)',
                  background: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                  '&:hover': { color: 'primary.main', borderColor: 'primary.main', background: mode === 'dark' ? 'rgba(0, 240, 255, 0.05)' : 'rgba(0, 122, 135, 0.06)' }
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://github.com/RockyVicky" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: 'var(--text-dark-secondary)', 
                  border: '1px solid var(--border-dark)',
                  background: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                  '&:hover': { color: 'secondary.main', borderColor: 'secondary.main', background: mode === 'dark' ? 'rgba(112, 0, 255, 0.05)' : 'rgba(82, 0, 204, 0.06)' }
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton 
                component="a" 
                href="mailto:raakeshofficial777@gmail.com"
                sx={{ 
                  color: 'var(--text-dark-secondary)', 
                  border: '1px solid var(--border-dark)',
                  background: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                  '&:hover': { color: '#ff0070', borderColor: '#ff0070', background: mode === 'dark' ? 'rgba(255, 0, 112, 0.05)' : 'rgba(204, 0, 89, 0.06)' }
                }}
              >
                <Email />
              </IconButton>
              <Box sx={{ width: '1px', height: '24px', bgcolor: 'var(--border-dark)', mx: 1 }} />
              <Button 
                variant="text" 
                color="secondary" 
                sx={{ 
                  fontWeight: 700, 
                  color: 'var(--text-dark-secondary)',
                  '&:hover': { color: 'text.primary' }
                }}
              >
                Download CV
              </Button>
            </Stack>
          </motion.div>

          {/* Right Column: Visual Telemetry Factory Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SoftwareFactory activeSection={activeSection} mode={mode} />
          </motion.div>
        </GridHeroContainer>
      </Container>
    </Box>
  );
};

// Custom responsive grid wrapper using standard MUI Box
const GridHeroContainer = ({ children }) => (
  <Box sx={{
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '1fr 1.2fr' },
    gap: { xs: 8, lg: 4 },
    alignItems: 'center'
  }}>
    {children}
  </Box>
);

export default Hero;
