import { Box, Typography } from "@material-ui/core"
import React from "react"

const ProjectSection = props => {
  return (
    <Box py={14} textAlign="center">
      <Typography variant="h2">Title</Typography>
      <Typography
        variant="body1"
        style={{ maxWidth: "45rem", margin: "0 auto" }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, culpa, hic
        voluptatibus mollitia reprehenderit iusto officia ex veritatis ipsam
        optio maiores, architecto vel id expedita quia. Sit fugit hic similique!
      </Typography>
    </Box>
  )
}

export default ProjectSection
