import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";
import SectionBasics from "./SectionBasics";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <br /><br /><br id="about" /><br /><br /><br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>About Me</h2>
            <h5>
              <strong>Self-taught full stack web developer</strong>, <strong>driven</strong> and experienced 
              in learning complex concepts and technologies in a short amount of time through 
              independent learning. Able to <strong>effectively self-manage</strong> during independent 
              projects, as well as <strong>collaborate in team settings. </strong>
              <strong>Enthusiastic about learning</strong> new languages and technologies, 
              <strong> passionate</strong> about best practices and tackling tough challenges.
            </h5>
          </GridItem>
          <SectionBasics />
        </GridContainer>
        <br /><br /><br id="portfolio" />
      </div>
    </div>
    
  );
}
