import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const experienceData = [
  {
    company: 'Eligarf Technologies',
    duration: 'Feb 2025 – Present',
    role: 'Full-Stack Engineer',
    highlights: [
      'Architected comprehensive community features & APIs for iMeUsWe mobile platform (Family networking & astrology).',
      'Leveraged MongoDB and React Native Paper to deliver a robust and fluid native experience.',
      'Designed and executed an Agora live streaming POC to drastically increase real-time user engagement.',
      'Turbocharged delivery cycles by integrating AI-assisted tooling like Cursor IDE and Antigravity IDE.'
    ]
  },
  {
    company: 'Kenla Systems',
    duration: 'Jan 2022 – Feb 2025',
    role: 'Full-Stack Engineer',
    highlights: [
      'Engineered React.js + Node.js full-stack enterprise applications across MedTech and B2B sectors.',
      'Drove complex cross-platform API integrations, optimizing data flow between microservices.',
      'Achieved significant mobile app performance bumps through careful profiling and render tuning.',
      'Established granular role-based authentication layers used universally across client portals.'
    ],
    projects: ['TVS Enterprise', 'MedFilo', 'Digital Vital Records', 'SELECT ORTHO', 'TIOL Voting', 'Saguaro Bloom']
  }
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 10, textAlign: 'center' }}>
          Professional <span className="gradient-alt-text" style={{ background: 'linear-gradient(90deg, #a18cd1, #fbc2eb)', WebkitBackgroundClip: 'text', textFillColor: 'transparent' }}>Journey</span>
        </Typography>

        <Box sx={{ position: 'relative', ml: { xs: 2, md: 4 } }}>
          {/* Vertical Glowing Line */}
          <Box sx={{ 
            position: 'absolute', 
            left: 0, 
            top: 10, 
            bottom: 0, 
            width: 3, 
            background: 'linear-gradient(180deg, #00f0ff 0%, #7000ff 100%)',
            borderRadius: 2,
            boxShadow: '0 0 10px rgba(112, 0, 255, 0.4)'
          }} />

          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box sx={{ 
                position: 'relative', 
                pl: { xs: 3, sm: 6 }, 
                mb: { xs: 6, md: 8 }
              }}>
                
                {/* Glowing Node Dot */}
                <Box sx={{ 
                  position: 'absolute', 
                  left: -8, 
                  top: 32, 
                  width: 19, 
                  height: 19, 
                  bgcolor: '#07090f', 
                  border: '3px solid #00f0ff',
                  borderRadius: '50%',
                  boxShadow: '0 0 12px #00f0ff',
                  zIndex: 2
                }} />

                <Paper className="glass-panel" elevation={0} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 4, position: 'relative' }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, fontSize: { xs: '1.4rem', md: '2.125rem' } }}>{exp.company}</Typography>
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 3, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                    {exp.role} • {exp.duration}
                  </Typography>
                  
                  <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                    {exp.highlights.map((item, i) => (
                      <Typography component="li" variant="body1" key={i} sx={{ mb: 1.5, color: 'text.secondary', lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1.05rem' } }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>

                  {exp.projects && (
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: 'text.primary', textTransform: 'uppercase' }}>Involved Projects</Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {exp.projects.map((proj, i) => (
                          <Box key={i} sx={{ px: 2, py: 0.8, bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, fontSize: '0.8rem', fontWeight: 600 }}>
                            {proj}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
