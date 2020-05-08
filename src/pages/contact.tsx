import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactForm from '../components/shared/forms/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const ContactPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <div className="contact flex flex-row flex-column-md">
                <div className="flex flex-center flex-column left">
                    <div className="icon-block">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                        <div className="flex flex-column">
                            <h4 className="mt0 mb1">Address</h4>
                            <small>123 Main Street, New York City, USA</small>
                        </div>
                    </div>
                    <div className="icon-block">
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                        <div className="flex flex-column">
                            <h4 className="mt0 mb1">Phone</h4>
                            <a href="mailto:">
                                <small>+1 234 543 6789</small>
                            </a>
                        </div>
                    </div>
                    <div className="icon-block">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <div className="flex flex-column">
                            <h4 className="mt0 mb1">General Enquiries</h4>
                            <a href="mailto:">
                                <small>info@enquiries.com</small>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-center flex-column right p5 p3-md">
                    <div className="form-container">
                        <h3>Send us a message</h3>
                        <h6>And we'll get back to you ASAP</h6>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default ContactPage
