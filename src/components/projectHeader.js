import { Box, Typography, Chip } from "@material-ui/core"
import React from "react"
import { styled, makeStyles } from "@material-ui/core/styles"
import StyledBackgroundSection from "./backgroundImage"

const HeaderBox = styled(Box)({
  width: "100vw",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
})

const useStyles = makeStyles({
  areasBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width:600px)": {
      flexDirection: "row",
    },
  },
})

export default function ProjectHeader(props) {
  const classes = useStyles()
  const areaTags = props.areas.map(area => (
    <Chip
      label={area}
      style={{
        marginRight: "0.75rem",
        marginBottom: "0.75rem",
        backgroundColor: "rgba(46,46,46,0.8)",
        borderRadius: "8px",
      }}
      key={area}
    />
  ))

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
        <Box pb={9} className={classes.areasBox}>
          {areaTags}
        </Box>
      </HeaderBox>
    </StyledBackgroundSection>
  )
}
