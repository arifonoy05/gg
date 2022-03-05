import React from "react";
import { AppBar, Toolbar } from "@mui/material";

import Logo from "../assets/images/red-dot-white.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#fff",
      }}
    >
      <Toolbar>
        <Link to="/">
          <img src={Logo} alt="red-dot-white-logo" width={150} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
