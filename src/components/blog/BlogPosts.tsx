import React from 'react'
import { BlogPostsProps } from '../../types/interfaces/blog'
import { PostItem } from './PostItem'

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
    if (!posts) return null

    return (
        <div className="blog pb7">
            <h1>Blog</h1>
            {posts.map(post => (
                <PostItem post={post.node} key={post.node._meta.id} />
            ))}
        </div>
    )
}

export default BlogPosts
