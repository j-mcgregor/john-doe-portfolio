import React from 'react'
import { HeroProps, StyledHeroProps } from '../../types/interfaces'
import styled from 'styled-components'

const StyledHero = styled.div<StyledHeroProps>`
    background: ${({ bgImageUrl }) =>
        bgImageUrl ? `url(${bgImageUrl})` : 'black'};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 700px;
    text-transform: uppercase;
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
            className="flex flex-column flex-center p10"
        >
            {logo || null}
            {primary}
            {secondary}
        </StyledHero>
    )
}

export default Hero
