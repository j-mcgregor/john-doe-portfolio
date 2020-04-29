/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'

import 'flexboxgrid2'
import '../stylesheets/main.scss'
import './Layout.scss'

const Layout: React.SFC<{}> = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="container-fluid">{children}</div>
        </>
    )
}
export default Layout
