import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";
import aboutAgungImage from "../../assets/blog.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "@media (max-width: 768px)": {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  image: {
    width: '100%', 
    maxWidth: '400px', 
    height: 'auto', 
    marginRight: theme.spacing(5),
    "@media (max-width: 768px)": {
      marginRight: 0,
      marginBottom: theme.spacing(3),
    },
  },
  heading: {
    marginLeft: theme.spacing(5),
    "@media (max-width: 768px)": {
      marginLeft: 0,
    },
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: '2rem',
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.contentWrapper}>
        <img 
          src={aboutAgungImage} 
          alt="Profile" 
          className={classes.image} 
        />
        <div className={classes.heading}>
          <Typography variant="h5" component="h2">
              <TextDecrypt text={`${FirstName} ${LastName}`} />
          </Typography>
          <Typography variant="h1" component="h1" className={classes.jobs}>
              <TextDecrypt text={`${Resume.basics.job1} & `} />
              <TextDecrypt text={`${Resume.basics.job2}`} />
          </Typography>
        </div>
      </div>
    </Container>
  );
};
