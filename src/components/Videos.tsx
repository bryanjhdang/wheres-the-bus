import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Videos: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      {/* Project Pitch Video */}
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={8}>
          <Box 
            component="iframe"
            src="https://www.youtube.com/embed/yigWHRhEh5c"
            title="Project Pitch"
            width="100%"
            height="315px"
            sx={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" gutterBottom>
            Project Pitch
          </Typography>
          <Typography variant="body1">
            Want to learn more?
          </Typography>
        </Grid>
      </Grid>

      {/* Show and Tell 1 Video */}
      <Grid container spacing={4} alignItems="flex-start" sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Box 
            component="iframe"
            src="https://youtube.com/embed/2Dzo_elfJW8"
            title="Show and Tell 1"
            width="100%"
            height="315px"
            sx={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" gutterBottom>
            Show and Tell 1
          </Typography>
          <Typography variant="body1">
            Covering what we have so far, and what's planned next.
          </Typography>
        </Grid>
      </Grid>

      {/* Show and Tell 2 Video */}
      <Grid container spacing={4} alignItems="flex-start" sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Box 
            component="iframe"
            src="https://youtube.com/embed/4q_iBrKo_sw"
            title="Show and Tell 1"
            width="100%"
            height="315px"
            sx={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" gutterBottom>
            Show and Tell 2
          </Typography>
          <Typography variant="body1">
            The final steps before completion.
          </Typography>
        </Grid>
      </Grid>

      {/* Final Video */}
      <Grid container spacing={4} alignItems="flex-start" sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Box 
            component="iframe"
            src="https://youtube.com/embed/QPgIX7Vv2xU"
            title="Show and Tell 1"
            width="100%"
            height="315px"
            sx={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" gutterBottom>
            Final Demo
          </Typography>
          <Typography variant="body1">
            Take a look at our app!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Videos;
