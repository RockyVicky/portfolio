import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { FormatQuote } from '@mui/icons-material';

const testimonials = [
  {
    quote: "Raakesh has an exceptional product-first mindset. He doesn't just implement specifications; he actively suggests system architectures that optimize user retention and API query overhead. His mobile scaling work on our live-streaming components was top-tier.",
    author: "Product Director",
    company: "Eligarf Technologies",
    role: "Engineering Manager",
    initials: "PD"
  },
  {
    quote: "A rare breed of full-stack engineer who values UX details as much as clean database schemas. He rebuilt our entire inventory dashboard, reducing sync latencies by 40% and delivering a highly modern experience that our clients loved.",
    author: "VP of Engineering",
    company: "Kenla Systems Portfolio",
    role: "Technical Lead",
    initials: "VE"
  },
  {
    quote: "Outstanding capability in React Native and Node.js. He quickly integrated critical patient identity scanning algorithms with zero downtime, maintaining absolute HIPAA-grade compliance under tight milestones.",
    author: "Healthcare Tech Lead",
    company: "MedFilo Platform Integration",
    role: "Systems Architect",
    initials: "HT"
  }
];

const Testimonials = () => {
  return (
    <Box id="testimonials" sx={{ py: { xs: 8, md: 15 }, position: 'relative', overflow: 'hidden' }}>
      <Box className="bg-mesh-glow" sx={{
        bottom: '0%',
        left: '10%',
        background: 'radial-gradient(circle, rgba(0,240,255,0.03) 0%, transparent 70%)',
      }} />

      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1 }}>
            Endorsements
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Client & Peer <span className="gradient-text">Feedback</span>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    position: 'relative'
                  }}
                >
                  <FormatQuote sx={{ fontSize: 48, color: 'rgba(112, 0, 255, 0.2)', position: 'absolute', top: 16, right: 16 }} />

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'var(--text-dark-secondary)', 
                      mb: 4, 
                      lineHeight: 1.7, 
                      fontStyle: 'italic',
                      fontSize: '0.95rem',
                      flexGrow: 1 
                    }}
                  >
                    "{item.quote}"
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                    <Avatar sx={{ 
                      mr: 2, 
                      bgcolor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                      color: (theme) => index % 2 === 0 ? (theme.palette.mode === 'dark' ? '#030014' : '#ffffff') : '#ffffff',
                      fontWeight: 800,
                      boxShadow: (theme) => theme.palette.mode === 'dark' 
                        ? (index % 2 === 0 ? '0 0 10px rgba(0, 240, 255, 0.3)' : '0 0 10px rgba(112, 0, 255, 0.3)') 
                        : 'none'
                    }}>
                      {item.initials}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'var(--text-dark-primary)', fontSize: '0.95rem' }}>
                        {item.author}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)', fontSize: '0.8rem' }}>
                        {item.role} • {item.company}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
