import { useState } from 'react';
import { Box, Container, Typography, Tab, Tabs, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { School, BusinessCenter, AutoAwesome, Terminal, Rocket } from '@mui/icons-material';

const careerTimeline = [
  {
    type: 'experience',
    title: 'Independent AI R&D & Upskilling',
    subtitle: 'Self-Directed Career Evolution',
    date: 'Feb 2026 - Present',
    desc: 'Deep diving into cognitive AI agent architectures, vector database RAG search pipelines, and Model Context Protocol (MCP) integrations to prepare for building next-generation autonomous software products.',
    icon: <AutoAwesome />
  },
  {
    type: 'experience',
    title: 'Full-Stack Engineer',
    subtitle: 'Eligarf Technologies',
    date: 'Feb 2025 - Feb 2026',
    desc: 'Architected comprehensive community APIs and astrology trees for iMeUsWe mobile platform. Developed Agora-based live streaming environments. Streamlined developer workflows using Cursor & Antigravity IDE models.',
    icon: <BusinessCenter />
  },
  {
    type: 'experience',
    title: 'Full-Stack Engineer',
    subtitle: 'Kenla Systems',
    date: 'Jan 2022 - Feb 2025',
    desc: 'Engineered web and mobile platforms across MedTech (MedFilo EMR with Regula Identity SDK verification) and B2B workflow solutions. Scaled distributed databases (PostgreSQL & MongoDB) and established role-based access architectures.',
    icon: <BusinessCenter />
  },
  {
    type: 'education',
    title: 'Software Engineering Training & Certifications',
    subtitle: 'Advanced Full Stack & Cloud architectures',
    date: '2021',
    desc: 'Intensive immersion in full-stack JS frameworks, database normalization, system scalability, and software design principles.',
    icon: <School />
  }
];

const aiJourney = [
  { step: 'React Developer', desc: 'Crafting responsive user interfaces, mastering state machines, hooks, and virtual DOM algorithms.', status: 'completed' },
  { step: 'React Native', desc: 'Transitioning to mobile. Bridging native threads, performance profiling, and deploying production iOS/Android packages.', status: 'completed' },
  { step: 'Full Stack', desc: 'Scaling backend APIs. Implementing microservices, authorization layers, WebSockets, and query tuning in SQL/NoSQL.', status: 'completed' },
  { step: 'Cloud & DevOps', desc: 'Deploying robust products. Integrating AWS, Docker containers, automated CI/CD pipelines, and cloud security.', status: 'completed' },
  { step: 'AI Engineering', desc: 'Unlocking cognitive architectures. Writing Prompt Engineering chains, vector embeddings, and RAG pipelines.', status: 'current' },
  { step: 'Agentic AI & MCP', desc: 'Designing self-correcting agents, Model Context Protocol (MCP) integrations, and complex tool-use frameworks.', status: 'upcoming' },
  { step: 'SaaS Builder', desc: 'Independent builder mindset. Launching AI-powered micro-SaaS and productivity automation tools for global users.', status: 'future' }
];

const Timeline = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box id="timeline" sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      <Box className="bg-mesh-glow" sx={{
        top: '10%',
        right: '10%',
        background: 'radial-gradient(circle, rgba(112,0,255,0.05) 0%, transparent 70%)',
      }} />

      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1 }}>
            Chronology
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Evolution & <span className="gradient-text">Milestones</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, width: '100%' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            textColor="primary" 
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(10, 7, 26, 0.4)' : 'rgba(0, 0, 0, 0.03)',
              borderRadius: 3,
              p: 0.5,
              border: '1px solid var(--border-dark)',
              width: '100%',
              '& .MuiTabs-indicator': {
                height: '100%',
                borderRadius: 2.5,
                zIndex: 0,
                opacity: 0.15,
                background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)'
              },
              '& .MuiTab-root': {
                fontWeight: 700,
                borderRadius: 2.5,
                px: { xs: 2, sm: 4 },
                zIndex: 1,
                textTransform: 'none',
                transition: 'color 0.3s',
                fontSize: { xs: '0.8rem', sm: '1rem' }
              }
            }}
          >
            <Tab label="Professional Timeline" />
            <Tab label="AI Learning Journey" />
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          {activeTab === 0 ? (
            <motion.div
              key="career"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ maxWidth: '800px', mx: 'auto', position: 'relative', pl: { xs: 3, sm: 4 } }}>
                {/* Center / Left line */}
                <Box sx={{
                  position: 'absolute',
                  left: 0,
                  top: 8,
                  bottom: 8,
                  width: '2px',
                  background: 'linear-gradient(180deg, #00f0ff 0%, #7000ff 50%, rgba(112,0,255,0.1) 100%)',
                  boxShadow: '0 0 8px rgba(0, 240, 255, 0.4)'
                }} />

                {careerTimeline.map((item, index) => (
                  <Box key={index} sx={{ position: 'relative', mb: 6, pl: { xs: 2.5, sm: 6 } }}>
                    {/* Node Icon Indicator */}
                    <Box sx={{
                      position: 'absolute',
                      left: { xs: -16, sm: -20 },
                      top: 4,
                      width: { xs: 32, sm: 40 },
                      height: { xs: 32, sm: 40 },
                      borderRadius: '50%',
                      background: (theme) => theme.palette.mode === 'dark' ? 'rgba(3, 0, 20, 0.95)' : '#ffffff',
                      border: `2px solid var(${index === 0 ? '--neon-cyan' : '--neon-purple'})`,
                      boxShadow: `0 0 10px var(${index === 0 ? '--neon-cyan' : '--neon-purple'})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: `var(${index === 0 ? '--neon-cyan' : '--neon-purple'})`,
                      zIndex: 2,
                      '& svg': {
                        fontSize: { xs: 16, sm: 20 }
                      }
                    }}>
                      {item.icon}
                    </Box>

                    <Box 
                      className="glass-card" 
                      sx={{ 
                        p: { xs: 2.5, sm: 4 }, 
                        borderRadius: 3, 
                        '&:hover': {
                          borderColor: index === 0 ? 'rgba(0, 240, 255, 0.2)' : 'rgba(112, 0, 255, 0.2)'
                        }
                      }}
                    >
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                        {item.date}
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, fontSize: { xs: '1.15rem', sm: '1.75rem' } }}>
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'var(--text-dark-secondary)', fontWeight: 600, mb: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                        {item.subtitle}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'var(--text-dark-secondary)', lineHeight: 1.6, fontSize: { xs: '0.85rem', sm: '1rem' } }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          ) : (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center" sx={{ maxWidth: '900px', mx: 'auto' }}>
                {aiJourney.map((step, index) => {
                  let badgeColor = '';
                  let glowColor = '';
                  let statusText = '';
                  let typeIcon = <Terminal />;

                  if (step.status === 'completed') {
                    badgeColor = 'rgba(0, 255, 102, 0.15)';
                    glowColor = 'rgba(0, 255, 102, 0.3)';
                    statusText = 'MASTERED';
                  } else if (step.status === 'current') {
                    badgeColor = 'rgba(0, 240, 255, 0.15)';
                    glowColor = 'rgba(0, 240, 255, 0.6)';
                    statusText = 'ACTIVE FOCUS';
                    typeIcon = <AutoAwesome />;
                  } else {
                    badgeColor = 'rgba(112, 0, 255, 0.1)';
                    glowColor = 'rgba(112, 0, 255, 0.2)';
                    statusText = 'ROADMAP';
                    typeIcon = <Rocket />;
                  }

                  return (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <motion.div
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Box
                          className="glass-card"
                          sx={{
                            p: { xs: 2.5, sm: 3 },
                            height: '100%',
                            borderRadius: 3.5,
                            background: (theme) => {
                              const isDark = theme.palette.mode === 'dark';
                              if (step.status === 'current') {
                                return isDark ? 'rgba(15, 10, 36, 0.6)' : 'rgba(112, 0, 255, 0.05)';
                              }
                              return 'var(--bg-dark-card)';
                            },
                            borderColor: (theme) => {
                              if (step.status === 'current') {
                                return theme.palette.mode === 'dark' ? '#00f0ff' : '#7000ff';
                              }
                              return 'var(--border-dark)';
                            },
                            boxShadow: (theme) => {
                              if (step.status === 'current') {
                                return theme.palette.mode === 'dark' 
                                  ? '0 10px 30px rgba(0, 240, 255, 0.15)' 
                                  : '0 10px 30px rgba(112, 0, 255, 0.08)';
                              }
                              return 'none';
                            },
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                          }}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{
                              width: 36,
                              height: 36,
                              borderRadius: 2,
                              background: badgeColor,
                              border: `1px solid ${glowColor}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: step.status === 'completed' ? '#00ff66' : step.status === 'current' ? '#00f0ff' : '#7000ff'
                            }}>
                              {typeIcon}
                            </Box>
                            <Box sx={{
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1.5,
                              bgcolor: badgeColor,
                              border: `1px solid ${glowColor}`,
                              fontSize: '0.65rem',
                              fontWeight: 800,
                              letterSpacing: '0.05em',
                              color: step.status === 'completed' ? '#00ff66' : step.status === 'current' ? '#00f0ff' : '#7000ff'
                            }}>
                              {statusText}
                            </Box>
                          </Box>

                          <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, fontSize: '1.2rem', color: 'text.primary' }}>
                            {step.step}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)', lineHeight: 1.5, fontSize: '0.85rem' }}>
                            {step.desc}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Timeline;
