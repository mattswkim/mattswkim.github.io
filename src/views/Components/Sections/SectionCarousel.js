import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

import image1 from "assets/img/login.png";
import image2 from "assets/img/search.png";
import image3 from "assets/img/result.png";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div  className={classes.section}>
      <div className={classes.container}>
      <h2 justify="center">Portfolio</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
          <h4>Artificial Brain</h4>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Artificial Brain Login Page
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
          <br /><br />
          <h5>
            Artificial Brain uses <strong>computer vision AI algorithm</strong> via Clarifai API.
            It  can predict age, gender, and multicultural appearance for each detected face based on facial characteristics.
          </h5>
          <h5>Built with React, Node.js, Tachyons, PostgreSQL, and Express.</h5>
          <p>Any imgae url with human face would work!</p>
          <p>* response time is <strong>slower</strong> than usual since it's currently on a free server</p>
          </GridItem>
        </GridContainer>
        <Tooltip
          id="instagram-linkedin"
          title="Check out live demo"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button 
          color="rose" 
          size="sm" 
          href="https://artificialbrain.herokuapp.com"
          target="_blank"
          round>
            live demo
          </Button>
        </Tooltip>
        <Tooltip
          id="instagram-linkedin"
          title="Git hub repo"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button 
          color="info" 
          size="sm" 
          href="https://github.com/mattswkim/smart-brain-project"
          target="_blank"
          simple>
            source code
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
