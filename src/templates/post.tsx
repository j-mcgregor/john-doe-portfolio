import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'
import PostSlices from '../components/blog/PostSlices'
import { BlogPageProps } from '../types/interfaces/blog'
import { PRISMIC_blog_node_body } from '../types/interfaces/prismic'

// Query for the Blog Post content in Prismic
export const query = graphql`
    query BlogPostQuery($uid: String) {
        prismic {
            allBlog_posts(uid: $uid) {
                edges {
                    node {
                        _meta {
                            id
                            uid
                            type
                        }
                        title
                        date
                        body {
                            __typename
                            ... on PRISMIC_Blog_postBodyText {
                                type
                                label
                                primary {
                                    text
                                }
                            }
                            ... on PRISMIC_Blog_postBodyQuote {
                                type
                                label
                                primary {
                                    quote
                                }
                            }
                            ... on PRISMIC_Blog_postBodyImage_with_caption {
                                type
                                label
                                primary {
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

// Display the title, date, and content of the Post
export const PostBody: React.FC<PRISMIC_blog_node_body> = ({
    _meta,
    title,
    body,
}) => {
    const titled = title && title.length !== 0
    return (
        <div className="blog-page">
            <div className="container post-header">
                <div className="back">
                    <Link to="/blog">Back</Link>
                </div>
                {/* Render the edit button */}
                <h1 data-wio-id={_meta.id}>
                    {titled ? RichText.asText(title) : 'Untitled'}
                </h1>
            </div>
            {/* Go through the slices of the post and render the appropiate one */}
            <PostSlices slices={body} />
        </div>
    )
}

const Post: React.FC<BlogPageProps> = ({
    data: {
        prismic: {
            allBlog_posts: { edges },
        },
    },
}) => {
    // Define the Post content returned from Prismic
    const doc = edges ? edges.slice(0, 1).pop() : null

    if (!doc) return null

    return <Layout>{doc && <PostBody {...doc.node} />}</Layout>
}

export default Post
