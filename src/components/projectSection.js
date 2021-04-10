import { Box, Typography } from "@material-ui/core"
import React from "react"

const ProjectSection = props => {
  return (
    <Box py={14} textAlign="center">
      <Typography variant="h2">{props.title}</Typography>
      <Typography
        variant="body1"
        style={{ maxWidth: "45rem", margin: "0 auto" }}
      >
        {props.desc}
      </Typography>
    </Box>
  )
}

export default ProjectSection
