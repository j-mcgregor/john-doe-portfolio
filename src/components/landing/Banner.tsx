import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faReact,
    faJs,
    faSass,
    faDocker,
    faGithubAlt,
} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { Breakpoints } from '../../types/enums'

const StyledBanner = styled.div`
    svg {
        font-size: 3.5em;
    }

    @media screen and (max-width: ${Breakpoints.md}px) {
        svg {
            font-size: 3em;
            margin-left: 0.8em;
            margin-right: 0.8em;
        }
    }
    @media screen and (max-width: ${Breakpoints.sm}px) {
        svg {
            font-size: 2em;
            margin-left: 0.5em;
            margin-right: 0.5em;
        }
    }
`

const Banner = () => {
    return (
        <StyledBanner className="p3">
            <div className="container flex flex-row flex-center">
                <FontAwesomeIcon icon={faJs} className="mx1" />
                <FontAwesomeIcon icon={faReact} className="mx1" />
                <FontAwesomeIcon icon={faSass} className="mx1" />
                <FontAwesomeIcon icon={faDocker} className="mx1" />
                <FontAwesomeIcon icon={faGithubAlt} className="mx1" />
            </div>
        </StyledBanner>
    )
}

export default Banner
