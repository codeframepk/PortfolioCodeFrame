import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import workImages from "../../../assets/workImages/lcd.jpg";

import { useStyles } from "./style";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom className={classes.ourwork}>
        OUR WORK
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={6} sm={4}>
          <img src={workImages} className={classes.lcdimage} />
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4}>
          <img src={workImages} className={classes.lcdimage} />
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <img src={workImages} className={classes.lcdimage} />
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <img src={workImages} className={classes.lcdimage} />
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <img src={workImages} className={classes.lcdimage} />
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <img src={workImages} className={classes.lcdimage} />
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
