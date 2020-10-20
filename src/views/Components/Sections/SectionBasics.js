import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  // const [checked, setChecked] = React.useState([24, 22]);
  // const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  // const [checkedA, setCheckedA] = React.useState(true);
  // const [checkedB, setCheckedB] = React.useState(false);

  // const handleToggle = value => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setChecked(newChecked);
  // };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              <small>Programming Skills</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button className={classes.customLink} color="info" size="sm" round>React.js</Button>
              <Button className={classes.customLink} color="rose" size="sm" round>express.js</Button>
              <Button className={classes.customLink} color="primary" size="sm" round>Javascript</Button>
              <Button className={classes.customLink} color="info" size="sm" round>Node.js</Button>
              <Button className={classes.customLink} color="primary" size="sm" round>Python</Button>
              <Button className={classes.customLink} color="info" size="sm" round>Flask</Button>
              <Button className={classes.customLink} color="danger" size="sm" round>SQL</Button>
              <Button className={classes.customLink} color="danger" size="sm" round>MongoDB</Button>
              <Button className={classes.customLink} color="success" size="sm" round>EJS</Button>
              <Button className={classes.customLink} color="primary" size="sm" round>PHP</Button>
              <Button className={classes.customLink} color="success" size="sm" round>Django</Button>
              <Button className={classes.customLink} color="rose" size="sm" round>Git</Button>
              <Button className={classes.customLink} color="primary" size="sm" round>C</Button>
              <Button className={classes.customLink} color="warning" size="sm" round>json</Button>
              <Button className={classes.customLink} color="success" size="sm" round>jquery</Button>
              <Button className={classes.customLink} color="success" size="sm" round>jinja</Button>
              <Button className={classes.customLink} color="primary" size="sm" round>Java</Button>
              <Button className={classes.customLink} color="warning" size="sm" round>HTML5</Button>
              <Button className={classes.customLink} color="warning" size="sm" round>CSS</Button>
              <Button className={classes.customLink} color="info" size="sm" round>Bootstrap</Button>
              <Button className={classes.customLink} color="warning" size="sm" round>REStful</Button>
              <Button className={classes.customLink} color="warning" size="sm" round>AJAX</Button>
              <Button className={classes.customLink} justIcon round color="rose">
                <Favorite className={classes.icons} />
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
