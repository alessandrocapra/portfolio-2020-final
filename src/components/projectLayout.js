import React from "react"
import PropTypes from "prop-types"
import ProjectHeader from "./projectHeader"
import { Container, ThemeProvider } from "@material-ui/core"
import theme from "../theme"

const ProjectLayout = props => {
  return (
    <ThemeProvider theme={theme}>
      <ProjectHeader
        title={props.title}
        areas={props.areas}
        headerImage={props.headerImage}
      />
      <Container component="main">
        {props.children}
        </Container>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout
