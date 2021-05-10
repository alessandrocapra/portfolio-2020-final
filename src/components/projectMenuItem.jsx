import React from "react"
import { Grid, Typography, Box } from "@material-ui/core"
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
    [theme.breakpoints.down("md")]: {
      width: "20%",
      borderRadius: 0,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(8),
    borderBottom: "8px solid transparent",
    transition: "0.2s",
    textAlign: "center",
    "&:hover": {
      borderBottom: "8px solid #B0151C",
      backgroundColor: "#1b1b1b",
    },
    height: "50%",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing(2),
      textAlign: "left",
      borderBottom: "1px solid gray",
    },
  },
  title: {
    marginBottom: "0.5rem",
    fontSize: "1.55rem",
  },
  textContainer: {
    [theme.breakpoints.down("md")]: { flex: 1, paddingLeft: "2rem" },
  },
  desc: {
    lineHeight: 1.25,
  },
}))

const ProjectMenuWidget = props => {
  const classes = useStyles()
  return (
    <Grid
      item
      sm={12}
      lg={4}
      className={classes.container}
      component={_LinkProject}
      to={props.link || "/project/babbelbord"}
      onClick={props.projectMenu(true)}
    >
      <Image imgName={props.image} className={classes.image} />
      <Box className={classes.textContainer}>
        <Typography variant="h5" className={classes.title}>
          {props.title}
        </Typography>
        <Typography variant="body1" className={classes.desc}>
          {props.desc}
        </Typography>
      </Box>
    </Grid>
  )
}

export default ProjectMenuWidget
