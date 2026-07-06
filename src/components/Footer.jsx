import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { ArrowUpward, Favorite, Code, LinkedIn, GitHub, Email } from '@mui/icons-material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = ['About', 'Skills', 'Projects', 'Timeline', 'Contact'];

  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, pb: 4, bgcolor: 'var(--bg-dark)', position: 'relative', borderTop: '1px solid var(--border-dark)' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 5 
        }}>
          {/* Logo Brand */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1.5 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: 32, 
                height: 32, 
                borderRadius: 1.5, 
                background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)', 
                mr: 1.25 
              }}>
                <Code sx={{ fontSize: 18, color: '#fff' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--text-dark-primary)', letterSpacing: '0.05em' }}>
                R<span className="gradient-text">aakesh</span>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)', fontSize: '0.85rem' }}>
              Full Stack Engineer & AI Product Builder.
            </Typography>
          </Box>

          {/* Quick Menu */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 2, sm: 4 }} 
            alignItems="center"
            sx={{ mb: { xs: 4, md: 0 } }}
          >
            {menuItems.map((item) => (
              <Typography 
                key={item} 
                component="a" 
                href={`#${item.toLowerCase()}`} 
                variant="body2" 
                sx={{ 
                  color: 'var(--text-dark-secondary)', 
                  textDecoration: 'none', 
                  fontWeight: 600,
                  transition: 'color 0.3s',
                  '&:hover': { color: '#00f0ff' } 
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>

          {/* Scroll to Top */}
          <IconButton 
            onClick={scrollToTop} 
            sx={{ 
              bgcolor: 'rgba(0, 240, 255, 0.05)', 
              color: '#00f0ff',
              border: '1px solid rgba(0, 240, 255, 0.15)',
              width: 44,
              height: 44,
              '&:hover': { bgcolor: '#00f0ff', color: '#030014', transform: 'translateY(-3px)' },
              transition: 'all 0.3s'
            }}
          >
            <ArrowUpward sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Lower Footer */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          color: 'var(--text-dark-secondary)', 
          borderTop: '1px solid var(--border-dark)', 
          pt: { xs: 3, sm: 4 } 
        }}>
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 }, fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Raakesh Ramakrishnan. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', fontSize: '0.8rem' }}>
            Engineered with <Favorite sx={{ fontSize: 14, color: '#ff0070', mx: 0.5 }} /> utilizing React & MUI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
