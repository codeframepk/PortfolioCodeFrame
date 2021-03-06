import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Navbar from "../../Home/Header/Menu";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style.js";
import Footer from "../Footer"

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} className={classes.bgimage}>
          <div className={classes.blurimg} />
        </Grid>
        <Grid align="center" item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            Send Us A Message
          </Typography>
          <TextField
            id="outlined-email-input"
            label="Enter Your Name"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="Enter Your Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="Your Message"
            multiline
            rows="10"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Send
            </Button>
          </div>
        </Grid>
      </Grid>
<Footer />
    </div>
  );
}
