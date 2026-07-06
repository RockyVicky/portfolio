import { Box, Container, Typography, Grid, LinearProgress, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Storage, PhoneIphone, CloudQueue, AutoAwesome, Construction } from '@mui/icons-material';

const skillsGroups = [
  {
    category: 'Frontend Architecture',
    icon: <Code sx={{ color: 'var(--neon-cyan)', fontSize: 32 }} />,
    items: [
      { name: 'React & Next.js', confidence: 95, exp: '4+ Yrs', projects: 'Content Factory, TVS, MedFilo' },
      { name: 'TypeScript / JS', confidence: 90, exp: '4+ Yrs', projects: 'All Projects' },
      { name: 'MUI & Tailwind CSS', confidence: 95, exp: '4+ Yrs', projects: 'Content Factory, TVS' }
    ]
  },
  {
    category: 'Backend & APIs',
    icon: <Storage sx={{ color: 'var(--neon-purple)', fontSize: 32 }} />,
    items: [
      { name: 'Node.js & Express', confidence: 90, exp: '4 Yrs', projects: 'iMeUsWe, SIM SMS, TVS' },
      { name: 'PostgreSQL & MongoDB', confidence: 85, exp: '4 Yrs', projects: 'MedFilo, iMeUsWe, TVS' },
      { name: 'REST & Socket.io APIs', confidence: 90, exp: '4 Yrs', projects: 'iMeUsWe, MedFilo' }
    ]
  },
  {
    category: 'Mobile Engineering',
    icon: <PhoneIphone sx={{ color: 'var(--neon-pink)', fontSize: 32 }} />,
    items: [
      { name: 'React Native', confidence: 90, exp: '4 Yrs', projects: 'iMeUsWe, MedFilo' },
      { name: 'React Native Paper', confidence: 85, exp: '4 Yrs', projects: 'iMeUsWe' },
      { name: 'Agora / Regula SDKs', confidence: 80, exp: '1 Yr', projects: 'iMeUsWe, MedFilo' }
    ]
  },
  {
    category: 'AI & Automation',
    icon: <AutoAwesome sx={{ color: 'var(--neon-green)', fontSize: 32 }} />,
    items: [
      { name: 'LLM Apps & RAG', confidence: 85, exp: '1 Yr', projects: 'Content Factory' },
      { name: 'Agentic AI & MCP', confidence: 80, exp: 'Learning', projects: 'Internal Tools' },
      { name: 'Prompt Engineering', confidence: 90, exp: '1.5 Yrs', projects: 'Content Factory' }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    icon: <CloudQueue sx={{ color: 'var(--neon-yellow)', fontSize: 32 }} />,
    items: [
      { name: 'AWS Cloud', confidence: 75, exp: 'Learning', projects: 'SMS Deployment' },
      { name: 'GitHub Actions (CI/CD)', confidence: 80, exp: '4 Yrs', projects: 'Production Platforms' },
      { name: 'Docker Containers', confidence: 70, exp: '4 Yrs', projects: 'Microservices' }
    ]
  },
  {
    category: 'Developer Tooling',
    icon: <Construction sx={{ color: 'var(--neon-red)', fontSize: 32 }} />,
    items: [
      { name: 'Git & GitHub', confidence: 95, exp: '4+ Yrs', projects: 'All Workflows' },
      { name: 'Postman & API Testing', confidence: 90, exp: '4 Yrs', projects: 'All Projects' },
      { name: 'Figma to Code', confidence: 85, exp: '4 Yrs', projects: 'TVS, iMeUsWe' }
    ]
  }
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      <Box className="bg-mesh-glow" sx={{
        bottom: '10%',
        right: '-10%',
        background: 'radial-gradient(circle, rgba(0,240,255,0.03) 0%, transparent 70%)',
      }} />

      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1 }}>
            Technical Stack
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Languages, Libraries & <span className="gradient-text">Skills</span>
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2.5, md: 4 }}>
          {skillsGroups.map((group, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                style={{ height: '100%' }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    p: { xs: 2.5, md: 4 },
                    height: '100%',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                        border: '1px solid var(--border-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {group.icon}
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.05rem', md: '1.15rem' }, color: 'text.primary' }}>
                        {group.category}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'var(--neon-green)', boxShadow: '0 0 8px var(--neon-green)' }} />
                      <Typography variant="caption" sx={{ color: 'var(--text-dark-secondary)', fontSize: '0.6rem', fontWeight: 800 }}>DEP-0{index + 1}</Typography>
                    </Box>
                  </Box>

                  <Stack spacing={3} sx={{ flexGrow: 1 }}>
                    {group.items.map((skill, i) => (
                      <Box key={i}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 700, color: 'var(--text-dark-primary)', fontSize: { xs: '0.88rem', md: '0.95rem' } }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main', fontSize: { xs: '0.8rem', md: '0.85rem' } }}>
                            {skill.confidence}%
                          </Typography>
                        </Box>
                        
                        {/* Custom glowing progress bar */}
                        <LinearProgress 
                          variant="determinate" 
                          value={skill.confidence} 
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.05)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              background: 'linear-gradient(90deg, #00f0ff 0%, #7000ff 100%)'
                            }
                          }}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                          <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)', fontSize: '0.72rem' }}>
                            Exp: {skill.exp}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)', fontSize: '0.72rem', textAlign: 'right', maxWidth: '65%', lineHeight: 1.25 }}>
                            Used in: {skill.projects}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
