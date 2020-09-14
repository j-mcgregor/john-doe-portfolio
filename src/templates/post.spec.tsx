import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import PostTemplate, { PostBody } from './post'
import { BlogPageProps } from '../types/interfaces/blog'
import * as data from '../__mocks__/data/blogPage'
import { contactPage } from '../__mocks__/data/contactPage'
import { PRISMIC_blog_node_body } from '../types/interfaces/prismic'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

describe('PostTemplate', () => {
    let props: BlogPageProps
    beforeEach(() => {
        // Component renders Layout which requires Contact data
        useStaticQuery.mockImplementation(() => ({
            ...contactPage.data,
        }))

        props = data.blogPage
    })

    it('should render with all information', () => {
        const { baseElement } = render(<PostTemplate {...props} />)

        expect(baseElement).toMatchSnapshot()
    })
})

describe('PostBody', () => {
    let props: PRISMIC_blog_node_body
    beforeEach(() => {
        // Component renders Layout which requires Contact data
        useStaticQuery.mockImplementation(() => ({
            ...contactPage.data,
        }))

        props = data.blogBody(0)
    })

    it('should render', () => {
        const { baseElement } = render(<PostBody {...props} />)

        expect(baseElement).toMatchSnapshot()
    })

    it('should render with no title', () => {
        const newProps: PRISMIC_blog_node_body = {
            ...props,
            title: [data.makeTextType('paragraph', '')],
        }

        const { baseElement } = render(<PostBody {...newProps} />)

        expect(baseElement).toMatchSnapshot()
    })
})
