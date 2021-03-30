import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Typography, Box, Grid, Chip } from "@material-ui/core"

const ProjectHome = ({
  title,
  description,
  tags,
  image = "gatsby-astronaut.png",
  imagePosition = "left",
}) => {
  const topicTags = tags.map(tag => (
    <Chip label={tag} color="primary" style={{ marginRight: "0.5rem" }} />
  ))

  return (
    <Grid item xs={12} style={{ marginTop: "4rem", marginTop: "4rem" }}>
      <Grid container spacing={4}>
        <Box clone order={imagePosition === "left" ? 1 : 2}>
          <Grid item sm={6}>
            <Image imgName="gatsby-astronaut.png" />
          </Grid>
        </Box>
        <Box clone order={imagePosition === "left" ? 2 : 1}>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Box py={2}>{topicTags}</Box>
          </Grid>
        </Box>
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
      <ProjectHome
        title="Crypto custodian app"
        description="Mobile application (developed in React Native) that showcases the capabilites of the Quantoz Nexus API. The main features include buying and selling 6 different cryptocurrencies, while also being able to swap between them."
        tags={["UX Design", "UI Design", "React Native"]}
        image="gatsby-astronaut.png"
      />
      <ProjectHome
        title="Whistleblower platform"
        description="SaaS solution to support the management of a whistleblowing solution within an organization."
        tags={["UX Design", "UI Design"]}
        imagePosition="right"
      />
      <ProjectHome
        title="Respiratory exercixes for children affected by Duchenne Muscular Dystrophy"
        description="A custom breath-analysing hardware coupled with a videogame to encourage children affected by Duchenne Muscular Dystrophy to improve their breathing independently, outside of therapy hours."
        tags={["UX Design", "UI Design", "React Native"]}
      />
    </Grid>
  </Layout>
)

export default IndexPage
