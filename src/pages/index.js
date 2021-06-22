import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Typography, Box, Grid, Chip, Hidden } from "@material-ui/core"
import { navigate } from "gatsby-link"
import { makeStyles } from "@material-ui/core/styles"
import StyledBackgroundSection from "../components/backgroundImage"

const useStyles = makeStyles(theme => ({
  underlined: {
    borderBottom: `4px solid #B0151C`,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1b1b1b",
    padding: "4rem",
    margin: "0 5rem",
    borderRadius: "16px",
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: "#3a3a3a",
    },
    "@media (min-width:992px)": {
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 2rem",
      padding: "2rem",
    },
  },
  projectImage: {
    "@media (max-width:992px)": {
      marginBottom: "3rem",
    },
    "@media (max-width:425px)": {
      display: "none",
    },
  },
  projectContent: {
    paddingLeft: "0",
    "@media (min-width:992px)": {
      paddingLeft: "6rem",
    },
  },
  mainTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.7rem",
    },
  },
  mainDesc: {
    paddingTop: "2rem",
    maxWidth: "60rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  mastContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    padding: "5rem",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4),
    },
  },
  projectContainer: {
    marginTop: "5rem",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
    },
  },
}))

const ProjectHome = ({ title, description, tags, image, projectLink }) => {
  const classes = useStyles()
  const topicTags = tags.map(tag => (
    <Chip
      label={tag}
      style={{
        marginRight: "0.75rem",
        marginBottom: "0.75rem",
        backgroundColor: "#2f2f2f",
        borderRadius: "8px",
      }}
      key={tag}
    />
  ))

  return (
    <Grid
      item
      xs={12}
      className={classes.projectContainer}
      onClick={() =>
        navigate(
          typeof projectLink !== "undefined"
            ? projectLink
            : "project/babbelbord"
        )
      }
    >
      <Box className={classes.container}>
        <Box flexGrow={1} flexBasis="40%" className={classes.projectImage}>
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
          className={classes.projectContent}
        >
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1" style={{ marginBottom: "0.7rem" }}>
            {description}
          </Typography>
          <Box py={2}>{topicTags}</Box>
        </Box>
      </Box>
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
        <Box className={classes.mastContainer}>
          <Typography variant="h1" className={classes.mainTitle}>
            Piacere, Alessandro
          </Typography>
          <Typography variant="subtitle1" className={classes.mainDesc}>
            <span className={classes.underlined}>Frontend</span> developer with
            a strong <span className={classes.underlined}>UX</span> background.
            <br /> Ideate, research, design, test, develop, repeat.
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
          projectLink="/project/custodian"
          image="custodian_home.png"
        />
        <ProjectHome
          title="Whistleblower platform"
          description="SaaS solution to support the management of a whistleblowing solution within an organization."
          tags={["UX Design", "UI Design"]}
          projectLink="/project/whistleblower"
          image="whistleblower_home.png"
        />
        <ProjectHome
          title="Gamified respiratory exercises"
          description="A custom breath-analysing hardware coupled with a videogame to encourage children affected by Duchenne Muscular Dystrophy to improve their breathing independently, outside of therapy hours."
          tags={["UX Design", "UI Design", "React Native"]}
          projectLink="/project/master-thesis"
          image="thesis_home.png"
        />
        <ProjectHome
          title="Babbelbord"
          description="A gamified, personalized conversational system for people with mild moderate dementia and their caretakers/relatives."
          tags={["User research", "Full-stack development"]}
          projectLink="/project/babbelbord"
          image="babbelbord_home.png"
        />
        <ProjectHome
          title="Beathoven"
          description="With Beathoven, we researched new ways to allow deaf people to experience music by combining different sensory modalities such as haptics and sight. The final product consisted in a vibrating forearm glove and a VR headset."
          tags={["User research", "Full-stack development"]}
          projectLink="/project/beathoven"
          image="beathoven_home.png"
        />
        <ProjectHome
          title="Jammin"
          description="Concept for an online platform which allows musicians to find like-minded people to start a band or occasionally jam with."
          tags={["User research", "Frontend development"]}
          projectLink="/project/jammin"
          image="jammin_home.png"
        />
      </Grid>
    </Layout>
  )
}

export default IndexPage
