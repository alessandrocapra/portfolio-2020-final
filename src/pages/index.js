import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Typography, Box, Grid, Chip } from "@material-ui/core"
import { navigate } from "gatsby-link"
import { makeStyles } from "@material-ui/core/styles"
import StyledBackgroundSection from "../components/backgroundImage"

const useStyles = makeStyles(theme => ({
  underlined: {
    borderBottom: `4px solid #B0151C`,
  },
}))

const ProjectHome = ({ title, description, tags, image }) => {
  const topicTags = tags.map(tag => (
    <Chip
      label={tag}
      style={{
        marginRight: "0.75rem",
        backgroundColor: "#DD7777",
        borderRadius: "8px",
      }}
    />
  ))

  return (
    <Grid
      item
      xs={12}
      style={{
        marginTop: "5rem",
      }}
      onClick={() => navigate("/project/babbelbord")}
    >
      <Box
        style={{
          display: "flex",
          backgroundColor: "#1b1b1b",
          padding: "4rem",
          margin: "0 5rem",
          borderRadius: "16px",
        }}
      >
        <Box flexGrow={1} flexBasis="40%">
          <Box>
            <Image imgName={image} />
          </Box>
        </Box>
        <Box
          flexGrow={3}
          flexBasis="70%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          style={{ paddingLeft: "6rem" }}
        >
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1" style={{ marginBottom: "0.7rem" }}>
            {description}
          </Typography>
          <Box py={2}>{topicTags}</Box>
        </Box>
      </Box>
      {/* </Grid> */}
      {/* </Grid> */}
    </Grid>
  )
}

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <StyledBackgroundSection
        imgName="me.png"
        style={{ backgroundPosition: "right" }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            padding: "10rem",
          }}
        >
          <Typography variant="h1">Piacere, Alessando</Typography>
          <Typography
            variant="subtitle1"
            style={{ paddingTop: "2rem", maxWidth: "60rem" }}
          >
            <span className={classes.underlined}>Frontend</span> developer with
            a strong <span className={classes.underlined}>UX</span> background.
            <br /> Ideate, research, design, develop, repeat.
          </Typography>
        </Box>
      </StyledBackgroundSection>

      <Grid container>
        <Grid
          item
          xs={12}
          style={{ margin: "10rem 5rem 0", textAlign: "center" }}
        >
          <Typography variant="h1">Projects</Typography>
        </Grid>
        <ProjectHome
          title="Crypto custodian app"
          description="Mobile application (developed in React Native) that showcases the capabilites of the Quantoz Nexus API. The main features include buying and selling 6 different cryptocurrencies, while also being able to swap between them."
          tags={["UX Design", "UI Design", "React Native"]}
          image="custodian_home.png"
        />
        <ProjectHome
          title="Whistleblower platform"
          description="SaaS solution to support the management of a whistleblowing solution within an organization."
          tags={["UX Design", "UI Design"]}
          image="whistleblower_home.png"
        />
        <ProjectHome
          title="Respiratory exercises for children affected by Duchenne Muscular Dystrophy"
          description="A custom breath-analysing hardware coupled with a videogame to encourage children affected by Duchenne Muscular Dystrophy to improve their breathing independently, outside of therapy hours."
          tags={["UX Design", "UI Design", "React Native"]}
          image="thesis_home.png"
        />
        <ProjectHome
          title="Babbelbord"
          description="A gamified, personalized conversational system for people with mild moderate dementia and their caretakers/relatives."
          tags={["User research", "Full-stack development"]}
          image="babbelbord_home.png"
        />
        <ProjectHome
          title="Beathoven"
          description="With Beathoven, we researched new ways to allow deaf people to experience music by combining different sensory modalities such as haptics and sight. The final product consisted in a vibrating forearm glove and a VR headset."
          tags={["User research", "Full-stack development"]}
          image="beathoven_home.png"
        />
        <ProjectHome
          title="Jammin"
          description="Concept for an online platform which allows musicians to find like-minded people to start a band or occasionally jam with."
          tags={["User research", "Frontend development"]}
          image="jammin_home.png"
        />
      </Grid>
    </Layout>
  )
}

export default IndexPage
