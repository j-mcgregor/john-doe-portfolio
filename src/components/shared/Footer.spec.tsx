import React from 'react'
import renderer from 'react-test-renderer'
import * as Gatsby from 'gatsby'
import Footer from './Footer'
import { footerData } from '../../__mocks__/data/footer'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

describe('Footer', () => {
    const response = footerData
    it('should render', () => {
        useStaticQuery.mockImplementation(() => response)
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
