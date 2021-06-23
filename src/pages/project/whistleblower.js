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

const Whistleblower = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Whistleblower" />
      <ProjectHeader
        headerImage={"whistleblower-header.png"}
        title="Whistleblower platform "
        areas={["UX Design", "UI Design"]}
      />
      <Container>
        <ProjectSummary>
          A whistleblowing platform allowing organizations to embed a workflow
          into their existing system that enables employees to freely speak up
          about misconducts.
        </ProjectSummary>
        <Image imgName="whistleblower-concept.png" />
        <Box py={14}>
          <Grid container spacing={6} style={{ alignItems: "center" }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2">Concept</Typography>
              <Typography variant="body1" component="div">
                A whistleblower is “one who reveals wrongdoing within an
                organization to the public or to those in positions of
                authority”. In order to allow employees to freely and safely
                raise their voice if they witness misbehaviors inside an
                organization, a proper platform and workflow needs to be
                embedded within the existing system.
                <br />
                <br /> My role in this project was to gather business
                requirements from stakeholders, discuss and redefine them
                through low-fidelity wireframes. Lastly, I delivered the final
                UI, focusing on the handoff to developers as well (from Sketch
                to Zeplin).
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image
                imgName="whistleblower-overview.png"
                style={{
                  overflow: "unset",
                  width: "170%",
                }}
                imgStyle={{ left: 0 }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">From wireframes to UI</Typography>
          <Typography variant="body1">
            The project consisted in 2 main parts: the SaaS owner management
            interface, which allows to define settings such as pricing and user
            management amongst other features; the second part, which is the one
            used by the organizations, includes users and permissions
            management, creation of customized form templates and many other
            features. Following the wireframe / requirement definition phase,
            the UI was created based on the previous work.
          </Typography>
        </Box>
        <Box py={14}>
          <Image imgName="whistleblower-wf-ui.png" />
        </Box>
        <Box py={14}>
          <Image
            imgName="whistleblower-wf.png"
            style={{
              overflow: "unset",
              width: "150%",
              left: "-12%",
            }}
          />
        </Box>
        <Box py={14}>
          <Image imgName="whistleblower-ui.png" />
        </Box>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">Result</Typography>
          <Typography variant="body1">
            The design was delivered through Zeplin, so that developers could
            have an overview of the screens and application workflow while being
            able to access specifics of the design (colors, typography etc.)
            that could be directly translated to code.
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default Whistleblower
