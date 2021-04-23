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
      <SEO title="Babbelbord project" />
      <ProjectHeader
        headerImage={"babbelbord-header.png"}
        title="Babbelbord"
        areas={["User research", "Prototyping", "Development"]}
      />
      <Container>
        <ProjectSummary>
          A gamified, personalized conversational system for people with mild
          moderate dementia and their caretakers/relatives.
        </ProjectSummary>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">The concept</Typography>
          <Typography variant="body1">
            Dementia is a disease that greatly affects the patient’s mental
            wellbeing as well as his/her relatives’. To tackle this issue, we
            developed a prototype targeting elderly with mild-moderate dementia
            to provide a technology-enhanced board game which allows narrative
            reminiscence through a personalized gaming experience. The end goal
            was to develop a product that would help people affected with
            dementia to reminiscence past memories and reconnect with their
            relatives.
          </Typography>
        </Box>
        <Box py={14}>
          <Typography variant="h2">Research</Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" component="div">
                <strong>Stakeholders</strong>
                <ul>
                  <li>Relatives from Dementia patients</li>
                  <li>Caretakers from Bruggerbosch (Enschede, NL)</li>
                  <li>People affected by dementia</li>
                </ul>
                <br />
              </Typography>
              <Typography variant="body1">
                <strong>Market analysis</strong>
                <br />
                Existing non-pharmaceutical solutions like life story books,
                online versions which can embed sounds, images and videos. We
                try to investigate a new solution to explore this approach even
                further, by also embedding gamification elements
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <strong>Methods</strong>
                <br />
                observations on-site (difficult to communicate with dementia
                patients): understanding of environment and social interactions.
                Interviews with healthy elderly, caregivers and relatives.
              </Typography>
              <br />
              <br />
              <Typography variant="body1" component="div">
                <strong>Iterative prototyping</strong>
                <ul>
                  <li>
                    vision (structured brainstorming sessions to produce a lot
                    of ideas and then combine them), prototype, evaluation.
                  </li>
                  <li>
                    First iteration: memory card game only, with wizard of OZ
                    testing
                  </li>
                  <li>
                    Second iteration: simple paper prototype, similar to final
                    solution
                  </li>
                  <li>
                    Third iteration: Added cards to collect as points, plus
                    special squares with different meanings. A/B testing to see
                    which interfcae was clearer to use for the caregiver -
                    Fourth iteration: final version of prototype
                  </li>
                </ul>
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Image
          imgName="babbelbord_brainstorming.png"
          style={{ overflow: "unset" }}
          imgStyle={{ left: "-20vw" }}
        />
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

export default BabbelbordPage
