import { makeStyles } from "@material-ui/core/styles";
import footerImage from "../../../assets/footerImages/bg.jpg";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  fimage: {
    backgroundImage: `url(${footerImage})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    // height: "200px",
    backgroundSize:"cover",
    
  },
  bgcolor: {
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "100%",
    // height: "200px",
    
  },
  demo:{
      marginLeft:'30%',
      color:'white',

  },
  icon: {
    height:"80px",
    width:"80px",
    color:"white"
        
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: "red",
    },
  },
}));
