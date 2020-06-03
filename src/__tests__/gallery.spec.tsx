import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import GalleryPage from '../pages/gallery'
import { galleryPage } from '../__mocks__/data/gallery'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

describe('GalleryPage', () => {
    let props
    beforeEach(() => {
        props = galleryPage
    })

    it('should render with all information', () => {
        useStaticQuery.mockImplementation(() => props.data)
        const { baseElement } = render(<GalleryPage data={props.data} />)

        expect(baseElement).toMatchSnapshot()
    })

    it('should render an empty <div /> if no title', () => {
        const newProps = {
            data: {
                ...props.data,
                prismic: {
                    ...props.data.prismic,
                    allGallerys: {
                        edges: [
                            {
                                node: {
                                    ...props.data.prismic.allGallerys.edges[0]
                                        .node,
                                    title: null,
                                },
                            },
                        ],
                    },
                },
            },
        }
        useStaticQuery.mockImplementation(() => newProps.data)
        const { baseElement } = render(<GalleryPage data={newProps.data} />)
        expect(baseElement).toMatchSnapshot()
    })

    it('should render an empty <div /> if no description', () => {
        const newProps = {
            data: {
                ...props.data,
                prismic: {
                    ...props.data.prismic,
                    allGallerys: {
                        edges: [
                            {
                                node: {
                                    ...props.data.prismic.allGallerys.edges[0]
                                        .node,
                                    description: null,
                                },
                            },
                        ],
                    },
                },
            },
        }
        useStaticQuery.mockImplementation(() => newProps.data)
        const { baseElement } = render(<GalleryPage data={newProps.data} />)
        expect(baseElement).toMatchSnapshot()
    })
})
