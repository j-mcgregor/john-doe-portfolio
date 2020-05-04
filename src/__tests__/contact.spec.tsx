import React from 'react'
import renderer from 'react-test-renderer'
import Contact from '../pages/contact'

describe('Contact', () => {
    it('should render', () => {
        // Assemble
        const component = renderer.create(<Contact />)
        const componentInstance = component.toJSON()

        // Assert
        expect(componentInstance).not.toBeNull()
        if (componentInstance) {
            expect(componentInstance).toMatchSnapshot()
        }
    })
})
