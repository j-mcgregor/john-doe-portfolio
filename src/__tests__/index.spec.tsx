import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'
import { StaticQuery } from '../__mocks__/gatsby'

jest.mock('flexboxgrid2')

describe('Index', () => {
    let data
    beforeEach(() => {
        StaticQuery.mockImplementationOnce(({ render }) =>
            render({
                site: {
                    siteMetadata: {
                        title: `Default Starter`,
                    },
                },
            })
        )

        data = {
            prismic: {
                allLandings: {
                    edges: [
                        {
                            node: {
                                primary_text: [
                                    {
                                        type: 'header1',
                                        text: 'John Doe',
                                        spans: [],
                                    },
                                ],
                                secondary_text: [
                                    {
                                        type: 'header2',
                                        text: 'Developer',
                                        spans: [],
                                    },
                                ],
                                background_image: {
                                    copyright: '',
                                    dimensions: {
                                        height: 100,
                                        width: 100,
                                    },
                                    url: 'logo.png',
                                    alt: 'logo',
                                },
                                about: [
                                    {
                                        type: 'paragraph',
                                        text: 'lorem ipsum',
                                        spans: [],
                                    },
                                ],
                                experience: [
                                    {
                                        city: 'London',
                                        company: 'London Inc',
                                        date_from: '2019-01-01',
                                        date_to: '2020-01-01',
                                        description: [
                                            {
                                                type: 'paragraph',
                                                text:
                                                    'some job description here',
                                                spans: [],
                                            },
                                        ],
                                        job_title: 'Dev',
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
            file: {
                childImageSharp: {
                    fixed: {
                        height: 200,
                        width: 200,
                        base64: '/logo.png',
                        src: '/logo.png',
                        srcSet: '/logo.png',
                    },
                },
            },
        }
    })

    it('renders correctly', () => {
        const indexData = { ...data }
        const tree = renderer.create(<Index data={indexData} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('renders with no primary_text', () => {
        const indexData = {
            ...data,
            prismic: {
                allLandings: {
                    edges: [
                        {
                            node: {
                                ...data.prismic.allLandings.edges[0].node,
                                primary_text: null,
                            },
                        },
                    ],
                },
            },
        }
        const tree = renderer.create(<Index data={indexData} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('renders with no secondary_text', () => {
        const indexData = {
            ...data,
            prismic: {
                allLandings: {
                    edges: [
                        {
                            node: {
                                ...data.prismic.allLandings.edges[0].node,
                                secondary_text: null,
                            },
                        },
                    ],
                },
            },
        }
        const tree = renderer.create(<Index data={indexData} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('renders with no background_image', () => {
        const indexData = {
            ...data,
            prismic: {
                allLandings: {
                    edges: [
                        {
                            node: {
                                ...data.prismic.allLandings.edges[0].node,
                                background_image: null,
                            },
                        },
                    ],
                },
            },
        }
        const tree = renderer.create(<Index data={indexData} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('renders with no about data', () => {
        const indexData = {
            ...data,
            prismic: {
                allLandings: {
                    edges: [
                        {
                            node: {
                                ...data.prismic.allLandings.edges[0].node,
                                about: null,
                            },
                        },
                    ],
                },
            },
        }
        const tree = renderer.create(<Index data={indexData} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('renders with no experience data', () => {
        const indexData = {
            ...data,
            prismic: {
                allLandings: {
                    edges: [
                        {
                            node: {
                                ...data.prismic.allLandings.edges[0].node,
                                experience: null,
                            },
                        },
                    ],
                },
            },
        }
        const tree = renderer.create(<Index data={indexData} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
