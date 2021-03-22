import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Box } from "@material-ui/core"

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
      <Typography variant="h1">Alessandro Capra</Typography>
      <Typography variant="subtitle1">
        Curious front-end developer, with a strong UX background and passion for
        crafting ideas
      </Typography>
    </Box>
  </Layout>
)

export default IndexPage
