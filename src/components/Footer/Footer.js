/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
// import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
      <GridContainer>
        <GridItem>
        <Tooltip
          id="instagram-linkedin"
          title="Check out my Linkedin"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
          href="https://www.linkedin.com/in/sunwoong-kim-136b061b6"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-linkedin"} /> 
        </Button>
        </Tooltip>
        <Tooltip
          id="instagram-github"
          title="Check out my Github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/mattswkim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} /> 
          </Button>
        </Tooltip>
        </GridItem>
      </GridContainer>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <a
            href="https://www.creative-tim.com?ref=mkr-footer"
            className={aClasses}
            target="_blank"
          >
            Creative Tim
          </a>{" "} Template by{" "}
          <a 
          href="https://www.linkedin.com/in/sunwoong-kim-136b061b6" 
          >
            Sunwoong Kim.
          </a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
