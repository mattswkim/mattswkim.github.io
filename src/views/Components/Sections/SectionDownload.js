/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <br /><br /><br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Contact Me</h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h5>If you have any questions or want to see more of my portfolio, feel free to contact me.</h5>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
          <Button
              color="info"
              size="lg"
              href = "mailto: mattsunwoongkim@gmail.com"
            >
              Send Email
            </Button>
            <Button
              color="info"
              size="lg"
              href="views/Components/Sections/resume.pdf"
              download
              target="_blank"
            >
              Download Rèsumè
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
      </div>
    </div>
  );
}
