/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';
import profile from '../../assets/hi-removebg-preview.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hallo semuanya!";
  const aboutme = `Saya ${FirstName} ${LastName},seorang desainer UI/UX dan pengembang web. 
                  Saya selalu terbuka untuk hal-hal baru dan menantang! 
                  Saya siap membantu Anda menciptakan website yang indah dan terstruktur dengan baik. 
                  Proyek-proyek saya sebagian besar berfokus pada pengembangan web.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <img 
            src={profile} 
            alt="Profile" 
            className="_img" 
          />
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
