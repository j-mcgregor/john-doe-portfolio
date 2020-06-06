import React from 'react'
import { render } from '@testing-library/react'
import { times } from 'lodash'
import { Excerpt } from './Excerpt'
import { PostSummaryProps } from '../../types/interfaces/blog'
import { blogPage } from '../../__mocks__/data/blogPage'

describe('Excerpt', () => {
    let props: PostSummaryProps

    beforeEach(() => {
        props = {
            post: {
                ...blogPage.data.prismic.allBlog_posts.edges[0].node,
            },
        }
    })

    it('should render full text if less than 300 character', () => {
        const { baseElement } = render(<Excerpt {...props} />)

        expect(baseElement).toMatchSnapshot()
    })

    it('should render the 300th word as an ellipsis if over 300 characters', () => {
        const primary = {
            text: [
                {
                    type: 'paragraph',
                    text: times(120, num => `${num}`).join(' '),
                    spans: [],
                },
            ],
        }

        const newProps: PostSummaryProps = {
            post: {
                ...blogPage.data.prismic.allBlog_posts.edges[0].node,
                body: [
                    {
                        ...blogPage.data.prismic.allBlog_posts.edges[0].node
                            .body[0],
                        primary,
                    },
                ],
            },
        }

        const { baseElement } = render(<Excerpt {...newProps} />)

        const paragraph = baseElement.getElementsByTagName('p')[0].innerHTML

        expect(paragraph.slice(paragraph.length - 3)).toBe('...')
        expect(paragraph.length).toBe(300)
        expect(baseElement).toMatchSnapshot()
    })

    it('should render null if no text slice provided', () => {
        const newProps: PostSummaryProps = {
            post: {
                ...blogPage.data.prismic.allBlog_posts.edges[0].node,
                body: [
                    {
                        ...blogPage.data.prismic.allBlog_posts.edges[0].node
                            .body[0],
                        type: 'chocolate',
                    },
                ],
            },
        }

        const { baseElement } = render(<Excerpt {...newProps} />)

        const paragraph = baseElement.getElementsByTagName('p')[0]

        expect(paragraph).toBeUndefined()
        expect(baseElement).toMatchSnapshot()
    })
})
