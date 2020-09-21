import React from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import todolist from "assets/img/todolist.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
        <br />
          <h5>
            This app is a <strong>public</strong> todo list. Anyone can add or delete items on the list.
          </h5>
          <h5>
          If you want to create a <strong>new list</strong> try this https://shrouded-brook-81050.herokuapp.com<strong>/NAME-OF-NEW-LIST</strong>
          </h5>
          <h5>
            Built with Node Js, MongoDB, EJS, Express.
          </h5>
          <p>* Currently, items on the list are public. Anything you add will be able to be seen by everyone.</p>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>          
          <h5>
            Simple Todo List app 
          </h5>
              <img
                src={todolist}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button 
              color="rose" 
              size="sm" 
              href="https://shrouded-brook-81050.herokuapp.com/"
              target="_blank"
              round>
                Live Demo
              </Button>
          </GridItem>
        </GridContainer>
        <br /><br />
      </div>
    </div>
  );
}
