import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useStyles } from "./style";
import logoimg from "../../../../assets/logo/log.png"


export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Typography variant="h3" gutterBottom >
        <img src={logoimg} className={classes.logotitle} />
          </Typography>
        </Grid>
        <Grid item xs={8} className={classes.menu}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="white"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            
            <Link to="/contactus" ><Tab label="Contact Us" /></Link>
          </Tabs>
        </Grid>
      </Grid>
    </div>
  );
}
