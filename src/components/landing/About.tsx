import React, { useState } from 'react'
import { AboutProps } from '../../types/interfaces'

const About: React.FC<AboutProps> = ({ about, experience }) => {
    const [showAbout, setShowAbout] = useState(true)

    const handleToggleExperience = () => setShowAbout(false)
    const handleToggleAbout = () => setShowAbout(true)

    return (
        <section className="container-fluid py4 py2-md about">
            <div className="container">
                <div className="tabs">
                    <div className="tab" onClick={handleToggleAbout}>
                        About
                    </div>
                    <div className="tab" onClick={handleToggleExperience}>
                        Experience
                    </div>
                </div>
                <div className="row">
                    <section className="content col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 py4 py2-md text-justify text-left-sm">
                        {showAbout ? about : experience}
                    </section>
                </div>
            </div>
        </section>
    )
}

export default About
