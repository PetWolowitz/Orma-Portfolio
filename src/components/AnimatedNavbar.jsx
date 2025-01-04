import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Container,
  useScrollTrigger,
  Slide,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion } from 'framer-motion';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Benti Grid', path: '/benti-grid' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'Biography', path: '/biography' },
  { title: 'Contact', path: '/contact' },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function AnimatedNavbar({ darkMode, toggleDarkMode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  
  const handleNavigate = (path) => {
    navigate(path);
    handleCloseMenu();
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{
          bgcolor: isScrolled ? 'background.paper' : 'transparent',
          boxShadow: isScrolled ? 1 : 0,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mr: 4,
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: isScrolled ? 'text.primary' : 'white',
                }}
                onClick={() => navigate('/')}
              >
                ARTIST NAME
              </Typography>
            </motion.div>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={handleOpenMenu}
                sx={{ color: isScrolled ? 'text.primary' : 'white' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page.path} 
                    onClick={() => handleNavigate(page.path)}
                    selected={location.pathname === page.path}
                  >
                    {page.title}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.path}
                  onClick={() => handleNavigate(page.path)}
                  sx={{
                    mx: 1,
                    color: isScrolled ? 'text.primary' : 'white',
                    borderBottom: location.pathname === page.path ? '2px solid' : 'none',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      borderBottom: '2px solid',
                    },
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            <IconButton 
              onClick={toggleDarkMode}
              sx={{ color: isScrolled ? 'text.primary' : 'white' }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}