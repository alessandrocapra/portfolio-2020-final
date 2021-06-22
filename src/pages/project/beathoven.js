import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProjectHeader from "../../components/projectHeader"
import ProjectSummary from "../../components/projectSummary"
import { Grid, Container, Box, Typography } from "@material-ui/core"
import Image from "../../components/image"

const useStyles = makeStyles({
  centeredSection: {
    maxWidth: "45rem",
    margin: "0 auto",
  },
})

const BeathovenPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Beathoven project" />
      <ProjectHeader
        headerImage={"todo-header.png"}
        title="Beathoven"
        areas={["User research", "Prototyping", "Development"]}
      />
      <Container>
        <ProjectSummary>Work in progress</ProjectSummary>
      </Container>
    </Layout>
  )
}

export default BeathovenPage
