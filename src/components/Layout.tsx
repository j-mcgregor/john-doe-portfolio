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
import './Layout.css'

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
            <div className="container">
                <div className="row">
                    <main>{children}</main>
                </div>
                <div className="row">
                    <div className="col-md-6">I'm on the left</div>
                    <div className="col-md-6">And I'm on the right</div>
                </div>
            </div>
            <footer className="container-fluid">
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </>
    )
}
export default Layout
