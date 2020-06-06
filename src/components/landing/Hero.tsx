import React from 'react'
import { HeroProps, StyledHeroProps } from '../../types/interfaces/shared'
import styled from 'styled-components'
import { Breakpoints } from '../../types/enums'

const StyledHero = styled.div<StyledHeroProps>`
    background: ${({ bgImageUrl }) =>
        bgImageUrl ? `url(${bgImageUrl})` : 'black'};
    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 700px;
    text-transform: uppercase;
    animation: fadeIn 0.5s ease-in;

    h3 {
        font-family: 'Abel', sans-serif;
    }

    @media screen and (max-width: ${Breakpoints.md}px) {
        height: 600px;
    }
    @media screen and (max-width: ${Breakpoints.sm}px) {
        height: 500px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const Hero: React.FC<HeroProps> = ({
    primary,
    secondary,
    logo,
    backgroundImage,
}) => {
    return (
        <StyledHero
            bgImageUrl={backgroundImage}
            className="flex flex-column flex-center"
        >
            {logo || null}
            {primary}
            {secondary}
        </StyledHero>
    )
}

export default Hero
