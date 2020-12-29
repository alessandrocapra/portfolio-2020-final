import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ imgName, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === imgName
  )

  if (!imageData) {
    return null
  }

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData.node.fluid}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
