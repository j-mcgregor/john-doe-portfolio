import React from 'react'
import { render } from '@testing-library/react'
import Contact from '../pages/contact'
import { PRISMIC_SocialLinks } from '../types/interfaces/prismic'
import { ContactPageProps } from '../types/interfaces/contact'
import { contactPage } from '../__mocks__/data/contactPage'

describe('Contact', () => {
    let props: ContactPageProps
    beforeEach(() => (props = contactPage))

    it('should render with no icons if none provided', () => {
        const contactData = { ...props.data }
        const { baseElement, getByTestId } = render(
            <Contact data={contactData} />
        )

        const title = getByTestId('title')
        const subtitle = getByTestId('subtitle')

        if (title.firstChild) {
            expect(title.firstChild.textContent).toBe('Contact Us')
        }
        if (subtitle.firstChild) {
            expect(subtitle.firstChild.textContent).toBe('Leave a message')
        }

        expect(baseElement).toMatchSnapshot()
    })

    it('should render with no title if none provided', () => {
        // Assemble
        const newProps: ContactPageProps = {
            data: {
                prismic: {
                    allContacts: {
                        edges: [
                            {
                                node: {
                                    ...props.data.prismic.allContacts.edges[0]
                                        .node,
                                    title: null,
                                },
                            },
                        ],
                    },
                },
            },
        }

        const { baseElement, queryByTestId } = render(<Contact {...newProps} />)

        const title = queryByTestId('title')

        // Assert
        expect(title).toBeNull()
        expect(baseElement).toMatchSnapshot()
    })

    it('should render with no subtitle if none provided', () => {
        // Assemble
        const newProps: ContactPageProps = {
            data: {
                prismic: {
                    allContacts: {
                        edges: [
                            {
                                node: {
                                    ...props.data.prismic.allContacts.edges[0]
                                        .node,
                                    subtitle: null,
                                },
                            },
                        ],
                    },
                },
            },
        }

        const { baseElement, queryByTestId } = render(<Contact {...newProps} />)

        const subtitle = queryByTestId('subtitle')

        // Assert
        expect(subtitle).toBeNull()
        expect(baseElement).toMatchSnapshot()
    })

    it('should render an Address block', () => {
        // ASSEMBLE
        const newSocialLinks: PRISMIC_SocialLinks[] = [
            {
                name: 'Address',
                text: '123 Main Street',
                url: null,
            },
        ]

        const newProps: ContactPageProps = {
            data: {
                prismic: {
                    allContacts: {
                        edges: [
                            {
                                node: {
                                    ...props.data.prismic.allContacts.edges[0]
                                        .node,
                                    social_links: newSocialLinks,
                                },
                            },
                        ],
                    },
                },
            },
        }

        const { baseElement, getByTestId } = render(<Contact {...newProps} />)

        const address = getByTestId('Address')
        expect(address).not.toBeNull()
        expect(baseElement).toMatchSnapshot()
    })

    it('should render a Mail block', () => {
        // ASSEMBLE
        const newSocialLinks: PRISMIC_SocialLinks[] = [
            {
                name: 'Mail',
                text: 'abc@123.com',
                url: {
                    url: 'mailto:abc@123.com',
                },
            },
        ]

        const newProps: ContactPageProps = {
            data: {
                prismic: {
                    allContacts: {
                        edges: [
                            {
                                node: {
                                    ...props.data.prismic.allContacts.edges[0]
                                        .node,
                                    social_links: newSocialLinks,
                                },
                            },
                        ],
                    },
                },
            },
        }

        const { baseElement, getByTestId } = render(<Contact {...newProps} />)

        const mail = getByTestId('Mail')
        expect(mail).not.toBeNull()
        expect(baseElement).toMatchSnapshot()
    })

    it('should render a Phone block', () => {
        // ASSEMBLE
        const newSocialLinks: PRISMIC_SocialLinks[] = [
            {
                name: 'Phone',
                text: '+1231234456',
                url: {
                    url: 'tel:+1231234456',
                },
            },
        ]

        const newProps: ContactPageProps = {
            data: {
                prismic: {
                    allContacts: {
                        edges: [
                            {
                                node: {
                                    ...props.data.prismic.allContacts.edges[0]
                                        .node,
                                    social_links: newSocialLinks,
                                },
                            },
                        ],
                    },
                },
            },
        }

        const { baseElement, getByTestId } = render(<Contact {...newProps} />)

        const phone = getByTestId('Phone')
        expect(phone).not.toBeNull()
        expect(baseElement).toMatchSnapshot()
    })

    it('should render nothing if link name isnt Address, Mail or Phone', () => {
        // ASSEMBLE
        const newSocialLinks: PRISMIC_SocialLinks[] = [
            {
                name: 'Batman Symbol',
                text: 'Im Batman',
                url: {
                    url: 'notBatman@wayneindustries.com',
                },
            },
        ]

        const newProps: ContactPageProps = {
            data: {
                prismic: {
                    allContacts: {
                        edges: [
                            {
                                node: {
                                    ...props.data.prismic.allContacts.edges[0]
                                        .node,
                                    social_links: newSocialLinks,
                                },
                            },
                        ],
                    },
                },
            },
        }

        const { baseElement, getByTestId } = render(<Contact {...newProps} />)

        const icons = getByTestId('icon-list')
        expect(icons.children.length).toBe(0)
        expect(baseElement).toMatchSnapshot()
    })

    it('should render nothing if social_links is invalid', () => {
        // ASSEMBLE
        const newSocialLinks = []

        const newProps: ContactPageProps = {
            data: {
                prismic: {
                    allContacts: {
                        edges: [
                            {
                                node: {
                                    ...props.data.prismic.allContacts.edges[0]
                                        .node,
                                    social_links: newSocialLinks,
                                },
                            },
                        ],
                    },
                },
            },
        }

        const { baseElement, getByTestId } = render(<Contact {...newProps} />)

        const icons = getByTestId('icon-list')
        expect(icons.children.length).toBe(0)
        expect(baseElement).toMatchSnapshot()
    })
})
