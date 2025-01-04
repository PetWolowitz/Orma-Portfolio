import { useState } from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import GalleryItem from '../components/GalleryItem';
import ImageModal from '../components/ImageModal';
import { artworks } from '../data/artworks';

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseModal = () => {
    setSelectedArtwork(null);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography 
          variant="h2" 
          gutterBottom 
          align="center"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            mb: { xs: 3, sm: 4, md: 5 }
          }}
        >
          Gallery
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {artworks.map((artwork) => (
            <Grid item xs={12} sm={6} md={4} key={artwork.id}>
              <GalleryItem artwork={artwork} onClick={handleArtworkClick} />
            </Grid>
          ))}
        </Grid>
        <ImageModal
          open={Boolean(selectedArtwork)}
          onClose={handleCloseModal}
          image={selectedArtwork || {}}
        />
      </Container>
    </Box>
  );
}