import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Footer from "../../Home/Footer/";
import { useStyles } from "./style.js";
import Button from "@material-ui/core/Button";


export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} >
          
        </Grid>
        <Grid align="center" item xs={12} sm={6} className={classes.form}>
         
          {/* <Typography variant="h6" gutterBottom className={classes.contactText}>
            Enter Your Name:
          </Typography> */}
          <TextField
            id="outlined-email-input"
            label="NAME "
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
           {/* <Typography variant="h6" gutterBottom className={classes.contactText}>
            Enter Your Email:
          </Typography> */}
          <TextField
            id="outlined-email-input"
            label="EMAIL"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
          />
          {/* <Typography variant="h6" gutterBottom className={classes.contactText}>
            Message
          </Typography> */}
          <TextField
            id="outlined-multiline-static"
            label="Message Here"
            multiline
            rows="8"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          
          <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
       
        </Grid>
        
        <Footer />
      </Grid>
    </div>
  );
}
