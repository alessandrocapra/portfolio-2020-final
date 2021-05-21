import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProjectHeader from "../../components/projectHeader"
import ProjectSummary from "../../components/projectSummary"
import { Grid, Container, Box, Typography } from "@material-ui/core"
import Image from "../../components/image"

const useStyles = makeStyles(theme => ({
  centeredSection: {
    maxWidth: "65ch",
    margin: "0 auto",
  },
  leftSection: {
    maxWidth: "65ch",
  },
  rightSection: {
    maxWidth: "65ch",
    margin: "0 0 0 auto",
  },
  sectionTitle: {
    color: theme.palette.secondary.light,
  },
}))

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
                context of use, I used two different methods to gather data:•
                semi-structured interviews, which consist in following a script
                but allowing to diverge if interesting insights arise;•
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
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">Parents</Typography>
          <Typography variant="body1" component="div">
            <ul>
              <li>
                lack of motivation: given the children’s busy schedule, not much
                effort is put in the exercises that should be carried out at
                home.
              </li>
              <li>
                autonomy: children are dependent on their parents for most
                tasks. However, videogames offer them a sense of control over a
                virtual world.
              </li>
              <li>
                preference for group therapy: children seem more engaged when
                they exercise with others.
              </li>
              <li>
                hide therapy behind a game: having the children forget that they
                are doing therapy while playing a game seems to enhance their
                motivation.
              </li>
              <br />I have summarised the insights gathered on the stakeholders
              into three personas (refer to the thesis for the full description)
            </ul>
          </Typography>
        </Box>
        <Box py={14} className={classes.rightSection}>
          <Typography variant="h2">Parents</Typography>
          <Typography variant="body1" component="div">
            <ul>
              <li>
                lack of motivation: given the children’s busy schedule, not much
                effort is put in the exercises that should be carried out at
                home.
              </li>
              <li>
                autonomy: children are dependent on their parents for most
                tasks. However, videogames offer them a sense of control over a
                virtual world.
              </li>
              <li>
                preference for group therapy: children seem more engaged when
                they exercise with others.
              </li>
              <li>
                hide therapy behind a game: having the children forget that they
                are doing therapy while playing a game seems to enhance their
                motivation.
              </li>
              <br />I have summarised the insights gathered on the stakeholders
              into three personas (refer to the thesis for the full description)
            </ul>
          </Typography>
        </Box>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">Conceptual design</Typography>
          <Typography variant="body1" component="div">
            On an abstract level, the system works as follows:
            <ol>
              <li>
                When the child inhales or exhales through the breathing sensor,
                the data is processed and mapped to a range of values by the
                microcontroller embedded in the custom hardware device. These
                values are then sent over WiFi to a SocketIO server in
                real-time, which also broadcasts it to the connected clients
                (the browser where the game is played).
              </li>
              <li>
                Depending on the information received by the server, the game
                character will move up or down according to the breathing
                pattern (inhalation / exhalation) and its intensity (stronger =
                faster movement).
              </li>
              <li>
                Once the level has been completed, the ranking is shown to offer
                a comparison with other players (gamification element). All
                scores are saved on the database
              </li>
            </ol>
            <br />
            Making the game accessible to all the children means also to offer
            calibration, which adapts the game controls to every child’s
            breathing functionality. This feature is offered and can be carried
            out before any game starts, also saving this data on the database to
            allow further examination by the therapist.
          </Typography>
        </Box>
        <Box py={14}>
          <Image imgName="master-thesis-conceptual.png" />
        </Box>
        <Box py={14}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2">Hardware</Typography>
              <Typography variant="body1">
                Several sensors allow to measure breath, such as infrared
                sensors to sense chest movements, wind sensors, anemometers and
                many others discussed in my thesis. The requirements for the
                project included the measurement of direction, strenght and
                duration of the breathing pattern. Eventually, the choice fell
                on the MPXV7002DP differential pressure sensor, given its
                reliability, speed and fulfilment of all the aforementioned
                requirements.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image imgName="master-thesis-schema.png" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image imgName="master-thesis-circuit.png" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image imgName="master-thesis-casing.png" />
            </Grid>
          </Grid>
        </Box>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">Game design</Typography>
          <Typography variant="body1">
            Nowadays many video-game genres exist, and several were considered
            as candidates for this project. Given the limited resources
            available, the feedback from the therapists and the parents helped
            to steer the choice towards a 2D platformer. The reasons behind this
            choice consisted on the children being already familiar with this
            type of games (according to parents and therapists). <br />
            <br />A training mode is offered before the game starts, in order to
            practice with the controls and have some additional tips on when the
            player should breath in and out without affecting the player’s
            ranking.
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Image imgName="master-thesis-training.png" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image imgName="master-thesis-ranking.png" />
          </Grid>
        </Grid>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">Testing</Typography>
          <Typography variant="body1">
            The testing of the final prototype involved both children and their
            therapists. The latter would assist the former and give feedback on
            the usability on the interface and their impressions on how the
            children reacted to the game. The children’s feedback was
            instrumental in evaluating the game design and controls. <br />
            <br />
            In total, 4 children and 3 therapists participated. The testing
            sessions were filmed for further analysis, since I was both the
            moderator and the note taker. <strong>Observations</strong> were
            fundamental in collecting information based on the actual behavior
            of the participants. Moreover,{" "}
            <strong>semi-structured interviews</strong> were utilized to
            evaluate the children impressions at the end of the game, while the
            therapists were asked to give their opinion on the game and how it
            could be further improved.
          </Typography>
        </Box>
        <Box py={14}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2">Results</Typography>
              <Typography variant="body1">
                <strong className={classes.sectionTitle}>
                  Usability issues
                </strong>
                <br />
                Nowadays many video-game genres exist, and several were
                considered as candidates for this project. Given the limited
                resources available, the feedback from the therapists and the
                parents helped to steer the choice towards a 2D platformer. The
                reasons behind this choice consisted on the children being
                already familiar with this type of games (according to parents
                and therapists). <br />
                <br />A training mode is offered before the game starts, in
                order to practice with the controls and have some additional
                tips on when the player should breath in and out without
                affecting the player’s ranking.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <Typography variant="h2">
                  <br />
                </Typography>
                <strong className={classes.sectionTitle}>
                  Gamification elements
                </strong>
                <br />
                The testing session also confirmed the value of including
                gamification elements within the game. The ranking system was
                highly effective, since many participants wanted to play another
                game once they saw that their friends previously reached a
                higher score. This, in return, translates to a increased
                retention and engagement with the game and, consequently, with
                the breathing exercises.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <strong className={classes.sectionTitle}>
                  Level and hardware design
                </strong>
                <br />
                The game was quite difficult to play according to the children.
                The main issue seemed to be the close proximity of breathing
                actions to control the game character, therefore making the
                participants pretty tired. The therapists suggested to insert
                more pauses between the actions required to control the game to
                avoid fatigue.
                <br />
                <br /> Moreover, the filter attached to the tube where the user
                needs to exhale / inhale could be redesigned for a more
                comfortable gaming experience. The issue consists in the
                participants being unable to use their hands to hold the tube,
                therefore requiring them to get assistance from the therapist /
                parent or to extensively use their mouth muscles to hold the
                filter. An example of solution would be a flexible tube that can
                hold its position, something similar to a desk lamp with an
                extensible arm.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image imgName="master-thesis-settings.png" />
            </Grid>
          </Grid>
        </Box>
        <Box py={14} className={classes.centeredSection}>
          <Typography variant="h2">Learnings</Typography>
          <Typography variant="body1">
            The most notable learning experience in this project consisted in
            realizing how important an iterative process is. Since the whole
            project was researched, ideated and developed in roughly 4 months,
            some iterations had to be skipped to respect the given timeframe.
            The usability issues that emerged, regarding game design, user
            interface and hardware design, could have been spotted way earlier
            with low-fidelity versions and therefore be fixed along the way.
            <br />
            <br />
            Another point of reflection regards the power of user research, in
            particular the qualitative part. Observations were very instrumental
            in revealing potential pitfalls, which were not communicated by the
            participants themselves during the testing phase. Being an emphatic
            and focused observer allows to gather insights that can steer a
            project to the right direction. Interviews are also a very powerful
            mean, especially in the initial divergent phase of exploration.
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default MasterThesisPage
