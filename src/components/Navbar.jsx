import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, useTheme } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon, Code, Close as CloseIcon } from '@mui/icons-material';

const Navbar = ({ mode, toggleTheme }) => {
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  const menuItems = ['About', 'Skills', 'Projects', 'Timeline', 'Contact'];

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          background: scrolled 
            ? (mode === 'dark' ? 'rgba(3, 0, 20, 0.75)' : 'rgba(255, 255, 255, 0.85)') 
            : 'transparent', 
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          borderBottom: scrolled ? '1px solid var(--border-dark)' : '1px solid transparent',
          py: scrolled ? 1 : 2.5
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
            {/* Logo */}
            <Box 
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: 38, 
                height: 38, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)', 
                boxShadow: '0 4px 15px rgba(112, 0, 255, 0.4)', 
                mr: 1.5 
              }}>
                <Code sx={{ fontSize: 22, color: '#fff' }} />
              </Box>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 900, 
                  letterSpacing: '0.05em', 
                  fontFamily: 'var(--font-heading)',
                  fontSize: { xs: '1.15rem', sm: '1.25rem', md: '1.5rem' },
                  color: 'var(--text-dark-primary)'
                }}
              >
                R<span className="gradient-text">aakesh</span>
              </Typography>
            </Box>
            
            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="focusable control-console-item"
                  sx={{ 
                    color: 'var(--text-dark-secondary)', 
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: 'all 0.3s',
                    '&:hover': { 
                      color: 'primary.main', 
                      background: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' 
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
              <Box sx={{ width: '1px', height: '20px', bgcolor: 'var(--border-dark)', mx: 1.5 }} />
              
              {/* Theme toggle indicator */}
              <IconButton 
                onClick={toggleTheme} 
                sx={{ 
                  color: 'var(--text-dark-primary)',
                  bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                  border: '1px solid var(--border-dark)',
                  '&:hover': { bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }
                }}
              >
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
            
            {/* Mobile Actions */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1.5 }}>
              <IconButton 
                onClick={toggleTheme} 
                sx={{ 
                  color: 'var(--text-dark-primary)', 
                  bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                  border: '1px solid var(--border-dark)',
                  width: 44,
                  height: 44
                }}
              >
                {mode === 'dark' ? <Brightness7 sx={{ fontSize: 20 }} /> : <Brightness4 sx={{ fontSize: 20 }} />}
              </IconButton>
              <IconButton 
                onClick={handleDrawerToggle} 
                sx={{ 
                  color: 'var(--text-dark-primary)',
                  bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                  border: '1px solid var(--border-dark)',
                  width: 44,
                  height: 44
                }}
              >
                <MenuIcon sx={{ fontSize: 22 }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280, 
            background: mode === 'dark' ? 'rgba(10, 7, 26, 0.96)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid var(--border-dark)',
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            p: 3,
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-dark-primary)', fontSize: '1.25rem' }}>
            Menu
          </Typography>
          <IconButton 
            onClick={handleDrawerToggle} 
            sx={{ 
              color: 'var(--text-dark-primary)', 
              width: 40, 
              height: 40,
              bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
              border: '1px solid var(--border-dark)'
            }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'var(--border-dark)', mb: 3 }} />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding sx={{ mb: 1.5 }}>
              <ListItemButton 
                onClick={() => { handleDrawerToggle(); scrollToSection(item.toLowerCase()); }} 
                sx={{ 
                  textAlign: 'left', 
                  py: 1.8,
                  px: 2.5,
                  borderRadius: 3,
                  border: '1px solid transparent',
                  transition: 'all 0.25s',
                  '&:hover': { 
                    bgcolor: mode === 'dark' ? 'rgba(0, 240, 255, 0.04)' : 'rgba(112, 0, 255, 0.04)',
                    borderColor: 'primary.main'
                  }
                }} 
              >
                <ListItemText 
                  primary={item} 
                  primaryTypographyProps={{ 
                    fontWeight: 700,
                    color: 'var(--text-dark-primary)',
                    fontSize: '1.05rem',
                    letterSpacing: '0.02em'
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
