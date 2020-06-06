import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactForm from '../components/shared/forms/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { graphql } from 'gatsby'
import { PRISMIC_SocialLinks } from '../types/interfaces/prismic'
import { ContactPageProps } from '../types/interfaces/contact'
import RichText from '../utils/RichTextCustom'
import createKey from '../utils/createKey'

export const query = graphql`
    query ContactPageQuery {
        prismic {
            allContacts {
                edges {
                    node {
                        title
                        subtitle
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
`

const ContactPage: React.FC<ContactPageProps> = ({
    data: {
        prismic: {
            allContacts: { edges },
        },
    },
}) => {
    const title: JSX.Element = edges[0].node.title ? (
        <div data-testid="title">
            <RichText render={edges[0].node.title} />
        </div>
    ) : (
        <div />
    )

    const subtitle: JSX.Element = edges[0].node.subtitle ? (
        <div data-testid="subtitle">
            <RichText render={edges[0].node.subtitle} />
        </div>
    ) : (
        <div />
    )

    const icons =
        edges[0].node.social_links && edges[0].node.social_links.length
            ? edges[0].node.social_links.map(
                  (s: PRISMIC_SocialLinks, i: number) => {
                      switch (s.name) {
                          case 'Address':
                          case 'Mail':
                          case 'Phone':
                              const icon =
                                  s.name === 'Mail'
                                      ? faEnvelope
                                      : s.name === 'Address'
                                      ? faMapMarkerAlt
                                      : faPhone

                              return (
                                  <div
                                      className="icon-block"
                                      key={createKey(s.name, i)}
                                      data-testid={s.name}
                                  >
                                      <FontAwesomeIcon icon={icon} size="2x" />
                                      <div className="flex flex-column">
                                          <h4 className="mt0 mb1">{s.name}</h4>
                                          {s.url ? (
                                              <a href={s.url.url}>
                                                  <small>{s.text}</small>
                                              </a>
                                          ) : (
                                              <small>{s.text}</small>
                                          )}
                                      </div>
                                  </div>
                              )

                          default:
                              return null
                      }
                  }
              )
            : null

    return (
        <Layout>
            <SEO title="Contact" />
            <div className="contact flex flex-row flex-column-md">
                <div
                    className="flex flex-center flex-column left"
                    data-testid="icon-list"
                >
                    {icons}
                </div>
                <div className="flex flex-center flex-column right p5 p3-md">
                    <div className="form-container">
                        {title}
                        {subtitle}
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default ContactPage
