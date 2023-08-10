import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const PersonalCTA = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{ textAlign: "center", textTransform: "uppercase" }}>
            Feel Free To Contact Me
          </Typography>
          <Typography
            variant="body1"
            component="h4"
            gutterBottom
            sx={{ textAlign: "center", textTransform: "uppercase" }}>
            I am always open for new challenges and opportunities.
          </Typography>
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            id="message"
            label="Message"
            placeholder="Enter your message"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            sx={{ mt: 2 }}>
            Submit message
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://source.unsplash.com/random/650x350"
            alt="random"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersonalCTA;
