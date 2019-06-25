import { makeStyles } from "@material-ui/core/styles";
import bgimg from "../../../assets/contactUs/bg.jpg";
export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bgimage: {
    backgroundImage: `url(${bgimg})`,
    height: "600px",
    backgroundSize: "cover"
  },
  blurimg: {
    backgroundColor: "rgba(0,0,0,0.7)",
    width: "100%",
    height: "600px"
  },
  contactText: {
    marginLeft: "-370px",
    marginTop: "15px",
    marginBottom: "-15px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "70%",
    minWidth: "200px"
  },
  button: {
    width:"70%",
   marginTop:"10px"
  },
  
}));
