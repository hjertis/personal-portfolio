import React from "react";
import HeroLayout from "../components/HeroLayout";
import { Button, Typography } from "@mui/material";
import { createApi } from "unsplash-js";

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = React.useState("");
  const clientId = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const secretId = import.meta.env.VITE_UNSPLASH_SECRET_KEY;
  const imageId = "Q1p7bh3SHj8";

  const unsplash = createApi({
    accessKey: clientId,
    secret: secretId,
  });

  unsplash.photos.get({ photoId: imageId }).then((result) => {
    if (result.errors) {
      console.log(result.errors);
    } else {
      setBackgroundImage(result.response.urls.regular);
    }
  });

  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#000",
        backgroundPosition: "center",
      }}>
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography
        color="inherit"
        align="center"
        variant="h1"
        fontWeight="bold"
        sx={{ textTransform: "uppercase" }}>
        I Am Michael
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 }, textTransform: "uppercase" }}>
        Full Stack Web Developer &
        <br />
        Electronic Production Technician
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="#contact"
        sx={{ minWidth: 200 }}>
        Contact Me
      </Button>
    </HeroLayout>
  );
};

export default Hero;
