import React from 'react'
import renderer from 'react-test-renderer'
import Banner from './Banner'

describe('Banner', () => {
    it('should render', () => {
        // Assemble
        const banner = renderer.create(<Banner />)
        const bannerInstance = banner.toJSON()
        const bannerRoot = banner.root

        // Assert
        expect(bannerInstance).not.toBeNull()
        if (bannerInstance) {
            expect(bannerRoot.findAllByType('svg')).toHaveLength(5)
            expect(bannerInstance).toMatchSnapshot()
        }
    })
})
