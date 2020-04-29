/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export interface MetaProps {
    name: string
    content: string
}

export interface SEOProps {
    description?: string
    lang?: string
    meta?: MetaProps[]
    title: string
}

const SEO: React.SFC<SEOProps> = ({
    description = '',
    lang = 'en',
    meta = [],
    title,
}) => {
    const seoQuery = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)

    let helmetTitle = ''
    let helmetDescription = ''
    let helmetAuthor = ''

    if (seoQuery && seoQuery.site) {
        helmetTitle = title || seoQuery.site.title || ''
        helmetDescription = description || seoQuery.site.description || ''
        helmetAuthor = seoQuery.site.author || ''
    }
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${helmetTitle}`}
            meta={[
                {
                    name: `description`,
                    content: helmetDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: helmetDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: helmetAuthor,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: helmetDescription,
                },
            ].concat(meta)}
        />
    )
}

export default SEO
