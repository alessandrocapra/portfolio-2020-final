import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Hidden,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@material-ui/core"
import { styled, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import InboxRoundedIcon from "@material-ui/icons/InboxRounded"
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import ExpandLessRounded from "@material-ui/icons/ExpandLessRounded"
import ExpandMoreRounded from "@material-ui/icons/ExpandMoreRounded"

const useStyles = makeStyles(theme => ({
  active: {
    fontWeight: "700",
  },
  menuButton: {
    marginRight: "1rem",
  },
  toolBar: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  projectMenuItem: {
    fontSize: "0.5rem",
  },
  drawerRoot: {
    width: 275,
  },
}))

const _Link = styled(({ isProjectPage, ...other }) => <Link {...other} />)({
  padding: "1rem 2rem",
  textDecoration: "none",
  fontFamily: "'Fira Sans', sans-serif",
  fontSize: "1.25rem",
  color: "#fff",
})

const Header = ({ isProjectPage }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [projectsListItemOpen, setProjectsListItemOpen] = React.useState(false)

  const handleProjectsMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setDrawerOpen(open)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="sticky"
      color="inherit"
      style={{ backgroundColor: "#B0151C" }}
    >
      <Toolbar className={classes.toolBar}>
        <Hidden smUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <div className={classes.drawerRoot}>
              <List>
                <ListItem
                  button
                  component={Link}
                  to="/"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemIcon>
                    <HomeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => setProjectsListItemOpen(true)}>
                  <ListItemIcon>
                    <EmojiObjectsRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
                  {projectsListItemOpen ? (
                    <ExpandLessRounded />
                  ) : (
                    <ExpandMoreRounded />
                  )}
                </ListItem>
                <Collapse
                  in={projectsListItemOpen}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem button>
                      <ListItemText inset primary="Crypto custodian app" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText inset primary="Whistleblower platform" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText
                        inset
                        primary="Respiratory exercises for children with DMD"
                      />
                    </ListItem>
                    <ListItem button component={Link} to="/project/babbelbord">
                      <ListItemText inset primary="Babbelbord" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText inset primary="Beathoven" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText inset primary="Jammin" />
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button>
                  <ListItemIcon>
                    <InboxRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>

        <Hidden xsDown>
          <_Link
            to="/"
            activeClassName={classes.active}
            isProjectPage={isProjectPage}
          >
            Home
          </_Link>

          <_Link
            to="#"
            onMouseOver={handleProjectsMenu}
            activeClassName={classes.active}
            isProjectPage={isProjectPage}
          >
            Projects
          </_Link>

          <Menu
            id="project-menu"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              component={_Link}
              to="/project/crypto-custodian"
            >
              Crypto custodian app
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={_Link}
              to="/project/whistleblower"
            >
              Whistleblowing suite
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={_Link}
              to="/project/master-thesis"
            >
              Master thesis
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={_Link}
              to="/project/babbelbord"
            >
              Babbelbord
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={_Link}
              to="/project/beathoven"
            >
              Beathoven
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={_Link}
              to="/project/jammin"
            >
              Jammin
            </MenuItem>
          </Menu>

          <_Link
            to="/page-2"
            activeClassName={classes.active}
            isProjectPage={isProjectPage}
          >
            About
          </_Link>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
