import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles, styled } from "@material-ui/core/styles"
import Image from "./image"
import { Link } from "gatsby"
import theme from "../theme"

const _LinkProject = styled(({ isProjectPage, ...other }) => (
  <Link {...other} />
))({
  padding: theme.spacing(8),
  textDecoration: "none",
  fontFamily: "'Fira Sans', sans-serif",
  fontSize: "1.25rem",
  color: "#fff",
  borderBottom: "4px solid transparent",
  "&:hover": {
    borderBottom: "4px solid #B0151C",
  },
})

const useStyles = makeStyles(theme => ({
  image: {
    width: "40%",
    marginBottom: "1rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(8),
    borderBottom: "8px solid transparent",
    transition: "0.2s",
    "&:hover": {
      borderBottom: "8px solid #B0151C",
    },
    height: "50%",
  },
  title: {
    marginBottom: "0.5rem",
    fontSize: "1.55rem",
  },
}))

const ProjectMenuWidget = props => {
  const classes = useStyles()
  return (
    <Grid
      item
      xs={12}
      sm={4}
      className={classes.container}
      component={_LinkProject}
      to={props.link || "/project/babbelbord"}
      onClick={props.projectMenu(true)}
      style={{ textAlign: "center" }}
    >
      <Image imgName={props.image} className={classes.image} />
      <Typography variant="h5" className={classes.title}>
        {props.title}
      </Typography>
      <Typography variant="body1">{props.desc}</Typography>
    </Grid>
  )
}

export default ProjectMenuWidget
