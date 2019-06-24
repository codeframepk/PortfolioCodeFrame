import { makeStyles } from "@material-ui/core/styles";
import bgimg from "../../../assets/contactUs/bg.jpg";
export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  bgimage: {
    backgroundImage: `url(${bgimg})`,
    height: "800px",
    backgroundSize: "cover"
  },
  blurimg: {
    backgroundColor: "rgba(0,0,0,0.7)",
    width: "100%",
    height: "800px"
  },
  contactText: {
    // marginLeft:"50%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50%",
    minWidth: "200px"
  }
}));
