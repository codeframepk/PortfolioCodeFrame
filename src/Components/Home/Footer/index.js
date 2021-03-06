import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import { useStyles } from "./style";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function generate(element) {
  return [0, 1, 2, 4, 5, 6, 7, 8].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}
export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.fimage}>
      <div className={classes.bgcolor}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Grid container spacing={0} className={classes.txt}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.demo}>
                  Creative Solutions
                </Typography>
                <div className={classes.demo}>
                  <List>
                    {generate(
                      <ListItem>
                        <ListItemText primary="Single-line item" />
                      </ListItem>
                    )}
                  </List>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={0} className={classes.txt}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.demo}>
                  Creative Solutions
                </Typography>
                <div className={classes.demo}>
                  <List>
                    {generate(
                      <ListItem>
                        <ListItemText primary="Single-line item" />
                      </ListItem>
                    )}
                  </List>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={0} className={classes.txt}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.demo}>
                  Creative Solutions
                </Typography>
                <div className={classes.demo}>
                  <List>
                    {generate(
                      <ListItem>
                        <ListItemText primary="Single-line item" />
                      </ListItem>
                    )}
                  </List>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
                <Grid align="center" item xs={12} sm={12} >
                  <FaFacebookSquare className={classes.icon} />
                  <FaGooglePlusSquare className={classes.icon} />
                  <FaInstagram className={classes.icon} />
                  <FaTwitterSquare className={classes.icon} />
              </Grid>           
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
