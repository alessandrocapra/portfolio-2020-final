import { Box, Typography } from "@material-ui/core"
import React from "react"
import { styled } from "@material-ui/core/styles"
import StyledBackgroundSection from "./backgroundImage"

const HeaderBox = styled(Box)({
  width: "100vw",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

export default function ProjectHeader(props) {
  return (
    <StyledBackgroundSection imgName={props.headerImage}>
      <HeaderBox color="white">
        <Box
          flexGrow={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1">{props.title}</Typography>
        </Box>
        <Box pb={9} display="flex" justifyContent="center" alignItems="center">
          <Typography variant="subtitle2">{props.areas}</Typography>
        </Box>
      </HeaderBox>
    </StyledBackgroundSection>
  )
}
