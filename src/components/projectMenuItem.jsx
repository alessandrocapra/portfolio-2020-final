import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Image from "./image"
import { _Link } from "./header"

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
    "&:hover": {
      backgroundColor: "red",
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
      component={_Link}
      to={props.link || "/project/babbelbord"}
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
