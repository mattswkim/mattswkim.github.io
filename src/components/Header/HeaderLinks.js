/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import profileImage from "assets/img/faces/matt.JPG";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
    <ListItem className={classes.listItem}>
      <Button
      href="#about"
      color="transparent"
      className={classes.navLink}
      >
      <AccountCircle className={classes.icons} /> About me
      </Button>
    </ListItem>
    <ListItem className={classes.listItem}>
      <Button
      href="#portfolio"
      color="transparent"
      className={classes.navLink}
      >
      <Explore className={classes.icons} />Portfolio
      </Button>
    </ListItem>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
            id="instagram-github"
            title="Download Résumé"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
        >
          <Button
              target="_blank"
              color="transparent"
              className={classes.navLink}
          >
            <a href="https://github.com/mattswkim/mattswkim.github.io/raw/master/src/assets/file/resume.pdf" download="Résumé">
              <img
                src={profileImage}
                className={classes.img}
                alt="profile"
              />
            </a>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
