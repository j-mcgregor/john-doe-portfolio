import React from 'react'
import Navbar from './shared/Navbar'

import 'flexboxgrid2/flexboxgrid2.css'
import '../stylesheets/main.scss'
import './Layout.scss'
import Footer from './shared/Footer'

const Layout: React.SFC = ({ children }) => {
    return (
        <>
            <Navbar brand={'John Doe'} />
            <div className="container-fluid">{children}</div>
            <Footer />
        </>
    )
}
export default Layout
