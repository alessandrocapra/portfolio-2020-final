import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Typography variant="subtitle1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates alias
      laudantium iste eos debitis qui vero? Cumque deserunt qui ex, vero iste
      obcaecati adipisci minus magnam, iusto ipsa praesentium reprehenderit.
    </Typography>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image imgName="gatsby-astronaut.png" />
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image imgName="scene.png" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
