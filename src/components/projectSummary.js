import { Box, Typography } from "@material-ui/core"
import React from "react"

const ProjectSummary = ({ children }) => {
  return (
    <Box pt={27} pb={14} textAlign="center">
      <Typography variant="subtitle1">{children}</Typography>
    </Box>
  )
}

export default ProjectSummary
