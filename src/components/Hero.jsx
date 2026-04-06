import { Box, Typography, Button, Container, Stack, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Email, CloudDownload, ArrowForward } from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const theme = useTheme();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <Box id="home" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glowing Orbs */}
      <Box component={motion.div} style={{ y: y1 }}
        sx={{
          position: 'absolute', top: '10%', right: '5%', width: { xs: 200, md: 400 }, height: { xs: 200, md: 400 },
          background: 'radial-gradient(circle, rgba(112,0,255,0.25) 0%, rgba(112,0,255,0) 70%)',
          borderRadius: '50%', filter: 'blur(40px)', zIndex: 0,
          animation: 'float1 8s infinite ease-in-out'
        }}
      />
      <Box component={motion.div} style={{ y: y2 }}
        sx={{
          position: 'absolute', bottom: '10%', left: '0%', width: { xs: 250, md: 500 }, height: { xs: 250, md: 500 },
          background: 'radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(0,240,255,0) 70%)',
          borderRadius: '50%', filter: 'blur(50px)', zIndex: 0,
          animation: 'float2 10s infinite ease-in-out'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 10 }}>
        <Stack spacing={4} sx={{ maxWidth: '850px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <Typography variant="h6" color="secondary.main" sx={{ mb: 1, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Welcome to my universe
            </Typography>
            
            <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', sm: '5rem', md: '6.5rem' }, lineHeight: 1.1, mb: 2 }}>
              Hi, I'm <br />
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                <span className="gradient-text" style={{ background: 'linear-gradient(45deg, #00f0ff, #7000ff)', WebkitBackgroundClip: 'text' }}>Raakesh</span>
                <span className="gradient-text" style={{ background: 'linear-gradient(45deg, #7000ff, #ff0070)', WebkitBackgroundClip: 'text', marginLeft: '12px' }}>Ramakrishnan</span>
              </Box>
            </Typography>
            
            <Typography variant="h4" color="text.primary" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              Full-Stack Engineer <Box component="span" sx={{ color: 'divider' }}>|</Box> <span style={{ color: theme.palette.primary.main }}>React.js</span> <Box component="span" sx={{ color: 'divider' }}>|</Box> <span style={{ color: theme.palette.secondary.main }}>React Native</span> <Box component="span" sx={{ color: 'divider' }}>|</Box> <span style={{ color: '#00cc66' }}>Node.js</span>
            </Typography>
            
            <Typography variant="h6" color="text.secondary" sx={{ mb: 5, fontWeight: 400, maxWidth: '650px', lineHeight: 1.6 }}>
              I engineer robust, scalable applications that sit at the intersection of beautiful UX and bleeding-edge performance.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 5 }}>
              <Button variant="contained" size="large" endIcon={<ArrowForward />} onClick={() => document.getElementById('projects').scrollIntoView()} sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}>
                Explore My Work
              </Button>
              <Button variant="outlined" size="large" onClick={() => document.getElementById('contact').scrollIntoView()} sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}>
                Let's Talk
              </Button>
            </Stack>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Connect :</Typography>
                <IconButtonComponent icon={<LinkedIn />} link="https://linkedin.com" />
                <IconButtonComponent icon={<GitHub />} link="https://github.com/raakeshofficial" />
                <IconButtonComponent icon={<Email />} link="mailto:raakeshofficial777@gmail.com" />
                <Button variant="text" size="small" startIcon={<CloudDownload />} color="secondary" sx={{ ml: 'auto' }}>
                  Download CV
                </Button>
              </Stack>
            </motion.div>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

const IconButtonComponent = ({ icon, link }) => (
  <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}>
    <Button component="a" href={link} target="_blank" rel="noopener noreferrer" variant="outlined" color="primary" sx={{ 
      minWidth: '45px', width: '45px', height: '45px', p: 0, borderRadius: '50%',
      backdropFilter: 'blur(10px)', background: 'rgba(0, 240, 255, 0.05)'
    }}>
      {icon}
    </Button>
  </motion.div>
);

export default Hero;
