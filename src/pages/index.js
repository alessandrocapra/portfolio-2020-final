import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Typography, Box, Grid, Chip } from "@material-ui/core"

const ProjectHome = () => {
  return (
    <Grid item xs={12}>
      <Grid container spacing={4}>
        <Grid item sm={4}>
          <Image imgName="gatsby-astronaut.png" />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3">Crypto custodian app</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nam
            libero enim quasi obcaecati omnis itaque quisquam fugit voluptas
            eius. Laudantium doloremque dolore illum vel est quasi tempore qui
            maxime!
          </Typography>
          <Box py={2}>
            <Chip label="UX Design" />
            <Chip label="UI Design" />
            <Chip label="React Native" />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <Typography variant="h1">Piacere, Alessando</Typography>
      <Typography
        variant="subtitle1"
        style={{ paddingTop: "2rem", maxWidth: "60rem" }}
      >
        Front-end developer with a strong UX background.
        <br /> Ideate, research, design, develop, repeat.
      </Typography>
    </Box>
    <Grid container>
      <ProjectHome />
    </Grid>
  </Layout>
)

export default IndexPage
