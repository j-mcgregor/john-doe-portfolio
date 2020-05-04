import React from 'react'
import renderer from 'react-test-renderer'
import * as Gatsby from 'gatsby'
import Navbar from './Navbar'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

describe('Navbar', () => {
    it('should render with a text element if no image found', () => {
        useStaticQuery.mockImplementation(() => ({
            file: null,
        }))
        const brand = <>Test</>

        const nav = renderer.create(<Navbar brand={brand} />)
        const navInstance = nav.toJSON()

        expect(navInstance).not.toBeNull()
        if (navInstance) {
            expect(navInstance.type).toBe('nav')
            expect(navInstance.props).toEqual({ className: 'navbar' })
            expect(navInstance).toMatchSnapshot()
        }
    })

    it('should render with an image if found', () => {
        useStaticQuery.mockImplementation(() => ({
            file: {
                childImageSharp: {
                    fixed: {
                        src: '/static/123/456/logo.png',
                        height: 50,
                        width: 50,
                        srcSet: '',
                        base64: 'data:image/png',
                    },
                },
            },
        }))
        const brand = <>Test</>

        const nav = renderer.create(<Navbar brand={brand} />)
        const navInstance = nav.toJSON()

        expect(navInstance).not.toBeNull()
        if (navInstance) {
            expect(navInstance.type).toBe('nav')
            expect(navInstance.props).toEqual({ className: 'navbar' })
            expect(navInstance).toMatchSnapshot()
        }
    })
})
