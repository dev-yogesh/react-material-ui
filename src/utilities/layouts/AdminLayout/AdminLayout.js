import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import clsx from 'clsx';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
  ListItem,
  Icon,
  makeStyles,
  Box,
} from '@material-ui/core';
import Tippy from '@tippyjs/react';
import { toggleDrawer } from '../../utilityActions';

const drawerWidth = 265;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(8),
  },
  drawerToggleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  profileContainer: {
    paddingLeft: '12px',
  },
  menuItemContainer: {
    paddingLeft: '20px',
  },
  menuItemIcon: {
    minWidth: '48px',
  },
  // menuItemText: {
  //   fontSize: '14px',
  // },
  drawerContentContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  active: {
    color: '#1162fe',
    backgroundColor: 'rgba(17, 98, 254, 0.1)',
    borderRight: '3px solid #1162fe',
    '& $menuItemIcon': {
      color: '#1162fe',
    },
    '&:hover': {
      backgroundColor: 'rgba(17, 98, 254, 0.1)',
    },
  },
}));

const AdminLayout = ({ children, openDrawer, toggleDrawer }) => {
  const classes = useStyles();

  const handleDrawerToggle = () => {
    toggleDrawer();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: openDrawer,
            })}
          >
            <Icon>menu_icon</Icon>
          </IconButton>
          <Typography variant='h6' noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <div className={classes.drawerToggleButton}>
          <IconButton onClick={handleDrawerToggle}>
            <Icon>menu_icon</Icon>
          </IconButton>
        </div>
        <Divider />

        <Box className={classes.drawerContentContainer}>
          <Box>
            <List>
              <ListItem button classes={{ root: classes.profileContainer }}>
                <ListItemAvatar>
                  <Avatar>EM</Avatar>
                </ListItemAvatar>
                <ListItemText primary='Elon Musk' secondary='Super Admin' />
              </ListItem>
            </List>

            <List>
              <ListItem
                button
                classes={{ root: classes.menuItemContainer }}
                component={NavLink}
                to='/users'
                activeClassName={classes.active}
              >
                <Tippy arrow placement='right' content='Users'>
                  <ListItemIcon classes={{ root: classes.menuItemIcon }}>
                    <Icon>group</Icon>
                  </ListItemIcon>
                </Tippy>
                <ListItemText
                  primary='Users'
                  classes={{ primary: classes.menuItemText }}
                />
              </ListItem>

              <ListItem
                button
                classes={{ root: classes.menuItemContainer }}
                component={NavLink}
                to='/orgs'
                activeClassName={classes.active}
              >
                <Tippy arrow placement='right' content='Organizations'>
                  <ListItemIcon classes={{ root: classes.menuItemIcon }}>
                    <Icon>business</Icon>
                  </ListItemIcon>
                </Tippy>
                <ListItemText
                  primary='Organizations'
                  classes={{ primary: classes.menuItemText }}
                />
              </ListItem>

              <ListItem
                button
                classes={{ root: classes.menuItemContainer }}
                component={NavLink}
                to='/healthcareOrgs'
                activeClassName={classes.active}
              >
                <Tippy
                  arrow
                  placement='right'
                  content='Healthcare Organizations'
                >
                  <ListItemIcon classes={{ root: classes.menuItemIcon }}>
                    <Icon>local_hospital</Icon>
                  </ListItemIcon>
                </Tippy>
                <ListItemText
                  primary='Healthcare Organizations'
                  classes={{ primary: classes.menuItemText }}
                />
              </ListItem>

              <ListItem
                button
                classes={{ root: classes.menuItemContainer }}
                component={NavLink}
                to='/contactUs'
                activeClassName={classes.active}
              >
                <Tippy
                  arrow
                  placement='right'
                  content='Contact Us'
                >
                  <ListItemIcon classes={{ root: classes.menuItemIcon }}>
                    <Icon>local_hospital</Icon>
                  </ListItemIcon>
                </Tippy>
                <ListItemText
                  primary='Contact Us'
                  classes={{ primary: classes.menuItemText }}
                />
              </ListItem>
            </List>
          </Box>

          <Box>
            <ListItem button classes={{ root: classes.menuItemContainer }}>
              <Tippy arrow placement='right' content='Logout'>
                <ListItemIcon classes={{ root: classes.menuItemIcon }}>
                  <Icon>exit_to_app</Icon>
                </ListItemIcon>
              </Tippy>
              <ListItemText primary='Logout' />
            </ListItem>
          </Box>
        </Box>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    openDrawer: state.utilities.openDrawer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: () => {
      dispatch(toggleDrawer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
