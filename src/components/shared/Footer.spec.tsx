import React from 'react'
import renderer from 'react-test-renderer'
import * as Gatsby from 'gatsby'
import Footer from './Footer'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

describe('Footer', () => {
    const response = {
        prismic: {
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
                                {
                                    name: 'Phone',
                                    text: '+12345678900',
                                    url: {
                                        url: 'tel:+12345678900',
                                    },
                                },
                                {
                                    name: 'LinkedIn',
                                    text: null,
                                    url: {
                                        url: 'https://linkedin.com',
                                    },
                                },
                                {
                                    name: 'Facebook',
                                    text: null,
                                    url: {
                                        url: 'https://facebook.com',
                                    },
                                },
                                {
                                    name: 'Twitter',
                                    text: null,
                                    url: {
                                        url: 'https://twitter.com',
                                    },
                                },
                                {
                                    name: 'Address',
                                    text: '123 Main Street, New York, USA',
                                    url: null,
                                },
                            ],
                        },
                    },
                ],
            },
        },
    }
    it('should render', () => {
        useStaticQuery.mockImplementation(() => response)
        const nav = renderer.create(<Footer />)
        const navInstance = nav.toJSON()

        expect(navInstance).not.toBeNull()
        if (navInstance) {
            expect(navInstance.type).toBe('footer')
            expect(navInstance.props).toEqual({ className: 'footer' })
            expect(navInstance).toMatchSnapshot()
        }
    })
})
