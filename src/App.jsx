import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline, Box, CircularProgress } from '@mui/material';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load secondary sections for optimal bundle size and Lighthouse scores
const Stats = lazy(() => import('./components/Stats'));
const About = lazy(() => import('./components/About'));
const WhyHireMe = lazy(() => import('./components/WhyHireMe'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '30vh', py: 5 }}>
    <CircularProgress size={30} sx={{ color: '#00f0ff' }} />
  </Box>
);

function App() {
  const [mode, setMode] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  // Trigger CSS class for targeting global mode settings
  useEffect(() => {
    document.body.className = mode === 'light' ? 'light-mode' : 'dark-mode';
    document.body.style.backgroundColor = mode === 'dark' ? '#030014' : '#f8f9fa';
  }, [mode]);

  // Scroll Spy to track active section
  useEffect(() => {
    const sections = ['home', 'about', 'why-hire-me', 'skills', 'projects', 'timeline', 'contact'];
    
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      }, { 
        threshold: 0.15, // 15% in view triggers state
        rootMargin: '-80px 0px -20% 0px' // adjust for headers and viewport offsets
      });
      
      observer.observe(el);
      return { observer, el };
    }).filter(Boolean);

    return () => {
      observers.forEach(obs => {
        obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#00f0ff' : '#007a87',
            light: mode === 'dark' ? '#5cffff' : '#33cbd9',
            dark: mode === 'dark' ? '#00b8cc' : '#005963',
          },
          secondary: {
            main: mode === 'dark' ? '#7000ff' : '#5200cc',
            light: mode === 'dark' ? '#a64dff' : '#7a1aff',
            dark: mode === 'dark' ? '#4c00b3' : '#3d008f',
          },
          background: {
            default: mode === 'dark' ? '#030014' : '#f8f9fa',
            paper: mode === 'dark' ? 'rgba(10, 7, 26, 0.45)' : 'rgba(255, 255, 255, 0.75)',
          },
          text: {
            primary: mode === 'dark' ? '#f3f1fe' : '#110e1f',
            secondary: mode === 'dark' ? '#b4aecc' : '#575466',
          },
          divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: { fontFamily: '"Outfit", sans-serif', fontWeight: 900, letterSpacing: '-0.02em' },
          h2: { fontFamily: '"Outfit", sans-serif', fontWeight: 800, letterSpacing: '-0.015em' },
          h3: { fontFamily: '"Outfit", sans-serif', fontWeight: 800, letterSpacing: '-0.01em' },
          h4: { fontFamily: '"Outfit", sans-serif', fontWeight: 700 },
          h5: { fontFamily: '"Outfit", sans-serif', fontWeight: 700 },
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
                fontWeight: 700,
                transition: 'all 0.3s ease',
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
      <Hero activeSection={activeSection} mode={mode} />
      <Suspense fallback={<LoadingFallback />}>
        <Stats />
        <About />
        <WhyHireMe />
        <Skills />
        <Projects />
        <Timeline />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
