import * as React from "react";
import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";
import NavButton from "../components/NavButton";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Toolbar
        sx={{
          flexWrap: "wrap",
        }}>
        <AutoAwesome />
        <Link
          variant="h6"
          color="inherit"
          noWrap
          underline="none"
          sx={{ flexGrow: 1, ml: 1 }}
          href="/">
          hjertstrom.info
        </Link>
        <nav>
          <NavButton href="#aboutme">About Me</NavButton>
          <NavButton href="#experience">Experience</NavButton>
          <NavButton href="#portfolio">Portfolio</NavButton>
          <NavButton href="#contact">Contact</NavButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
