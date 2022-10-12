import sizes from "./sizes";
import { DRAWER_WIDTH } from "../constants";
const drawerWidth = DRAWER_WIDTH;
const styles = (theme) => ({
  root: { display: "flex" },
  hide: { display: "none" },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {
    marginRight: "1rem",
    display: "flex",
    alignItems: "center",
    [sizes.down("xs")]: {
      marginRight: "0.5rem",
    },
  },
  button: {
    margin: "0 0.5rem",
    width: "1rem",
    height: "3rem",
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.3rem",
    },
  },

  link: {
    color: "white",
    textDecoration: "none",
  },
});

export default styles;
