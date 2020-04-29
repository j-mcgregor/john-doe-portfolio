import { Link } from 'gatsby'
import React from 'react'

interface HeaderProps {
    siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle = '' }) => (
    <header>
        <Link to="/">{siteTitle}</Link>
    </header>
)

export default Header
