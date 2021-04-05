import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Hidden, Menu, MenuItem, Typography } from "@material-ui/core"
import { styled, makeStyles } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
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
  projectMenuItem: {
    fontSize: "0.5rem",
  },
})

const _Link = styled(({ isProjectPage, ...other }) => <Link {...other} />)({
  padding: "1rem 2rem",
  textDecoration: "none",
  // fontSize: "1.25rem",
  color: "#fff",
})

const Header = ({ isProjectPage }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleProjectsMenu = event => {
    setAnchorEl(event.currentTarget)
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
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

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
