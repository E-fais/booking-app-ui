import { Typography } from "@mui/material";
import React from "react";
import "./hero.css";
function HeroBanner() {
  return (
    <div className="hero">
      <Typography align="center" 
      variant="h4"
      mt={5}

      padding={1}
      fontWeight={800}>
        Make Your Stay
      </Typography>
      <Typography
        align="center"
        variant="h4"
        sx={{ color: "yellow" }}
        fontWeight={800}
      >
        The Most Memorable
      </Typography>
    </div>
  );
}

export default HeroBanner;
