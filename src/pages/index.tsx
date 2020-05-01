import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/landing/Hero'
import { IndexPageProps, PRISMIC_ExperienceType } from '../types/interfaces'
import RichText from '../utils/RichTextCustom'
import createKey from '../utils/createKey'
import Banner from '../components/landing/Banner'
import About from '../components/landing/About'
import Card from '../components/shared/Card'

export const query = graphql`
    query IndexPageQuery {
        prismic {
            allLandings {
                edges {
                    node {
                        primary_text
                        secondary_text
                        background_image
                        about
                        experience {
                            present
                            job_title
                            description
                            date_to
                            date_from
                            company
                            city
                        }
                    }
                }
            }
        }
        file(
            sourceInstanceName: { eq: "images" }
            relativePath: { eq: "logo.png" }
        ) {
            childImageSharp {
                fixed(width: 300, height: 300) {
                    base64
                    width
                    height
                    src
                    srcSet
                }
            }
        }
    }
`

const IndexPage: React.FC<IndexPageProps> = ({
    data: {
        prismic: {
            allLandings: { edges },
        },
        file,
    },
}) => {
    const primaryText: JSX.Element = edges[0].node.primary_text ? (
        <RichText render={edges[0].node.primary_text} />
    ) : (
        <div />
    )

    const secondaryText: JSX.Element = edges[0].node.secondary_text ? (
        <RichText render={edges[0].node.secondary_text} />
    ) : (
        <div />
    )

    const backgroundImage: string = edges[0].node.background_image
        ? edges[0].node.background_image.url
        : ''

    const logo = file && file.childImageSharp.fixed && (
        <Img fixed={file.childImageSharp.fixed} alt="Logo" />
    )

    const about: JSX.Element = edges[0].node.about ? (
        <RichText render={edges[0].node.about} />
    ) : (
        <div />
    )

    const experience: JSX.Element[] = edges[0].node.experience
        ? edges[0].node.experience.map(
              (exp: PRISMIC_ExperienceType, i: number) => (
                  <Card
                      item={exp}
                      key={createKey([exp.job_title, exp.company], i)}
                  />
              )
          )
        : [<div key="default-null" />]

    return (
        <Layout>
            <SEO title="Home" />
            <Hero
                primary={primaryText}
                secondary={secondaryText}
                logo={logo}
                backgroundImage={backgroundImage}
            />
            <Banner />
            <About about={about} experience={experience} />
        </Layout>
    )
}
export default IndexPage
