import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8 }}>
          <Typography variant="h2" sx={{ mb: 8 }}>
            About <span className="gradient-text">Me</span>
          </Typography>
          
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, color: 'text.primary', lineHeight: 1.6 }}>
                Bridging the gap between robust engineering and stunning visual experiences.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
                I am a passionate Full-Stack Engineer with over 4+ years of professional experience specializing in the JavaScript ecosystem. My core expertise lies in architecting high-performance, scalable applications utilizing React.js, React Native, and Node.js.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
                I maintain a profound focus on UI/UX, ensuring that every interface is not only deeply optimized under the hood but uniquely captivating. Whether it's managing complex digital health records or processing real-time video streams, I deliver polished end-to-end architectures.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Paper className="glass-panel" elevation={0} sx={{ p: 5, borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
                  <Box sx={{ position: 'absolute', top: '-50%', right: '-50%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, transparent 70%)', zIndex: 0 }} />
                  
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h4" sx={{ mb: 4, fontWeight: 800 }}>Quick Highlights</Typography>
                    <Grid container spacing={3}>
                      {['4+ Years Scale Exp.', 'React & React Native Mastery', 'Node.js & Microservices', 'UI/UX Interactive Physics', 'Mobile Performance Tuning', 'End-to-End Delivery'].map((highlight, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', mt: 0.8, bgcolor: 'primary.main', mr: 2, boxShadow: '0 0 10px #00f0ff' }} />
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>{highlight}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
