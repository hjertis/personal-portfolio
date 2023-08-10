import * as React from "react";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

function Copyright() {
  return (
    <React.Fragment>
      <Typography variant="body2" color="text.secondary">
        {"© "}
        <Link color="inherit" href="/" underline="none">
          Michael Hjertstrøm
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </React.Fragment>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        borderTop: 1,
        borderColor: "divider",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.grey[900],
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Contact me:
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
              Phone: +45 12 34 56 78
              <br />
              Email: michael.hjertstrom@gmail.com
              <br />
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Copyright />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Stack direction="row" spacing={2}>
              <Facebook />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
