import React from 'react'
import { PRISMIC_SocialLinks } from '../../types/interfaces'
import { useStaticQuery, graphql } from 'gatsby'
import { createLink } from '../../utils/createLinkTag'

export interface FooterProps {
    socialLinks: PRISMIC_SocialLinks[]
}

const Footer: React.FC = () => {
    const data = useStaticQuery(graphql`
        {
            prismic {
                allContacts {
                    edges {
                        node {
                            social_links {
                                name
                                text
                                url {
                                    ... on PRISMIC__ExternalLink {
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const links =
        data && data.prismic.allContacts.edges
            ? data.prismic.allContacts.edges[0].node.social_links
                  .map((link: PRISMIC_SocialLinks) => {
                      const url = link.url ? link.url.url : ''
                      switch (link.name) {
                          case 'Facebook':
                          case 'LinkedIn':
                              return createLink(link.name, url, true)
                          case 'Mail':
                          case 'Phone':
                              return createLink(link.name, url)
                          default:
                              return
                      }
                  })
                  .filter((link: HTMLAnchorElement) => link)
            : []

    return (
        <footer className="footer">
            Reach me on
            <div className="social">{links}</div>
        </footer>
    )
}

export default Footer
