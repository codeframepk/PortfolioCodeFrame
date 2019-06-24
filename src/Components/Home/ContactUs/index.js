import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Navbar from "../../Home/Header/Menu";
import Footer from "../../Home/Footer/"
import { useStyles } from "./style.js";

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} className={classes.bgimage}>
          <div className={classes.blurimg} />
        </Grid>
        <Grid align="center" item xs={12} sm={6} className={classes.form}>
          <Typography variant="h4" gutterBottom className={classes.contactText}>
            Send Us A Message
          </Typography>
          <TextField
            id="outlined-email-input"
            label="TELL US YOUR NAME *"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="First Name"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
          />
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}
