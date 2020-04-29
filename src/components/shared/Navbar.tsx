import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { NavbarProps } from '../../types/interfaces'
import Img from 'gatsby-image'

const Navbar: React.FC<NavbarProps> = ({ brand }) => {
    const data = useStaticQuery(graphql`
        {
            file(
                sourceInstanceName: { eq: "images" }
                relativePath: { eq: "logo.png" }
            ) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        base64
                        width
                        height
                        src
                        srcSet
                    }
                }
            }
        }
    `)

    const logo =
        data && data.file && data.file.childImageSharp.fixed ? (
            <Img fixed={data.file.childImageSharp.fixed} alt="Logo" />
        ) : (
            brand
        )

    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                {logo}
            </Link>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
