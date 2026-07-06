import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { AutoAwesome, Devices, Insights, Code, Dvr } from '@mui/icons-material';

const highlights = [
  {
    icon: <Code sx={{ color: 'var(--neon-cyan)' }} />,
    title: 'Full Stack Assembly',
    desc: 'Structuring modular web architectures using TS, Next.js, and Node.js.'
  },
  {
    icon: <Devices sx={{ color: 'var(--neon-purple)' }} />,
    title: 'Mobile Transceivers',
    desc: 'Shipping cross-platform mobile packages via React Native & native SDKs.'
  },
  {
    icon: <AutoAwesome sx={{ color: 'var(--neon-pink)' }} />,
    title: 'AI Swarm Pipelines',
    desc: 'Connecting LLM logic chains, vector databases, and autonomous agents.'
  },
  {
    icon: <Insights sx={{ color: 'var(--neon-green)' }} />,
    title: 'SaaS Deliveries',
    desc: 'Automating developer workflows, bulk APIs, and scalable databases.'
  }
];

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 15 }, position: 'relative', overflow: 'hidden' }}>
      <Box className="bg-mesh-glow" sx={{
        top: '20%',
        left: '-10%',
        background: 'radial-gradient(circle, rgba(112,0,255,0.04) 0%, transparent 70%)',
      }} />

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Column: Factory Overview Specs */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
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
                Factory Specifications
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 4 }}>
                Product-First <br />
                <span className="gradient-text">Software Builder.</span>
              </Typography>

              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600, 
                  color: 'var(--text-dark-primary)', 
                  lineHeight: 1.5,
                  fontSize: { xs: '1.15rem', md: '1.35rem' }
                }}
              >
                "I build autonomous systems and digital assets that solve actual business challenges."
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1rem', 
                  mb: 3, 
                  color: 'var(--text-dark-secondary)', 
                  lineHeight: 1.7 
                }}
              >
                As a Full Stack Engineer with 4+ years of enterprise experience, I focus on automating pipelines and packaging code structures into robust SaaS units.
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1rem', 
                  color: 'var(--text-dark-secondary)', 
                  lineHeight: 1.7,
                  mb: 5
                }}
              >
                My roadmap centers on designing developer products, microservices, and AI-enabled workflows that streamline operations for modern engineering teams.
              </Typography>
            </motion.div>

            {/* highlights list */}
            <Grid container spacing={{ xs: 2.5, sm: 3 }}>
              {highlights.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ 
                        width: 40, height: 40, borderRadius: 2, 
                        bgcolor: 'action.hover', border: '1px solid', borderColor: 'divider',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)', fontSize: '0.85rem', lineHeight: 1.4 }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column: Developer Identity Console */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
            >
              <Paper 
                className="glass-card"
                sx={{
                  p: { xs: 2.5, md: 4 },
                  borderRadius: 4.5,
                  position: 'relative',
                  width: { xs: '100%', sm: 360 },
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 20px 50px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Visual scanning line simulation */}
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
                  animation: 'scanLine 3s linear infinite',
                  zIndex: 2,
                  pointerEvents: 'none'
                }} />

                {/* Avatar frame */}
                <Box sx={{
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)',
                  p: '3px',
                  mx: 'auto',
                  mb: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 0 20px rgba(112, 0, 255, 0.3)'
                }}>
                  <Box sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? '#0a071a' : '#ffffff',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Box 
                      component="img"
                      src="/images/profile-avatar.png"
                      alt="Developer Avatar"
                      sx={{ width: '103%', height: '103%', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>

                {/* Identity logs */}
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5, fontFamily: 'var(--font-heading)' }}>
                    Raakesh R.
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Senior Pipeline Engineer
                  </Typography>
                </Box>

                <Stack spacing={1.2} sx={{ 
                  p: { xs: 1.5, sm: 2 }, 
                  borderRadius: 2.5, 
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? '#04020d' : 'rgba(0, 0, 0, 0.02)', 
                  border: '1px solid',
                  borderColor: 'divider',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-dark-secondary)'
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>STATUS:</span>
                    <span style={{ color: '#00ff66', fontWeight: 'bold' }}>ONLINE</span>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>STACK:</span>
                    <span style={{ color: 'var(--text-dark-primary)', fontWeight: 'bold' }}>FULL-STACK</span>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>PIPELINE:</span>
                    <span style={{ color: '#00f0ff', fontWeight: 'bold' }}>ACTIVE_GEN</span>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>THREADS:</span>
                    <span style={{ color: '#ffe259', fontWeight: 'bold' }}>60 FPS LOCKED</span>
                  </Box>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
