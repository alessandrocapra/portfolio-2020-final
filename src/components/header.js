import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Hidden,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Grid,
  Fade,
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
import Image from "./image"
import ProjectMenuWidget from "./projectMenuItem"

const useStyles = makeStyles(theme => ({
  active: {
    fontWeight: "700",
    borderBottom: "4px solid #B0151C !important",
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
  projectMenu: {
    position: "fixed",
    top: "4.3rem",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(18,18,18,1)",
    width: "85vw",
    zIndex: 1,
    display: "flex",
    overflow: "hidden",
    borderRadius: "1rem",
    border: "0.5px solid gray",
  },
}))

const _Link = styled(({ isProjectPage, ...other }) => <Link {...other} />)({
  padding: "1rem 2rem",
  textDecoration: "none",
  fontFamily: "'Fira Sans', sans-serif",
  fontSize: "1.25rem",
  color: "#fff",
  borderBottom: "4px solid transparent",
  transition: "0.2s",
  "&:hover": {
    borderBottom: "4px solid #B0151C",
  },
})

const Header = ({ isProjectPage }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [projectsListItemOpen, setProjectsListItemOpen] = React.useState(false)
  const [projectMenuOpen, setProjectMenuOpen] = React.useState(false)

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setDrawerOpen(open)
  }

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        style={{ backgroundColor: "#1b1b1b" }}
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
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
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
                  <ListItem
                    button
                    onClick={() => setProjectsListItemOpen(true)}
                  >
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
                      <ListItem button component={Link} to="/project/custodian">
                        <ListItemText inset primary="Crypto custodian app" />
                      </ListItem>
                      <ListItem
                        button
                        component={Link}
                        to="/project/whistleblower"
                      >
                        <ListItemText inset primary="Whistleblower platform" />
                      </ListItem>
                      <ListItem
                        button
                        component={Link}
                        to="/project/master-thesis"
                      >
                        <ListItemText
                          inset
                          primary="Gamified respiratory exercises"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={Link}
                        to="/project/babbelbord"
                      >
                        <ListItemText inset primary="Babbelbord" />
                      </ListItem>
                      <ListItem button component={Link} to="/project/beathoven">
                        <ListItemText inset primary="Beathoven" />
                      </ListItem>
                      <ListItem button component={Link} to="/project/jammin">
                        <ListItemText inset primary="Jammin" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button>
                    <ListItemIcon>
                      <InboxRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="About"
                      component={Link}
                      to="/about"
                    />
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </Hidden>

          <Hidden xsDown>
            <_Link
              to="/"
              activeClassName={classes.active}
              onMouseEnter={() => setProjectMenuOpen(false)}
              isProjectPage={isProjectPage}
            >
              Home
            </_Link>

            <_Link
              to="#"
              onMouseEnter={() => setProjectMenuOpen(true)}
              activeClassName={classes.active}
              isProjectPage={isProjectPage}
              partiallyActive={true}
            >
              Projects
            </_Link>

            <_Link
              to="/page-2"
              activeClassName={classes.active}
              onMouseEnter={() => setProjectMenuOpen(false)}
              isProjectPage={isProjectPage}
            >
              About
            </_Link>
          </Hidden>
        </Toolbar>
      </AppBar>
      {projectMenuOpen && (
        <Fade in={projectMenuOpen}>
          <Box
            style={{ position: "relative" }}
            onMouseLeave={() => setProjectMenuOpen(false)}
          >
            <Box className={classes.projectMenu}>
              <Grid
                container
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <ProjectMenuWidget
                  title="Crypto custodian app"
                  image="custodian_home.png"
                  desc="Designed and coded in React Native."
                  link="/project/custodian"
                  projectMenu={setProjectMenuOpen}
                />
                <ProjectMenuWidget
                  title="Whistleblower platform"
                  image="whistleblower_home.png"
                  desc="SaaS application to enable whistleblowers within organizations."
                  link="/project/whistleblower"
                  projectMenu={setProjectMenuOpen}
                />
                <ProjectMenuWidget
                  title="Gamified respiratory exercises"
                  image="thesis_home.png"
                  desc="Master's thesis project."
                  link="/project/master-thesis"
                  projectMenu={setProjectMenuOpen}
                />
                <ProjectMenuWidget
                  title="Babbelbord"
                  image="babbelbord_home.png"
                  desc="Tech-enhanced board game to help people with dementia."
                  link="/project/babbelbord"
                  projectMenu={setProjectMenuOpen}
                />
                <ProjectMenuWidget
                  title="Beathoven"
                  image="beathoven_home.png"
                  desc="Alternative interfaces allowing deaf people to experience music."
                  link="/project/beathoven"
                  projectMenu={setProjectMenuOpen}
                />
                <ProjectMenuWidget
                  title="Jammin"
                  image="jammin_home.png"
                  desc="Portal to find like-minded musicians to jam together."
                  link="/project/jammin"
                  projectMenu={setProjectMenuOpen}
                />
              </Grid>
            </Box>
          </Box>
        </Fade>
      )}
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
