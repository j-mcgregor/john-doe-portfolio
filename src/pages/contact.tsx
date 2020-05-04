import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ContactPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p3 flex flex-center flex-column">
                        <h3>Contact Us</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore nostrum similique quis dolorem
                            exercitationem enim sint, incidunt quasi numquam,
                            facere fugit quaerat et itaque perferendis optio.
                            Provident nihil praesentium facere.
                        </p>
                    </div>
                    <div className="col-md-6 p3 flex flex-center flex-column">
                        Form goes here...
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default ContactPage
