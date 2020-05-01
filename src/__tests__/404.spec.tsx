import React from 'react'
import renderer from 'react-test-renderer'
import NotFound from '../pages/404'

describe('404', () => {
    it('should render', () => {
        // Assemble
        const banner = renderer.create(<NotFound />)
        const bannerInstance = banner.toJSON()

        // Assert
        expect(bannerInstance).not.toBeNull()
        if (bannerInstance) {
            expect(bannerInstance).toMatchSnapshot()
        }
    })
})
