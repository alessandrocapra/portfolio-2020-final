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

const BabbelbordPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Crypto custodian app project" />
      <ProjectHeader
        headerImage={"custodian-header.png"}
        title="Crypto custodian mobile app"
        areas={["UX Design", "UI design", "React Native"]}
      />
      <Container>
        <ProjectSummary>
          A mobile application (developed in React Native) that showcases the
          capabilites of the Quantoz Nexus API. The main features include buying
          and selling 6 different cryptocurrencies, as well as swapping between
          them.
        </ProjectSummary>
        <Box py={14}>
          <Image
            imgName="custodian-showcase.png"
            style={{ overflow: "unset" }}
          />
        </Box>
        <Box py={14}>
          <Grid container spacing={6} style={{ alignItems: "center" }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2">Concept</Typography>
              <Typography variant="body1">
                This mobile app showcases the capabilities of the Quantoz Nexus
                API, and it is meant to be used installed and tried out by
                potential clients. We chose React Native as framework since we
                could support both Android and iOS with one unified codebase. My
                role in the project covered the initial requirements gathering,
                the creation of wireframes to discuss an initial version and
                improve it iteratively through several feedback sessions.
                Moreover, I created the screens and components in React Native,
                using Native Base as a UI framework to speed up development.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image
                imgName="custodian-concept.png"
                style={{ overflow: "unset" }}
                imgStyle={{
                  left: "0",
                  "@media (minWidth:425px)": { left: "15vw" },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">Requirements, wireframes and UI</Typography>
          <Typography variant="body1" component="div">
            The initial calls with the stakeholders defined the goal of the
            project: an easy-to-use mobile app that showcases the portfolio of
            fiat and crypto currencies currently owned by a customer.
            Additionally, the user must be able to purchase, sell or swap
            crypto-currencies. The initial sketch shown below provided a good
            starting point for discussion and further definition of information
            architecture and user experience design. This app showcases the
            complete workflow of a crypto custodian use case, and can be used by
            a company to kickstart their own custodian project and manage the
            compliance and operational part through the Nexus portal.
          </Typography>
        </Box>
        <Image imgName="custodian-wireframes.png" />
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">Result</Typography>
          <Typography variant="body1" component="div">
            The stakeholders approved the design after some iterative sessions
            of evaluation in <strong>Figma</strong>.Once the design got
            approved, the team discussed the implementation strategy. <br />
            <br /> The final choice fell on <strong>React Native</strong>, due
            to previous experience with the React framework and the advantage of
            a single codebase for both Android and iOS apps. I designed and
            coded components and screens with the help of a UI library for React
            Native called Native Base, which helped speeding up the UI
            development. <br />
            <br />
            The apps are currently used off-store to give demos and
            implementation ideas to clients. The Android version can be found on
            the{" "}
            <a href="https://quantoz.com/solutions/cryptocurrency-services/">
              official Quantoz website
            </a>
            , while the iOS one can be accessed through a request via
            Testflight.
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default BabbelbordPage
