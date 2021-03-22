import { Link } from "gatsby"
import PropTypes from "prop-types"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { Hidden, Menu, MenuItem, Typography } from "@material-ui/core"
import { styled, makeStyles } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles({
  active: {
    fontWeight: "700",
  },
  menuButton: {
    marginRight: "1rem",
  },
  toolBar: {
    justifyContent: "center",
  },
})

const _Link = styled(({ isProjectPage, ...other }) => <Link {...other} />)({
  padding: "1rem",
  textDecoration: "none",
})

const Header = ({ isProjectPage }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleProjectsMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar className={classes.toolBar}>
        <Hidden smUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="body1">
          <_Link
            to="/"
            activeClassName={classes.active}
            isProjectPage={isProjectPage}
          >
            Home
          </_Link>
        </Typography>
        <Typography variant="body1">
          <_Link
            to="#"
            onClick={handleProjectsMenu}
            activeClassName={classes.active}
            isProjectPage={isProjectPage}
          >
            Projects
          </_Link>
        </Typography>
        <Menu
          id="projects-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/project/crypto-custodian"
          >
            Crypto custodian app
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/project/whistleblower"
          >
            Whistleblowing suite
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/project/master-thesis"
          >
            Master thesis
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/project/babbelbord"
          >
            Babbelbord
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/project/beathoven"
          >
            Beathoven
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/project/jammin">
            Jammin
          </MenuItem>
        </Menu>
        <Typography variant="body1">
          <_Link
            to="/page-2"
            activeClassName={classes.active}
            isProjectPage={isProjectPage}
          >
            About
          </_Link>
        </Typography>
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
