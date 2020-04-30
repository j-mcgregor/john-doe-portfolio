import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'

describe('Footer', () => {
    it('should render', () => {
        const nav = renderer.create(<Footer />)
        const navInstance = nav.toJSON()

        expect(navInstance).not.toBeNull()
        if (navInstance) {
            expect(navInstance.type).toBe('footer')
            expect(navInstance.props).toEqual({ className: 'footer' })
            expect(navInstance).toMatchSnapshot()
        }
    })
})
