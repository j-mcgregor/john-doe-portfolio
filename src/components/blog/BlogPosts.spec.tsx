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

    // it('should render the 300th word as an ellipsis if over 300 characters', () => {
    //     const primary = {
    //         text: [
    //             {
    //                 type: 'paragraph',
    //                 text: times(120, num => `${num}`).join(' '),
    //                 spans: [],
    //             },
    //         ],
    //     }

    //     const newProps: BlogPostsProps = {
    //         posts: {
    //             ...blogPage.data.prismic.allBlog_posts.edges
    //         },
    //     }

    //     const { baseElement } = render(<BlogPosts {...newProps} />)

    //     const paragraph = baseElement.getElementsByTagName('p')[0].innerHTML

    //     expect(paragraph.slice(paragraph.length - 3)).toBe('...')
    //     expect(paragraph.length).toBe(300)
    //     expect(baseElement).toMatchSnapshot()
    // })

    // it('should render null if no text slice provided', () => {
    // })
})
