import React from 'react'
import renderer from 'react-test-renderer'
import { render, cleanup } from '@testing-library/react'
import Img from 'gatsby-image'
import Hero from './Hero'

describe('Hero', () => {
    let primary: JSX.Element
    let secondary: JSX.Element

    beforeEach(() => {
        primary = <h2>Primary Text</h2>
        secondary = <h3>Secondary Text</h3>
    })

    afterEach(cleanup)

    it('should render with no logo', () => {
        // Assemble
        const hero = renderer.create(
            <Hero primary={primary} secondary={secondary} />
        )
        const heroInstance = hero.root

        // Assert
        expect(heroInstance).not.toBeNull()
        expect(heroInstance.findByType('h2').children).toEqual(['Primary Text'])
        expect(heroInstance.findByType('h3').children).toEqual([
            'Secondary Text',
        ])
    })

    it('should render with logo if provided', () => {
        // Assemble
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
        const heroInstance = hero.root

        expect(heroInstance.findAllByType('img')[1].props['src']).toBe(
            'logo.png'
        )
    })

    it('should pass down a background image if provided', () => {
        // Assemble
        const backgroundImage =
            'https://images.prismic.io/john-doe-portfolio/test.png'

        render(
            <Hero
                primary={primary}
                secondary={secondary}
                backgroundImage={backgroundImage}
            />
        )

        const heroContainer = Hero({ primary, secondary, backgroundImage })
        if (heroContainer) {
            const heroClassId = heroContainer.type.styledComponentId
            const root = document.getElementsByClassName(heroClassId)
            const style = window.getComputedStyle(root[0])

            expect(style.background).toBe(
                'url(https://images.prismic.io/john-doe-portfolio/test.png)'
            )
        }
    })
})
