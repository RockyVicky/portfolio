import { useState } from 'react';
import { 
  Box, Container, Typography, Button, Chip, Dialog, DialogTitle, DialogContent, 
  IconButton, Grid, Tabs, Tab, Stack 
} from '@mui/material';
import { ArrowForward, Close, GitHub, Launch, Code, Speed, StarBorder, AutoAwesome, Message, Layers, AssignmentTurnedIn } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 'sms-gateway',
    title: 'SMS Gateway Platform',
    category: 'flagship',
    badge: 'Flagship System',
    metric: 'Hardware SMS Gateway',
    description: 'A scalable bulk messaging platform enabling business applications to dispatch SMS alerts utilizing local cellular SIM hardware, eliminating third-party API costs.',
    problem: 'Standard bulk messaging gateways (e.g. Twilio) levy high per-message fees, making high-throughput alert queues financially prohibitive for local businesses.',
    solution: 'Engineered an IoT server bridging local physical Android/SIM arrays to Web API queues, running concurrent retries, signal monitoring, and status webhooks.',
    architecture: 'React Admin ➔ Node.js API ➔ PostgreSQL ➔ Redis Queue Worker ➔ SIM Device Connection.',
    challenges: 'Handling cellular disconnects, auto-routing messages across active SIM cards, and securing API keys.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis Queue', 'Socket.io', 'Docker'],
    features: ['High-throughput bulk queuing', 'Active SIM signal diagnostic dashboard', 'Webhook delivery status callbacks', 'API keys authorization portal'],
    roadmap: ['Multi-region SIM cluster failover', 'Cloud-emulated SIM transceiver tests', 'End-to-end cellular diagnostics monitoring'],
    github: 'https://github.com/RockyVicky/sms-gateway-platform',
    demo: 'https://github.com/RockyVicky/sms-gateway-platform',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'rocky-ide',
    title: 'Rocky IDE Bridge',
    category: 'flagship',
    badge: 'AI Developer Tool',
    metric: 'WebSocket CDP Bridge',
    description: 'An interactive developer utility linking mobile devices directly to local IDE workspaces (VS Code / Antigravity) using Chrome DevTools Protocol (CDP).',
    problem: 'Toggling between physical mobile devices and code workspaces during mobile debugging creates workflow friction and delays hot-reload insights.',
    solution: 'Designed a WebSocket-based bridging layer that lets mobile devices trigger IDE workspace macros and voice-transcribe commands via Gemini.',
    architecture: 'Mobile Client App ➔ Node.js WebSocket Hub ➔ Chrome DevTools API ➔ IDE Workspace.',
    challenges: 'Stabilizing connection streams across devices, capturing local CDP variables, and structuring fast speech-to-text feedback loops.',
    tech: ['WebSockets', 'CDP', 'Gemini API', 'Node.js', 'React Native'],
    features: ['Gemini voice speech-to-code compiler', 'Mobile command triggers console', 'Real-time terminal execution log mirrors', 'Remote workspace macro executions'],
    roadmap: ['Pre-packaged VS Code extension release', 'Multi-IDE workspace synchronizations', 'Advanced LLM voice assistant commands'],
    github: 'https://github.com/RockyVicky/rocky-ide-bridge',
    demo: 'https://github.com/RockyVicky/rocky-ide-bridge',
    images: [
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'wallet-system',
    title: 'Wallet System',
    category: 'flagship',
    badge: 'FinTech Ledger',
    metric: 'Strict Concurrency Lock',
    description: 'A secure, high-integrity financial ledger system designed to handle concurrent wallet deposits, withdrawals, and balance transfers with absolute data safety.',
    problem: 'High-frequency transaction systems suffer from race conditions, potentially leading to double-spending or balance inconsistencies.',
    solution: 'Created a transaction isolation database service implementing strict SQL row-level locks and write-ahead ledgers to block parallel double balance deductions.',
    architecture: 'Express API ➔ Postgres Transaction Lock ➔ Wallet Balance Database ➔ Redis Cache.',
    challenges: 'Preventing transaction deadlocks under heavy parallel load while maintaining sub-150ms response latencies.',
    tech: ['Node.js', 'PostgreSQL', 'Express', 'Redis Cache', 'Docker'],
    features: ['Atomic balance transfers service', 'Double-entry audit logs ledgers', 'SQL row-level lock isolation', 'Secure API rate limiting guards'],
    roadmap: ['Distributed database transaction protocols', 'Real-time ledger audit dashboards', 'Automated reconciliation script workers'],
    github: 'https://github.com/RockyVicky/wallet-system',
    demo: 'https://github.com/RockyVicky/wallet-system',
    images: [
      'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'imeuswe',
    title: 'iMeUsWe Platform',
    category: 'mobile',
    badge: 'Production Mobile App',
    metric: 'Agora Live Video POC',
    description: 'A native mobile family networking and heritage mapping app with live astrology rooms, scaling social connectivity.',
    problem: 'Standard family networking platforms lack real-time digital spaces and require high performance when mapping thousands of nodes on rendering threads.',
    solution: 'Optimized React Native rendering and integrated the Agora SDK for latency-free video broadcasts. Built custom canvas layout libraries for fast genealogical trees.',
    architecture: 'React Native (iOS/Android) ➔ MongoDB ➔ Express API Cluster ➔ Agora RTC Engine.',
    challenges: 'Eliminating frame drops during heavy tree node manipulation and handling media connection handoffs during cellular transitions.',
    tech: ['React Native', 'MongoDB', 'Node.js', 'Agora SDK', 'MUI Paper'],
    features: ['Interactive tree node mapping', ' Agora video spaces integration', 'Real-time notification feeds'],
    github: 'https://github.com/RockyVicky',
    demo: 'https://github.com/RockyVicky',
    images: [
      'https://play-lh.googleusercontent.com/xbwM2NiZGz7AR46nVWxsMLgnVcZq6YIfXn53Dxj3CxgSqu0gH9AZjQDcQyeBKKShmo8XmnqfvqrIim3qXR31w9Y=w480-h960',
      'https://play-lh.googleusercontent.com/f4iIKJzmLGD0PvGKGRG2H_Uj8E3AxZtEYM39sBpy7Mzll6veYOd5oKRbxZB9Mc55ZH1dMBVg3qRUP1UvPKCm=w480-h960',
      'https://play-lh.googleusercontent.com/P-7IIQabw039HqJHby-53sHthk-5uuqnXyvC3FB7nlp4oXBcpd0n1V7tQ68n86lomTydNCC-OXUDX8NwfrpHhNc=w480-h960'
    ]
  },
  {
    id: 'tvs-dashboard',
    title: 'TVS Enterprise App',
    category: 'web',
    badge: 'Production Dashboard',
    metric: '40% Latency Reduction',
    description: 'A premier operational suite that modernizes structural efficiency, asset management, and department workflows.',
    problem: 'Fragmented department systems resulted in high sync latency, blocking dispatch teams from coordinating asset metrics in real time.',
    solution: 'Architected a consolidated, reactive React dashboard backed by optimized Postgres indexes and caching layers.',
    architecture: 'React.js SPA ➔ Node.js API ➔ PostgreSQL Database ➔ Redis Cache.',
    challenges: 'Migrating historical CSV/SQL structures without system downtime and implementing secure role-based portals.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Material UI'],
    features: ['Real-time assets trackers', 'Department logistics charts', 'Role-based access controls'],
    github: 'https://github.com/RockyVicky',
    demo: 'https://github.com/RockyVicky',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'medfilo',
    title: 'MedFilo EMR Suite',
    category: 'web',
    badge: 'Healthcare Web/Mobile',
    metric: 'HIPAA Compliant Security',
    description: 'Highly secure healthcare suite managing patient lifecycle documents and vital records with identity scanning tools.',
    problem: 'Clinicians spent valuable minutes verifying patient identities manually, creating lines and security concerns.',
    solution: 'Integrated the Regula Identity Verification SDK inside the mobile app to automate verification and encrypted patient vital storage.',
    architecture: 'React & React Native ➔ Node.js API ➔ PostgreSQL (AES-256 Encrypted).',
    challenges: 'Meeting strict HIPAA compliance standards for records and optimizing mobile document scanning triggers.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Regula SDK'],
    features: ['Regula document scanner integration', 'End-to-end payload encryption', 'Patient vitals records ledger'],
    github: 'https://github.com/RockyVicky',
    demo: 'https://github.com/RockyVicky',
    images: [
      '/images/medfilo-badge.png'
    ]
  },
  {
    id: 'tiol-voting',
    title: 'TIOL Voting Platform',
    category: 'web',
    badge: 'Production Web App',
    metric: 'Load-Balanced Ballot Core',
    description: 'A robust, high-availability digital voting platform built to manage massive parallel traffic bursts during organizational voting.',
    problem: 'Previous election portals crashed under high traffic concurrency during the first 10 minutes of ballot openings.',
    solution: 'Designed a highly optimized Express.js ballot wrapper with Postgres transactional constraint isolation to prevent double voting.',
    architecture: 'React.js ➔ Node.js API ➔ PostgreSQL (Transaction Isolated).',
    challenges: 'Balancing read/write ratios and validating identity signatures with zero latency.',
    tech: ['React.js', 'Express', 'PostgreSQL'],
    features: ['Real-time stats scoreboard', 'Unique ballot tokens validators', 'High availability load-balancing config'],
    github: 'https://github.com/RockyVicky',
    demo: 'https://github.com/RockyVicky',
    images: [
      'https://tiolawards.in/wp-content/uploads/2026/02/tiolawards_bg.jpg'
    ]
  }
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredProjects = projectsData.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
      <Box className="bg-mesh-glow" sx={{
        top: '40%',
        left: '-15%',
        background: 'radial-gradient(circle, rgba(112,0,255,0.04) 0%, transparent 70%)',
      }} />

      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1 }}>
            Works
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 6 }}>
            Flagship & Production <span className="gradient-text">Projects</span>
          </Typography>

          {/* Filter tabs */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Tabs 
              value={filter} 
              onChange={(e, val) => setFilter(val)} 
              textColor="primary" 
              indicatorColor="primary"
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 3,
                p: 0.5,
                border: '1px solid',
                borderColor: 'divider',
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
                  px: { xs: 1.5, sm: 3 },
                  zIndex: 1,
                  textTransform: 'none',
                  fontSize: { xs: '0.85rem', sm: '0.95rem' }
                }
              }}
            >
              <Tab label="All Projects" value="all" />
              <Tab label="Flagship SaaS" value="flagship" />
              <Tab label="Production Web" value="web" />
              <Tab label="Production Mobile" value="mobile" />
            </Tabs>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id} component={motion.div} layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    background: 'var(--bg-dark-card)',
                    border: '1px solid var(--border-dark)',
                    position: 'relative',
                    overflow: 'hidden',
                    p: { xs: 3, sm: 5 },
                    // Robot scanning laser bar sweep effect on hover
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '-10px',
                      left: 0,
                      width: '100%',
                      height: '3px',
                      background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
                      boxShadow: '0 0 12px #00f0ff',
                      opacity: 0,
                      pointerEvents: 'none'
                    },
                    '&:hover': {
                      background: (theme) => theme.palette.mode === 'dark' ? 'rgba(15, 10, 36, 0.65)' : 'rgba(255, 255, 255, 0.95)',
                      borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 240, 255, 0.3)' : 'rgba(112, 0, 255, 0.2)',
                      boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 10px 30px rgba(112, 0, 255, 0.1)' : '0 10px 30px rgba(0, 240, 255, 0.05)'
                    },
                    '&:hover::after': {
                      animation: 'scanBar 1.2s linear infinite',
                      opacity: 1
                    }
                  }}
                >
                  {/* Decorative background glow based on category */}
                  <Box sx={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-30%',
                    width: '60%',
                    height: '60%',
                    background: project.category === 'flagship' 
                      ? 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(112, 0, 255, 0.08) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }} />

                  <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Top Meta */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 1 }}>
                      <Chip 
                        label={project.badge} 
                        size="small" 
                        sx={{ 
                          bgcolor: project.category === 'flagship' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(112, 0, 255, 0.1)',
                          border: `1px solid ${project.category === 'flagship' ? 'rgba(0, 240, 255, 0.3)' : 'rgba(112, 0, 255, 0.3)'}`,
                          color: project.category === 'flagship' ? '#00b8cc' : '#7000ff',
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          letterSpacing: '0.02em'
                        }} 
                      />
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        {project.category === 'flagship' ? <AutoAwesome sx={{ fontSize: 14 }} /> : <Speed sx={{ fontSize: 14 }} />}
                        {project.metric}
                      </Typography>
                    </Box>

                    {/* Headline */}
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'var(--text-dark-primary)', fontSize: '1.75rem' }}>
                      {project.title}
                    </Typography>

                    {/* Paragraph */}
                    <Typography variant="body1" sx={{ color: 'var(--text-dark-secondary)', mb: 4, lineHeight: 1.6, fontSize: '0.95rem', flexGrow: 1 }}>
                      {project.description}
                    </Typography>

                    {/* Tech Badges */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      {project.tech.map((t, i) => (
                        <Chip 
                          key={i} 
                          label={t} 
                          size="small" 
                          sx={{ 
                            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0, 0, 0, 0.03)', 
                            border: '1px solid',
                            borderColor: 'divider',
                            color: 'var(--text-dark-secondary)', 
                            fontWeight: 600,
                            fontSize: '0.75rem'
                          }} 
                        />
                      ))}
                    </Box>

                    {/* Footer Actions */}
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Button 
                        variant="contained" 
                        size="medium"
                        onClick={() => handleOpen(project)}
                        sx={{ 
                          fontWeight: 700,
                          px: 3, 
                          py: 1, 
                          borderRadius: 2,
                          textTransform: 'none',
                          background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #1f1a3a 0%, #302660 100%)' : 'linear-gradient(135deg, #e3e0f7 0%, #d5d0f5 100%)',
                          border: '1px solid',
                          borderColor: 'divider',
                          color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'secondary.dark',
                          '&:hover': {
                            background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #27214a 0%, #3c3078 100%)' : 'linear-gradient(135deg, #dcd7f2 0%, #c9c0eb 100%)',
                          }
                        }}
                      >
                        View Details
                      </Button>
                      
                      <IconButton 
                        component="a" 
                        href={project.github} 
                        target="_blank" 
                        sx={{ color: 'var(--text-dark-secondary)', '&:hover': { color: 'text.primary' } }}
                      >
                        <GitHub />
                      </IconButton>
                      
                      <IconButton 
                        component="a" 
                        href={project.demo} 
                        target="_blank" 
                        sx={{ color: 'var(--text-dark-secondary)', '&:hover': { color: 'primary.main' } }}
                      >
                        <Launch />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        {/* Dynamic Project Details Case Study Modal */}
        <Dialog 
          open={open} 
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: (theme) => theme.palette.mode === 'dark' ? '#0a071a' : '#ffffff',
              backgroundImage: 'none',
              borderRadius: 5,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 25px 80px rgba(0,0,0,0.9)' : '0 20px 60px rgba(0,0,0,0.1)',
              p: { xs: 2, sm: 4 }
            }
          }}
        >
          {selectedProject && (
            <>
              {/* Header */}
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3, pb: 1 }}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'text.primary', mb: 0.5, fontSize: { xs: '1.8rem', sm: '2.4rem' } }}>
                    {selectedProject.title}
                  </Typography>
                  <Chip 
                    label={selectedProject.badge} 
                    size="small" 
                    sx={{ 
                      bgcolor: 'rgba(0, 240, 255, 0.1)', 
                      border: '1px solid rgba(0, 240, 255, 0.3)', 
                      color: '#00b8cc',
                      fontWeight: 700
                    }} 
                  />
                </Box>
                <IconButton onClick={handleClose} sx={{ color: 'var(--text-dark-secondary)', bgcolor: 'action.hover', '&:hover': { bgcolor: 'action.selected' } }}>
                  <Close />
                </IconButton>
              </DialogTitle>

              {/* Body Content */}
              <DialogContent sx={{ p: 3, mt: 2 }}>
                <Stack spacing={4}>
                  {/* Problem & Solution Grid */}
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(255, 0, 112, 0.03)', border: '1px solid rgba(255, 0, 112, 0.1)' }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#ff0070', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <StarBorder sx={{ fontSize: 20 }} /> The Problem
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
                          {selectedProject.problem}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(0, 255, 102, 0.03)', border: '1px solid rgba(0, 255, 102, 0.1)' }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#00ff66', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <AssignmentTurnedIn sx={{ fontSize: 20 }} /> The Solution
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
                          {selectedProject.solution}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Architecture Block */}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Layers sx={{ fontSize: 20 }} /> Architecture Schema
                    </Typography>
                    <Box sx={{ 
                      p: 2.5, 
                      borderRadius: 3, 
                      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#04020d' : 'rgba(0, 0, 0, 0.03)', 
                      border: '1px solid var(--border-dark)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: (theme) => theme.palette.mode === 'dark' ? '#00f0ff' : 'primary.dark',
                      overflowX: 'auto',
                      whiteSpace: 'nowrap'
                    }}>
                      {selectedProject.architecture}
                    </Box>
                  </Box>

                  {/* Engineering Challenges */}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Code sx={{ fontSize: 20 }} /> Engineering Challenge
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
                      {selectedProject.challenges}
                    </Typography>
                  </Box>

                  {/* Screenshots / Architecture Images */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Layers sx={{ fontSize: 20 }} /> Application Architecture & Interfaces
                      </Typography>
                      <Grid container spacing={2}>
                        {selectedProject.images.map((img, i) => (
                          <Grid item xs={12} sm={selectedProject.images.length > 1 ? 6 : 12} key={i}>
                            <Box 
                              component="img" 
                              src={img} 
                              alt={`${selectedProject.title} Interface`}
                              sx={{ 
                                width: '100%', 
                                height: 'auto', 
                                maxHeight: 400,
                                objectFit: 'contain',
                                borderRadius: 3, 
                                border: '1px solid', 
                                borderColor: 'divider',
                                boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.08)',
                                bgcolor: 'background.paper',
                                p: 1
                              }} 
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}

                  {/* Key Features List */}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', mb: 1.5 }}>
                      Core Specifications
                    </Typography>
                    <Grid container spacing={2}>
                      {selectedProject.features?.map((feat, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', mt: 0.8 }} />
                            <Typography variant="body2" sx={{ color: 'var(--text-dark-secondary)' }}>
                              {feat}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* Future Roadmap */}
                  {selectedProject.roadmap && selectedProject.roadmap.length > 0 && (
                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(112, 0, 255, 0.03)', border: '1px solid rgba(112, 0, 255, 0.1)' }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#7000ff', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Message sx={{ fontSize: 20 }} /> Future Roadmap
                      </Typography>
                      <Stack spacing={1}>
                        {selectedProject.roadmap.map((item, i) => (
                          <Typography key={i} variant="body2" sx={{ color: 'var(--text-dark-secondary)', display: 'flex', gap: 1 }}>
                            <span>➔</span> {item}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                  )}
                </Stack>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
