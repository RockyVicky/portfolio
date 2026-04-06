import { useState } from 'react';
import { 
  Box, Container, Typography, Card, CardContent, CardActions, 
  Button, Chip, Dialog, DialogTitle, DialogContent, IconButton, 
  Grid 
} from '@mui/material';
import { ArrowForward, Close, Dashboard } from '@mui/icons-material';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'iMeUsWe App',
    description: 'A comprehensive mobile family networking and astrology platform. Architected advanced community features and optimized API logic for extreme reliability.',
    detailedDescription: 'iMeUsWe is a robust digital ecosystem designed to map family trees and nurture social connections through interactive astrology mapping and heritage archiving. Key contributions included building a highly sophisticated family-tree node visualizer, integrating the Agora SDK for zero-latency live streaming spaces, and leveraging Node.js + MongoDB on the backend to achieve scalable queries for massive, interconnected family cohorts.',
    tech: ['React Native', 'MongoDB', 'Node.js', 'Agora SDK'],
    features: ['Real-time Streaming POC', 'Community Networking', 'Family Tree Integration'],
    highlight: true,
    images: [
      'https://play-lh.googleusercontent.com/xbwM2NiZGz7AR46nVWxsMLgnVcZq6YIfXn53Dxj3CxgSqu0gH9AZjQDcQyeBKKShmo8XmnqfvqrIim3qXR31w9Y=w480-h960',
      'https://play-lh.googleusercontent.com/f4iIKJzmLGD0PvGKGRG2H_Uj8E3AxZtEYM39sBpy7Mzll6veYOd5oKRbxZB9Mc55ZH1dMBVg3qRUP1UvPKCm=w480-h960',
      'https://play-lh.googleusercontent.com/P-7IIQabw039HqJHby-53sHthk-5uuqnXyvC3FB7nlp4oXBcpd0n1V7tQ68n86lomTydNCC-OXUDX8NwfrpHhNc=w480-h960',
      'https://play-lh.googleusercontent.com/GQ7gM--RFNYSI5rgPCFksL0JHIqWHBIlCQLjdkqL263x03kbIcsDgLc9JaGX2S28dhi-6_DJvkwrEauRNflAsjM=w480-h960',
      'https://testing-email-template.s3.ap-south-1.amazonaws.com/markating_images/imeusweLogoNew.png'
    ]
  },
  {
    title: 'TVS Enterprise App',
    description: 'A premier enterprise and corporate operational suite designed to modernize structural efficiency, internal asset management, and core workflows.',
    detailedDescription: 'Developed the TVS Enterprise Architecture to serve as a comprehensive dashboard for tracking operational matrices and multi-department resource logistics. The system utilized advanced React state bindings alongside a resilient Node.js Backend infrastructure, replacing outdated localized legacy software. Deep API optimizations resulted in a 40% reduction in sync latency across their distributed internal fleet.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'MUI'],
    features: ['Asset Tracking Logistics', 'Real-time Analytics', 'Legacy Workflow Migration'],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    title: 'SELECT ORTHO',
    description: 'An enterprise-grade inventory system powering organizational efficiency across varied locations, fully equipped with custom role-based portals.',
    detailedDescription: 'SELECT ORTHO was built to resolve critical inventory bottlenecks for large-scale medical suppliers. I led the development of a highly configurable, role-based access console and a dynamic supply tracking database. We implemented strict data filtering algorithms ensuring rapid location-based stock checks, heavily reducing operational stockouts.',
    tech: ['React.js', 'Node.js', 'REST APIs'],
    features: ['Inventory Management', 'Role-Based Access', 'Data Filtering'],
    images: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    title: 'MedFilo',
    description: 'Highly secure healthcare mobile and web platform managing critical patient lifecycle tools and digital vital records with total compliance.',
    detailedDescription: 'MedFilo operates at the core of critical healthcare infrastructure, interfacing directly between clinicians and secure electronic medical records (EMR). Focused strictly on end-to-end encryption requirements and PostgreSQL indexing optimizations to allow instantaneous retrieval of patient vital history on highly secure, restricted medical portal interfaces. Successfully integrated the Regula SDK into the mobile application to automate rapid scanning, data extraction, and stringent verification of patient identity documents and medical badges.',
    tech: ['React.js', 'React Native', 'Node.js', 'PostgreSQL', 'Regula SDK'],
    features: ['Patient Vital Records', 'Regula Identity Verification', 'Highly Secure Protocol', 'Mobile Optimized UI'],
    images: [
      '/images/medfilo-badge.png'
    ]
  },
  {
    title: 'TIOL Voting Platform',
    description: 'A robust, load-balanced digital voting platform tailored to handle massive concurrent traffic bursts efficiently without latency drops.',
    detailedDescription: 'Engineered a highly available, robust digital infrastructure for TIOL to securely host verified organizational voting initiatives. Built to handle immense parallel input processing utilizing an optimized Express.js service wrapper and deep PostgreSQL constraints. The product features an instantaneous live statistics dashboard analyzing ongoing ballot metrics.',
    tech: ['React.js', 'PostgreSQL', 'Express'],
    features: ['Real-Time Load Handling', 'Secure Authenticators', 'Live Dashboard'],
    images: [
      'https://tiolawards.in/wp-content/uploads/2026/02/tiolawards_bg.jpg'
    ]
  }
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}>
          Selected <span className="gradient-text">Projects</span>
        </Typography>

        <Grid container spacing={4}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{ height: '100%' }}
              >
                <Card className="glass-panel" elevation={0} sx={{ 
                  height: '100%', display: 'flex', flexDirection: 'column', 
                  position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease',
                  ...(project.highlight && { borderColor: 'primary.main', borderWidth: 2 })
                }}>
                  {project.highlight && (
                    <Box sx={{ position: 'absolute', top: 0, right: 0, bgcolor: 'primary.main', color: '#000', px: 2, py: 0.5, borderBottomLeftRadius: 16, fontWeight: 'bold', fontSize: '0.8rem' }}>
                      FEATURED
                    </Box>
                  )}
                  <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 5 } }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>{project.title}</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto', mb: 2 }}>
                      {project.tech.map((t, i) => (
                        <Chip key={i} label={t} size="small" variant="outlined" sx={{ color: 'primary.main', borderColor: 'primary.main', fontWeight: 600 }} />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ px: { xs: 3, md: 5 }, pb: { xs: 3, md: 4 }, pt: 0 }}>
                    <Button fullWidth size="large" variant="contained" color="secondary" onClick={() => handleOpen(project)} endIcon={<Dashboard />} sx={{ justifyContent: 'center', minHeight: 48, py: 1.5, background: 'linear-gradient(45deg, #161b2c 30%, #202b4d 90%)' }}>
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Project Details Modal */}
        <Dialog 
          open={open} 
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: 'background.default',
              backgroundImage: 'none',
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)'
            }
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4, pb: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: 800 }}>{selectedProject.title}</Typography>
                <IconButton onClick={handleClose} sx={{ color: 'text.secondary', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <Close />
                </IconButton>
              </DialogTitle>
              <DialogContent sx={{ p: 4, pt: 0 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                  {selectedProject.tech.map((t, i) => (
                    <Chip key={i} label={t} sx={{ bgcolor: 'rgba(112, 0, 255, 0.1)', color: 'text.primary', border: '1px solid rgba(112, 0, 255, 0.3)', fontWeight: 600 }} />
                  ))}
                </Box>
                
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>Project Overview</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem', mb: 5 }}>
                  {selectedProject.detailedDescription}
                </Typography>

                <Typography variant="h6" sx={{ mb: 3, color: 'primary.main', fontWeight: 700 }}>Application Architecture</Typography>
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {selectedProject.images.map((img, i) => (
                    <Grid item xs={12} sm={selectedProject.images.length > 1 ? 6 : 12} key={i}>
                      <Box 
                        component="img" 
                        src={img} 
                        alt={`${selectedProject.title} screenshot`}
                        sx={{ 
                          width: '100%', 
                          height: 'auto', 
                          maxHeight: '60vh',
                          objectFit: 'contain',
                          borderRadius: 3, 
                          border: '1px solid', 
                          borderColor: 'divider',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }} 
                      />
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>Key Infrastructure</Typography>
                <Box component="ul" sx={{ pl: 2, color: 'text.secondary' }}>
                  {selectedProject.features.map((feat, i) => (
                    <Typography component="li" variant="body1" key={i} sx={{ mb: 1, fontSize: '1.05rem' }}>{feat}</Typography>
                  ))}
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>

      </Container>
    </Box>
  );
};

export default Projects;
