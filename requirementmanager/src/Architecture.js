import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function Architecture() {
  const classes = useStyles();
  return (
    <div className="Architecture">
      <div>
        <Button variant="outlined" color="inherit" className={classes.button}>
          Import Exigences
        </Button>

        <Button variant="outlined" color="secondary" className={classes.button}>
          Import Relation
        </Button>
      </div>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary="Exigences 1" />
          </ListItem>
          <ListItem button>
          <Divider/>
            <ListItemText primary="Exigences 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Exigences 3" />
          </ListItem>
        </List>
      </div>
      <div>
        <Button variant="outlined" color="inherit" className={classes.button}>
          Export Exigences
        </Button>

        <Button variant="outlined" color="secondary" className={classes.button}>
          Export Relation
        </Button>
      </div>
    </div>
  );
}

export default Architecture;
