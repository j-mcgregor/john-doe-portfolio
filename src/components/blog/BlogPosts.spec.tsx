import React from 'react'
import { render } from '@testing-library/react'
import BlogPosts from './BlogPosts'
import { BlogPostsProps } from '../../types/interfaces/blog'
import { blogPage } from '../../__mocks__/data/blogPage'

describe('BlogPosts', () => {
    let props: BlogPostsProps

    beforeEach(() => {
        props = {
            posts: blogPage.data.prismic.allBlog_posts.edges,
        }
    })

    it('should render with a list of posts', () => {
        const { baseElement } = render(<BlogPosts {...props} />)

        expect(baseElement).toMatchSnapshot()
    })

    it('should render nothing if no lists', () => {
        const { baseElement } = render(<BlogPosts posts={undefined} />)

        expect(baseElement).toMatchSnapshot()
    })
})
