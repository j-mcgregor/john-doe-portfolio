import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GalleryPageProps } from '../types/interfaces'

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
    console.log(edges[0].node.body[0].fields)
    return (
        <Layout>
            <h1>Gallery</h1>
        </Layout>
    )
}

export default GalleryPage
