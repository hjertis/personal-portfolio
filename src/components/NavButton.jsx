import * as React from "react";
import { Link } from "@mui/material";

export default function NavButton(props) {
  return (
    <Link
      href={props.href}
      underline="none"
      color="inherit"
      noWrap
      sx={{ my: 1, mx: 1.5, color: "text.secondary" }}>
      {props.children}
    </Link>
  );
}
