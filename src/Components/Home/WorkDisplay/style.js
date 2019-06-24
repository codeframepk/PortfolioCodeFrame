import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  ourwork: {
    textAlign: "center",
    marginTop: "5px"
  },
  lcdimage: {
    width: "90%",
    marginLeft: "20px",
    marginTop: "25px"
  },
  title: {
    textAlign: "center",
    fontFamily: "sans-serif"
  }
}));
