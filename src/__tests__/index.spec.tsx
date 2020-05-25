import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'
import { StaticQuery } from '../__mocks__/gatsby'
import { indexPage } from '../__mocks__/data/indexPage'

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

        data = indexPage
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
