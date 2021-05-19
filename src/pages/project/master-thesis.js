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
  leftSection: {
    maxWidth: "65ch",
  },
})

const MasterThesisPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Gamified respiratory exercises project" />
      <ProjectHeader
        headerImage={"master-thesis-header.png"}
        title="Gamified respiratory exercises"
        areas={["UX Design", "Game design", "Hardware", "Development"]}
      />
      <Container>
        <ProjectSummary>
          A custom breath-analysing hardware coupled with a videogame to
          encourage children affected by Duchenne Muscular Dystrophy to improve
          their breathing independently, outside of therapy hours.
        </ProjectSummary>
        <Box py={14} className={classes.leftSection}>
          <Typography variant="h2">The concept</Typography>
          <Typography variant="body1">
            Children affected by Duchenne Muscular Dystrophy need to constantly
            exercise the general muscle functionality through several physical
            activities, such as swimming and cycling. In the latest stage of the
            disease the heart and the lungs also start unfortunately to be
            affected. Especially in this advanced stage, supplementary breathing
            exercises are crucial to keep the current breathing levels. My
            Master’s thesis focused on this goal, aiming to offer a solution to
            increase the engagement in independent breathing exercises outside
            therapy hours. The full thesis can be found in the{" "}
            <a href="http://purl.utwente.nl/essays/76171" target="_blank">
              University of Twente theses repository
            </a>
            .
          </Typography>
        </Box>
        <Box py={14}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Image imgName="master-thesis-research.png" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2">Research</Typography>
              <Typography variant="body1" component="div">
                The main stakeholders involved in this project were:
                <ul>
                  <li>
                    children affected by Duchenne Muscular Dystrophy (DMD);
                  </li>
                  <li>parents of the aforementioned children;</li>
                  <li>
                    therapists of the Roessingh Revalidatie Centrum in Enschede,
                    the Netherlands
                  </li>
                </ul>
                <br />
              </Typography>
              <Typography variant="body1">
                To get a deeper understanding about the user behaviors and the
                context of use, I used two different methods to gather data: •
                semi-structured interviews, which consist in following a script
                but allowing to diverge if interesting insights arise; •
                observations, to see the real user behavior (many times what the
                people say do not match what they do).
              </Typography>
              <Typography variant="body1">
                The recordings of the interviews were transcribed to ease the
                process of thematic analysis.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box py={14} className={classes.leftSection}>
          <Typography variant="h2">Users and stakeholders</Typography>
          <Typography variant="body1" component="div">
            <strong>Therapists:</strong>
            <br />
            <ul>
              <li>
                home training is ideal: safe without therapist assistance,
                gamification as essential element for retention
              </li>
              <li>children are busy, motivation to exercise at home is low</li>
              <li>
                therapists need control over the therapy: weekly planning of
                exercises, ability to change settings to keep children
                challenged and calibration of breath function.
              </li>
              <li>
                social gaming is important: ability to play with friends online
                is highly desirable.
              </li>
              <li>
                add features that are missing in similar products, for instance
                saving calibration data to see the performance over time.
              </li>
            </ul>
          </Typography>
        </Box>
        <Box py={14}>
          <Grid
            container
            spacing={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" component="div">
                <strong>Prototyping</strong>
                <ul>
                  <li>evaluation of card games with similar purpose</li>
                  <li>
                    low-fidelity prototype: the goal was to quickly develop a
                    rough version of the final system to cheaply test our
                    assumptions and pivot if the testing failed. Used a first
                    set of low-fi cards to play with the elderly and see the
                    reactions, wizard of oz technique to mimic the system
                    behavior. Following phases were with high-fid versions
                  </li>
                  <li>
                    evaluation: with low-fi prototype, test with healthy elderly
                    due to constraints in testing with people with dementia.
                    Follow a task list, think aloud
                  </li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image
                imgName="babbelbord_prototyping.png"
                style={{ overflow: "unset" }}
                imgStyle={{
                  left: "0",
                  "@media (minWidth:425px)": { left: "15vw" },
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box py={14}>
          <Image imgName="babbelbord_iterations.png" />
        </Box>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">Testing</Typography>
          <Typography variant="body1" component="div">
            <ul>
              <li>
                Observations: number of frowns, smiles, number of questions
                answered by patients
              </li>
              <li>
                4 semi-structured interviews: a relative of patients with
                dementia, two professional caregivers and an expert working in
                care centres who organizes activities for them. Different
                abstract categories emerged:
              </li>
              <ul>
                <li>Living environment (context)</li>
                <li>Interaction between other patients/caregivers/relatives</li>
                <li>Characteristics of disease (medical)</li>
                <li>Emotional perception (patient)</li>
                <li>Behaviour (patient)</li>
                <li>Interest (patient)</li>
                <li>Relation/job (caregiver)</li>
                <li>Relatives’ emotional connection to the patient</li>
                <li>Feedback on the prototype</li>
                <li>Purpose of the game</li>
                <li>Communication techniques (caregivers/expert)</li>
                <li>Interaction between technology and patients</li>
              </ul>
            </ul>
          </Typography>
        </Box>
        <Image
          imgName="babbelbord_testing.png"
          style={{ width: "140%", left: "-12%" }}
        />
        <Box py={14}>
          <Image imgName="babbelbord_final.png" />
        </Box>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">The result</Typography>
          <Typography variant="body1" component="div">
            <ul>
              <li>
                given limited cognitive abilities, removing many gamified
                elements to simplify. Revising winning mechanism from
                collectiong cards to reach points could be easier, according to
                the person organising the activites at the revalidation centre.
              </li>
              <li>
                some remarks on the dimension and robustness of the materials.
                For instance, we were using a normal die for testing purposes,
                but different interviewees argued that it was too small to be
                handled properly by patients. The same goes for game elements,
                such as the board itself and the squares that compose it: they
                should be bigger in order to be easily understood and handled by
                the players.
              </li>
              <li>
                formulation of the questions that should trigger memories.
                Indeed, some of them are quite complex and long, making it
                difficult for the patients to process properly. Therefore, we
                will have to rephrase them in order to be shorter, avoiding
                using general terms such as “childhood” but being more specific
                by providing a range age.
              </li>
            </ul>
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default MasterThesisPage
