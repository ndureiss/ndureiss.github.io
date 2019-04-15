import React from "react";
import {
  AppBar,
  Avatar,
  Divider,
  Drawer,
  List,
  SvgIcon,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  Mail as MailIcon
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core";
import MenuIcon from "../Components/MenuIcon";
import HomeCard from "../Components/HomeCard";
import Profile from "../img/profile.jpeg";

const drawerWidth = 65;

const grey = "#4E6D87";

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: grey,
    zIndex: theme.zIndex.drawer + 1,
    alignItems: "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    marginTop: 175,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
  iconHover: {
    '&:hover': {
      color: grey,
    },
  },
  drawerContent: {
    marginTop: 710,
  }
});

class Home extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed" color="default" className={classes.appBar}>
          <Toolbar>
            <Avatar src={Profile} className={classes.bigAvatar} />
            <div>
              <Typography variant="h4">
                Nicolas Dureisseix
              </Typography>
              <Typography variant="h5">
                Junior Engineer in Cybersecurity
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Divider className={classes.drawerContent}/>
          <List>
            <MenuIcon tooltip="Send me an email" Icon={MailIcon} link="mailto:nicolas.dureisseix@hotmail.fr" className={classes.iconHover}/>
            <MenuIcon tooltip="Explore my Github" Icon={SvgIcon} link="https://github.com/ndureiss" className={classes.iconHover}>
              <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
            </MenuIcon>
            <MenuIcon tooltip="Follow me on LinkedIn" Icon={SvgIcon} link="https://www.linkedin.com/in/nicolas-dureisseix" className={classes.iconHover}>
              <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
            </MenuIcon>
            <MenuIcon tooltip="See my RootMe profile" Icon={SvgIcon} link="https://www.root-me.org/ndureiss" className={classes.iconHover}>
              <path d="M12,2A9,9 0 0,0 3,11C3,14.03 4.53,16.82 7,18.47V22H9V19H11V22H13V19H15V22H17V18.46C19.47,16.81 21,14 21,11A9,9 0 0,0 12,2M8,11A2,2 0 0,1 10,13A2,2 0 0,1 8,15A2,2 0 0,1 6,13A2,2 0 0,1 8,11M16,11A2,2 0 0,1 18,13A2,2 0 0,1 16,15A2,2 0 0,1 14,13A2,2 0 0,1 16,11M12,14L13.5,17H10.5L12,14Z" />
            </MenuIcon>
          </List>
        </Drawer>
        <main className={classes.content}>
          <HomeCard />
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Home);