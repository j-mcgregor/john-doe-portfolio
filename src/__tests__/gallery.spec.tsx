import React from 'react'
import { render } from '@testing-library/react'
import { times } from 'lodash'
import * as Gatsby from 'gatsby'
import GalleryPage from '../pages/gallery'
// import { GalleryPageProps } from '../types/interfaces'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

describe('GalleryPage', () => {
    let props
    beforeEach(() => {
        props = {
            data: {
                allFile: {
                    edges: [
                        {
                            node: {
                                name: 'grid-svg.inline',
                                id: 'grid-svg.inline',
                                publicURL: '/assets/grid-svg.inline.svg',
                            },
                        },
                        {
                            node: {
                                name: 'grid-col-svg.inline',
                                id: 'grid-col-svg.inline',
                                publicURL: '/assets/grid-col-svg.inline.svg',
                            },
                        },
                        {
                            node: {
                                name: 'grid-row-svg.inline',
                                id: 'grid-row-svg.inline',
                                publicURL: '/assets/grid-row-svg.inline.svg',
                            },
                        },
                    ],
                },
                prismic: {
                    allGallerys: {
                        edges: [
                            {
                                node: {
                                    title: [
                                        {
                                            type: 'heading3',
                                            text: 'Gallery',
                                            spans: [],
                                        },
                                    ],
                                    description: [
                                        {
                                            type: 'heading4',
                                            text: 'Look at my stuff!!',
                                            spans: [],
                                        },
                                    ],
                                    body: [
                                        {
                                            type: 'type',
                                            fields: times(10, num => ({
                                                alt_text: [
                                                    {
                                                        type: 'paragraph',
                                                        text: `alt text ${num}`,
                                                        spans: [],
                                                    },
                                                ],
                                                caption: [
                                                    {
                                                        type: 'paragraph',
                                                        text: `caption ${num}`,
                                                        spans: [],
                                                    },
                                                ],
                                                image: {
                                                    dimensions: {
                                                        width: 1000,
                                                        height: 800,
                                                    },
                                                    alt: `alt text ${num}`,
                                                    copyright: `copyright ${num}`,
                                                    url: `http://something-${num}.com`,
                                                },
                                            })),
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                    allContacts: {
                        edges: [
                            {
                                node: {
                                    social_links: [
                                        {
                                            name: 'Mail',
                                            text: 'info@johndoe.com',
                                            url: {
                                                url: 'mailto:info@johndoe.com',
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            },
        }
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
