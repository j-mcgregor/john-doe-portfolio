import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { BlogPageProps } from '../types/interfaces/blog'
import BlogPosts from '../components/blog/BlogPosts'

export const query = graphql`
    query BlogPostsQuery {
        prismic {
            allBlog_posts {
                edges {
                    node {
                        title
                        date
                        body {
                            ... on PRISMIC_Blog_postBodyImage_with_caption {
                                primary {
                                    caption
                                    image
                                }
                                type
                            }
                            ... on PRISMIC_Blog_postBodyText {
                                primary {
                                    text
                                }
                                type
                            }
                        }
                        _meta {
                            id
                            type
                            uid
                        }
                    }
                }
            }
        }
    }
`

const BlogPage: React.FC<BlogPageProps> = ({
    data: {
        prismic: {
            allBlog_posts: { edges },
        },
    },
}) => {
    return (
        <Layout>
            <SEO title="Blog Post" />
            <BlogPosts posts={edges} />
        </Layout>
    )
}

export default BlogPage
