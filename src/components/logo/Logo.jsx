import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" // Ganti dengan viewBox yang sesuai untuk logo
      className={classes.svgHover}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.478 22 2 17.522 2 12S6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z" /> {/* Ganti dengan path yang sesuai untuk logo */}
      <path d="M10 15.27L16.18 12 10 8.73 10 15.27z" /> {/* Ganti dengan path yang sesuai untuk logo */}
    </svg>
  );
};
