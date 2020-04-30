import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/landing/Hero'
import { IndexPageProps } from '../types/interfaces'
import RichText from '../utils/RichText'
import Banner from '../components/landing/Banner'

export const query = graphql`
    query IndexPageQuery {
        prismic {
            allLandings {
                edges {
                    node {
                        primary_text
                        secondary_text
                        background_image
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
    console.log(file)
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
        </Layout>
    )
}
export default IndexPage
