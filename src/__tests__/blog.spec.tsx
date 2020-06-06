import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blog from '../pages/blog'
import { BlogPageProps } from '../types/interfaces/blog'
import { blogPage } from '../__mocks__/data/blogPage'
import * as Link from '../utils/RichTextCustom/linkResolver'

describe('Blog', () => {
    let props: BlogPageProps
    beforeEach(() => (props = blogPage))

    it('should render with a post', () => {
        const { baseElement, queryByText } = render(<Blog data={props.data} />)

        const text = queryByText('Lorem ipsum dolor sit amet')
        const date = queryByText('Jan 01, 2020')

        expect(baseElement).toMatchSnapshot()
        expect(text).toBeDefined()
        expect(date).toBeDefined()
    })

    it('clicking the title should take you to the show page', () => {
        const mockLink = jest.spyOn(Link, 'linkResolver')
        const { queryByText } = render(<Blog data={props.data} />)

        const title = queryByText('First post')

        if (title) {
            fireEvent.click(title)
        }

        expect(mockLink).toHaveBeenCalledWith({
            id: '123',
            type: 'blog_post',
            uid: 'blog-1',
        })
    })
})
