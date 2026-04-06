import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('dark');

  // Trigger CSS class for targetable globals
  useEffect(() => {
    document.body.className = mode === 'light' ? 'light-mode' : 'dark-mode';
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#00f0ff',
            light: '#5cffff',
            dark: '#00b8cc',
          },
          secondary: {
            main: '#7000ff',
            light: '#a64dff',
            dark: '#4c00b3',
          },
          background: {
            default: mode === 'dark' ? '#07090f' : '#f8f9fa',
            paper: mode === 'dark' ? 'rgba(22, 27, 44, 0.4)' : 'rgba(255, 255, 255, 0.7)',
          },
          divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: { fontFamily: '"Outfit", sans-serif', fontWeight: 900, letterSpacing: '-0.02em' },
          h2: { fontFamily: '"Outfit", sans-serif', fontWeight: 800, letterSpacing: '-0.01em' },
          h3: { fontFamily: '"Outfit", sans-serif', fontWeight: 800 },
          h4: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
          h5: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
          h6: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
        },
        shape: {
          borderRadius: 16,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                textTransform: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              },
              contained: {
                background: 'linear-gradient(45deg, #00f0ff 30%, #7000ff 90%)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(112, 0, 255, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 25px rgba(0, 240, 255, 0.5)',
                  transform: 'translateY(-2px)',
                },
              },
              outlined: {
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                  transform: 'translateY(-2px)',
                },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
        },
      }),
    [mode]
  );
  
  const finalTheme = useMemo(() => responsiveFontSizes(theme), [theme]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={finalTheme}>
      <CssBaseline />
      <Navbar mode={mode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
