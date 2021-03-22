import React from "react"
import Header from "../../components/header"
import ProjectLayout from "../../components/projectLayout"
import ProjectSection from "../../components/projectSection"
import ProjectSummary from "../../components/projectSummary"

const BabbelbordPage = () => (
  <>
    <Header isProjectPage />
    <ProjectLayout
      headerImage={"babbelbord-header.png"}
      title="Babbelbord"
      areas="User research - prototyping - development"
    >
      <ProjectSummary>
        A gamified, personalized conversational system for people with mild
        moderate dementia and their caretakers/relatives.
      </ProjectSummary>
      <ProjectSection></ProjectSection>
    </ProjectLayout>
  </>
)

export default BabbelbordPage
