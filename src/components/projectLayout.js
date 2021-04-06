import React from "react"
import PropTypes from "prop-types"
import ProjectHeader from "./projectHeader"
import { Container, ThemeProvider } from "@material-ui/core"

const ProjectLayout = props => {
  return (
    <>
      <ProjectHeader
        title={props.title}
        areas={props.areas}
        headerImage={props.headerImage}
      />
      <Container component="main">{props.children}</Container>
    </>
  )
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout
