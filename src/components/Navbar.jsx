import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, useTheme } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon, Code } from '@mui/icons-material';

const Navbar = ({ mode, toggleTheme }) => {
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0} 
      sx={{ 
        background: scrolled ? (mode === 'dark' ? 'rgba(7, 9, 15, 0.85)' : 'rgba(255, 255, 255, 0.85)') : 'transparent', 
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
        padding: scrolled ? '0' : '10px 0'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: '80px' }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => scrollToTop()}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 2, background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)', boxShadow: '0 4px 12px rgba(112, 0, 255, 0.4)', mr: 1.5 }}>
              <Code sx={{ fontSize: 24, color: '#fff' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: 1 }}>
              Dev<span className="gradient-text">Raakesh</span>
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <Button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                sx={{ 
                  color: 'text.primary', 
                  fontSize: '1rem',
                  px: 2,
                  '&:hover': { color: 'primary.main', background: 'transparent' }
                }}
              >
                {item}
              </Button>
            ))}
            <Box sx={{ width: '1px', height: '24px', bgcolor: 'divider', mx: 2 }} />
            <IconButton onClick={toggleTheme} sx={{ color: 'text.primary' }}>
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
          
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={toggleTheme} sx={{ mr: 1, color: 'text.primary' }}>
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <IconButton sx={{ color: 'text.primary' }} edge="end">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default Navbar;
