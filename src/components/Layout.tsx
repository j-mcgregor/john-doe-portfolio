import React from 'react'
import Navbar from './shared/Navbar'

import 'flexboxgrid2'
import '../stylesheets/main.scss'
import './Layout.scss'

const Layout: React.SFC = ({ children }) => {
    return (
        <>
            <Navbar brand={'John Doe'} />
            <div className="container-fluid">{children}</div>
        </>
    )
}
export default Layout
