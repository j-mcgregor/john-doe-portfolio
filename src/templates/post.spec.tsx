import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import PostTemplate from './post'
import { BlogPageProps } from '../types/interfaces/blog'
import * as data from '../__mocks__/data/blogPage'
import { contactPage } from '../__mocks__/data/contactPage'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

describe('PostTemplate', () => {
    let props: BlogPageProps
    beforeEach(() => {
        props = data.blogPage
    })

    it('should render with all information', () => {
        // Component renders Layout which requires Contact data
        useStaticQuery.mockImplementation(() => ({
            ...contactPage.data,
        }))
        const { baseElement } = render(<PostTemplate {...props} />)

        expect(baseElement).toMatchSnapshot()
    })
})
