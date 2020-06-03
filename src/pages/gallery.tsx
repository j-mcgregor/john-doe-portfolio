import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GalleryPageProps } from '../types/interfaces'
import RichText from '../utils/RichTextCustom'
import Banner from '../components/gallery/Banner'
import GalleryContainer from '../components/gallery/GalleryContainer'

export const query = graphql`
    query GalleryPageQuery {
        prismic {
            allGallerys {
                edges {
                    node {
                        title
                        description
                        body {
                            ... on PRISMIC_GalleryBodyImage_gallery {
                                type
                                label
                                fields {
                                    alt_text
                                    image
                                    caption
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const GalleryPage: React.FC<GalleryPageProps> = ({
    data: {
        prismic: {
            allGallerys: { edges },
        },
    },
}) => {
    const title: JSX.Element = edges[0].node.title ? (
        <RichText render={edges[0].node.title} />
    ) : (
        <div />
    )

    const description: JSX.Element = edges[0].node.description ? (
        <RichText render={edges[0].node.description} />
    ) : (
        <div />
    )

    return (
        <Layout>
            <Banner>
                {title}
                {description}
            </Banner>
            <GalleryContainer images={edges[0].node.body[0].fields} />
        </Layout>
    )
}

export default GalleryPage
