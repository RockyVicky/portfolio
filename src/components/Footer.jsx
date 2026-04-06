import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import { ArrowUpward, Favorite, Code } from '@mui/icons-material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ pt: 8, pb: 4, bgcolor: 'background.default', position: 'relative' }}>
      <Divider sx={{ mb: 6 }} />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 2, background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)', boxShadow: '0 4px 12px rgba(112, 0, 255, 0.4)', mr: 1.5 }}>
                <Code sx={{ fontSize: 22, color: '#fff' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: 1 }}>
                R<span className="gradient-text">aakesh</span>
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Innovating the impossible, one block at a time.
            </Typography>
          </Box>

          <Stack direction="row" spacing={4} sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography component="a" href="#about" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>About</Typography>
            <Typography component="a" href="#projects" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Projects</Typography>
            <Typography component="a" href="#contact" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Contact</Typography>
          </Stack>

          <IconButton 
            onClick={scrollToTop} 
            sx={{ 
              bgcolor: 'rgba(0, 240, 255, 0.1)', 
              color: 'primary.main',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              '&:hover': { bgcolor: 'primary.main', color: '#000', transform: 'translateY(-3px)' },
              transition: 'all 0.3s'
            }}
          >
            <ArrowUpward />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', color: 'text.secondary', borderTop: '1px solid', borderColor: 'divider', pt: 3 }}>
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {new Date().getFullYear()} Raakesh Ramakrishnan. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
            Engineered with <Favorite sx={{ fontSize: 16, color: 'secondary.main', mx: 0.5 }} /> and React 18
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
