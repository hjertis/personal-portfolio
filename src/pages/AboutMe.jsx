import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Container maxWidth="lg" id="aboutme">
      <Grid container spacing={2} sx={{ mt: 5, mb: 5 }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            width: "100%",
            textAlign: "center",
          }}>
          <Box
            component="img"
            sx={{
              height: "300px",
              width: "300px",
              borderRadius: "50%",
            }}
            src="https://source.unsplash.com/random/300x300"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              height: "100%",
              position: "relative",
              borderTopRightRadius: "50px",
            }}>
            <Typography
              variant="h4"
              gutterBottom
              fontWeight="bold"
              sx={{ width: "100%", textAlign: "center" }}>
              Hello, I am Michael
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              component="p"
              sx={{ pt: 4 }}>
              I am a full-stack developer with a passion for building
              applications. I am currently working as a freelance developer and
              am looking for a challenging position to improve my skills. Feel
              free to contact me if you have any questions.
            </Typography>
            <Button
              variant="contained"
              href="#"
              size="large"
              color="secondary"
              sx={{ mt: 4, position: "absolute", right: 30 }}>
              Contact Me Now
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
