import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import SectionExamples from "views/Components/Sections/SectionExamples.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";
import SectionDownload from "views/Components/Sections/SectionDownload.js";
import SectionCompletedExamples from "views/Components/Sections/SectionCompletedExamples.js";

import profile from "assets/img/faces/matt.JPG";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Sunwoong Kim"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/bg10.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h2 className={classes.title}>Trilingual Full-Stack Web Developer</h2>
                    <h5><strong>MATT SUNWOONG KIM</strong></h5>
                    <Button 
                      href="https://github.com/mattswkim"
                      target="_blank"
                      justIcon link 
                      className={classes.margin5}
                      >
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button 
                      href="https://www.linkedin.com/in/sunwoong-kim-136b061b6"
                      target="_blank"
                      justIcon link 
                      className={classes.margin5}
                      >
                      <i className={"fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              As a <strong>Full Stack Web Developer</strong>, I’ve made various <strong>servers</strong>, <strong>APIs</strong>, <strong>responsive websites</strong> and <strong>web applications</strong>. 
              I love challenging tasks   {" "}
              </p>
            </div>
            <SectionCompletedExamples />
            <SectionCarousel />
            <SectionExamples />
            <SectionDownload />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
