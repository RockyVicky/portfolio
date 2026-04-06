import { Box, Container, Typography, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend Excellence',
    items: ['React.js', 'React Native', 'JavaScript / ES6+', 'HTML5', 'CSS3', 'SASS', 'Material UI'],
    color: '#00f0ff'
  },
  {
    category: 'Backend Architecture',
    items: ['Node.js', 'Fastify', 'Express', 'REST APIs', 'Nodemailer'],
    color: '#7000ff'
  },
  {
    category: 'Data & Infrastructure',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS (Basic)'],
    color: '#ff0070'
  },
  {
    category: 'Developer Tooling',
    items: ['Git & GitHub', 'Postman', 'Cursor IDE', 'Antigravity IDE', 'Webpack/Vite'],
    color: '#00cc66'
  },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}>
            Technical <span className="gradient-text">Arsenal</span>
          </Typography>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper className="glass-panel" elevation={0} sx={{ p: { xs: 3, md: 5 }, height: '100%', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', bgcolor: skillGroup.color }} />

                <Typography variant="h4" sx={{ mb: 4 }}>
                  {skillGroup.category}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {skillGroup.items.map((item, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.05, y: -2 }}>
                      <Chip 
                        label={item} 
                        sx={{ 
                          borderRadius: '8px', 
                          fontWeight: 500, 
                          fontSize: { xs: '0.75rem', sm: '0.85rem' },
                          height: { xs: 28, sm: 32 },
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'text.primary',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            borderColor: skillGroup.color,
                            backgroundColor: 'rgba(255,255,255,0.1)'
                          }
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
