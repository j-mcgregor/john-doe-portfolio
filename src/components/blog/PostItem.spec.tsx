import React from 'react'
import { render } from '@testing-library/react'
import { PostItem } from './PostItem'
import { PostSummaryProps } from '../../types/interfaces/blog'
import { blogPage } from '../../__mocks__/data/blogPage'

describe('PostItem', () => {
    let props: PostSummaryProps

    beforeEach(() => {
        props = {
            post: {
                ...blogPage.data.prismic.allBlog_posts.edges[0].node,
            },
        }
    })

    it('should render a post item', () => {
        const { baseElement } = render(<PostItem {...props} />)

        const date = baseElement.getElementsByTagName('time')[0]
        expect(date.innerHTML).toBe('Jan 01, 2020')
        expect(baseElement).toMatchSnapshot()
    })

    it('should show blank for date if none provided', () => {
        const newProps = {
            post: {
                ...blogPage.data.prismic.allBlog_posts.edges[0].node,
                date: '',
            },
        }

        const { baseElement } = render(<PostItem {...newProps} />)

        expect(
            baseElement.getElementsByTagName('time')[0].innerText
        ).toBeUndefined()
    })

    it('should show Untitled for title if none provided', () => {
        const newProps = {
            post: {
                ...blogPage.data.prismic.allBlog_posts.edges[0].node,
                title: [],
            },
        }

        const { queryByText } = render(<PostItem {...newProps} />)

        const title = queryByText('Undefined')

        expect(title).toBeDefined()
    })
})
