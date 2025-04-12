import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Photo Sharing App
        </Typography>
        <Typography variant="body1">Your Name</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;