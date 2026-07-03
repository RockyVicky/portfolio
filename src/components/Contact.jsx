import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Stack } from '@mui/material';
import { Email, LinkedIn, Send, GitHub, AccessTime, LocationOn, WorkOutline } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      <Box className="bg-mesh-glow" sx={{
        bottom: '-10%',
        right: '15%',
        background: 'radial-gradient(circle, rgba(112,0,255,0.03) 0%, transparent 70%)',
      }} />

      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Let's Build <span className="gradient-text">Together</span>
          </Typography>
        </Box>

        <Grid container spacing={8} sx={{ justifyContent: 'center' }}>
          {/* Left Details Column */}
          <Grid item xs={12} md={5}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 800, color: 'text.primary', fontSize: '1.8rem' }}>
                Global Distribution Node
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--text-dark-secondary)', mb: 5, fontSize: '1rem', lineHeight: 1.7 }}>
                Ready to ship packaged software systems to client servers worldwide. Drop your project specifications to initiate a pipeline allocation request.
              </Typography>

              <Stack spacing={3.5}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: 50, height: 50, borderRadius: 2.5, 
                    background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.15)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2.5, color: '#00f0ff' 
                  }}>
                    <WorkOutline />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="var(--text-dark-secondary)" sx={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Availability Status</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary' }}>Open to Opportunities</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: 50, height: 50, borderRadius: 2.5, 
                    background: 'rgba(112, 0, 255, 0.05)', border: '1px solid rgba(112, 0, 255, 0.15)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2.5, color: '#7000ff' 
                  }}>
                    <AccessTime />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="var(--text-dark-secondary)" sx={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Timezone</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary' }}>IST (UTC+5:30) • India</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: 50, height: 50, borderRadius: 2.5, 
                    background: 'rgba(255, 0, 112, 0.05)', border: '1px solid rgba(255, 0, 112, 0.15)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2.5, color: '#ff0070' 
                  }}>
                    <LocationOn />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="var(--text-dark-secondary)" sx={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Location</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary' }}>Chennai, India</Typography>
                  </Box>
                </Box>
              </Stack>

              <Box sx={{ mt: 5, pt: 4, borderTop: '1px solid', borderTopColor: 'divider' }}>
                <Typography variant="body2" color="var(--text-dark-secondary)" sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Direct Links</Typography>
                <Stack direction="row" spacing={2}>
                  <Button component="a" href="mailto:raakeshofficial777@gmail.com" startIcon={<Email />} sx={{ color: 'var(--text-dark-secondary)', textTransform: 'none', fontWeight: 600, '&:hover': { color: 'text.primary' } }}>
                    Email
                  </Button>
                  <Button component="a" href="https://www.linkedin.com/in/raakesh-ramakrishnan-349280268" target="_blank" startIcon={<LinkedIn />} sx={{ color: 'var(--text-dark-secondary)', textTransform: 'none', fontWeight: 600, '&:hover': { color: 'text.primary' } }}>
                    LinkedIn
                  </Button>
                  <Button component="a" href="https://github.com/RockyVicky" target="_blank" startIcon={<GitHub />} sx={{ color: 'var(--text-dark-secondary)', textTransform: 'none', fontWeight: 600, '&:hover': { color: 'text.primary' } }}>
                    GitHub
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Form Column */}
          <Grid item xs={12} md={7}>
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                className="glass-card"
                sx={{
                  p: { xs: 4, sm: 6 },
                  borderRadius: 4.5
                }}
              >
                <form onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField 
                        fullWidth 
                        label="Your Name" 
                        variant="outlined" 
                        value={form.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            color: 'text.primary',
                            '& fieldset': { borderColor: 'divider', borderRadius: '12px' },
                            '&:hover fieldset': { borderColor: 'text.secondary' },
                            '&.Mui-focused fieldset': { borderColor: 'primary.main' }
                          },
                          '& .MuiInputLabel-root': { color: 'var(--text-dark-secondary)' },
                          '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField 
                        fullWidth 
                        label="Email Address" 
                        variant="outlined" 
                        type="email"
                        value={form.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            color: 'text.primary',
                            '& fieldset': { borderColor: 'divider', borderRadius: '12px' },
                            '&:hover fieldset': { borderColor: 'text.secondary' },
                            '&.Mui-focused fieldset': { borderColor: 'primary.main' }
                          },
                          '& .MuiInputLabel-root': { color: 'var(--text-dark-secondary)' },
                          '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField 
                        fullWidth 
                        label="Subject" 
                        variant="outlined" 
                        value={form.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            color: 'text.primary',
                            '& fieldset': { borderColor: 'divider', borderRadius: '12px' },
                            '&:hover fieldset': { borderColor: 'text.secondary' },
                            '&.Mui-focused fieldset': { borderColor: 'primary.main' }
                          },
                          '& .MuiInputLabel-root': { color: 'var(--text-dark-secondary)' },
                          '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField 
                        fullWidth 
                        label="Message" 
                        variant="outlined" 
                        multiline 
                        rows={5} 
                        value={form.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            color: 'text.primary',
                            '& fieldset': { borderColor: 'divider', borderRadius: '12px' },
                            '&:hover fieldset': { borderColor: 'text.secondary' },
                            '&.Mui-focused fieldset': { borderColor: 'primary.main' }
                          },
                          '& .MuiInputLabel-root': { color: 'var(--text-dark-secondary)' },
                          '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                      <Button 
                        type="submit"
                        variant="contained" 
                        size="large" 
                        fullWidth 
                        endIcon={<Send />} 
                        sx={{ 
                          py: 1.8, 
                          fontSize: '1rem', 
                          borderRadius: 3,
                          fontWeight: 700,
                          textTransform: 'none',
                          background: submitted 
                            ? '#00ff66'
                            : 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)',
                          boxShadow: submitted
                            ? '0 4px 20px rgba(0, 255, 102, 0.3)'
                            : '0 4px 20px rgba(112, 0, 255, 0.3)',
                          '&:hover': {
                            background: submitted 
                              ? '#00ff66'
                              : 'linear-gradient(135deg, #00f0ff 20%, #7000ff 100%)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        {submitted ? 'Message Dispatched!' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
