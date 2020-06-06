import React from 'react'
import { Link } from 'gatsby'
import { Excerpt } from './Excerpt'
import { RichText, Date } from 'prismic-reactjs'
import { linkResolver } from '../../utils/RichTextCustom/linkResolver'
import { PostSummaryProps } from '../../types/interfaces/blog'

// A summary of the Blog Post
export const PostItem: React.FC<PostSummaryProps> = ({ post }) => {
    // Store and format the blog post's publication date
    let postDate = Date(post.date)

    postDate = postDate
        ? new Intl.DateTimeFormat('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
          }).format(postDate)
        : ''

    return (
        <div className="post-summary" key={post._meta.id}>
            <h2>
                {/* We render a link to a particular post using the linkResolver for the url and its title */}
                <Link to={linkResolver(post._meta)}>
                    {RichText.asText(post.title).length !== 0
                        ? RichText.asText(post.title)
                        : 'Untitled'}
                </Link>
            </h2>
            <p className="blog-post-meta">
                <time>{postDate}</time>
            </p>
            {/* Renders a small preview of the post's text */}
            <Excerpt post={post} />
        </div>
    )
}
