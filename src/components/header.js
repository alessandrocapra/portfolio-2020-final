import { Link } from "gatsby"
import PropTypes from "prop-types"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { Typography } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <Container component="header">
    <Grid container>
      <Grid item xs={6}>
        <Link to="/">
          <Typography variant="h2">Title</Typography>
        </Link>
      </Grid>
      <Grid container item xs={6} component="nav" justify="flex-end">
        <Link to="/page-2">Page 2</Link>
        <Link to="/project/babbelbord">Babbelbord</Link>
      </Grid>
    </Grid>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
