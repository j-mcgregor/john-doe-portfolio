import React from 'react'
import renderer from 'react-test-renderer'
import Img from 'gatsby-image'
import Hero from './Hero'

describe('Hero', () => {
    it('should render with no logo', () => {
        // Assemble
        const primary = <h2>Primary Text</h2>
        const secondary = <h3>Secondary Text</h3>
        const hero = renderer.create(
            <Hero primary={primary} secondary={secondary} />
        )
        const heroInstance = hero.toJSON()

        // Assert
        expect(heroInstance).not.toBeNull()
        if (heroInstance) {
            expect(heroInstance).toMatchSnapshot()
        }
    })

    it('should render with logo if provided', () => {
        // Assemble
        const primary = <h2>Primary Text</h2>
        const secondary = <h3>Secondary Text</h3>

        const imgData = {
            base64: 'base:image/png',
            width: 100,
            height: 100,
            src: 'logo.png',
            srcSet: 'logo.png',
        }
        const logo = <Img fixed={imgData} alt="Logo" />

        const hero = renderer.create(
            <Hero primary={primary} secondary={secondary} logo={logo} />
        )
        const heroInstance = hero.toJSON()

        // Assert
        expect(heroInstance).not.toBeNull()
        if (heroInstance) {
            expect(heroInstance).toMatchSnapshot()
        }
    })

    it('should pass down a background image if provided', () => {
        // Assemble
        const primary = <h2>Primary Text</h2>
        const secondary = <h3>Secondary Text</h3>
        const backgroundImage =
            'https://images.prismic.io/john-doe-portfolio/test.png'

        const hero = renderer.create(
            <Hero
                primary={primary}
                secondary={secondary}
                backgroundImage={backgroundImage}
            />
        )
        const heroInstance = hero.toJSON()

        // Assert
        expect(heroInstance).not.toBeNull()
        if (heroInstance) {
            expect(heroInstance).toMatchSnapshot()
        }
    })
})
