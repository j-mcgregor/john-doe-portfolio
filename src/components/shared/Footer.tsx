import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="footer">
            Reach me on
            <div className="social">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="mailto:">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="tel:+">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
            </div>
        </footer>
    )
}

export default Footer
