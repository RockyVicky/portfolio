import { Box, Container, Typography, TextField, Button, Grid, Paper, Stack } from '@mui/material';
import { Email, Phone, LinkedIn, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}>
          Get In <span className="gradient-text">Touch</span>
        </Typography>

        <Grid container spacing={8} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h3" sx={{ mb: 3 }}>Let's build together.</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.1rem', lineHeight: 1.7 }}>
                I'm actively seeking new opportunities and open to collaborating on ambitious projects. Drop a message, and let's craft something extraordinary.
              </Typography>

              <Stack spacing={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3, color: 'primary.main' }}>
                    <Email />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>Email</Typography>
                    <Typography variant="h6" sx={{ fontWeight: '600' }}>raakeshofficial777@gmail.com</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(112, 0, 255, 0.1)', border: '1px solid rgba(112, 0, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3, color: 'secondary.main' }}>
                    <Phone />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>Phone</Typography>
                    <Typography variant="h6" sx={{ fontWeight: '600' }}>6382289712</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box component="a" href="https://linkedin.com" target="_blank" sx={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3, color: 'primary.main', textDecoration: 'none', transition: 'all 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
                    <LinkedIn />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>LinkedIn</Typography>
                    <Typography variant="h6" sx={{ fontWeight: '600' }}>linkedin.com/in/raakesh</Typography>
                  </Box>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Paper className="glass-panel" elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4 }}>
                <form noValidate autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="First Name" variant="filled" sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 }} InputProps={{ disableUnderline: true }}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Last Name" variant="filled" sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 }} InputProps={{ disableUnderline: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Email Address" variant="filled" type="email" sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 }} InputProps={{ disableUnderline: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Subject" variant="filled" sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 }} InputProps={{ disableUnderline: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Message" variant="filled" multiline rows={5} sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 }} InputProps={{ disableUnderline: true }}/>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                      <Button variant="contained" color="primary" size="large" fullWidth endIcon={<Send />} sx={{ py: 2, fontSize: '1.2rem', borderRadius: 2 }}>
                        Launch Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
