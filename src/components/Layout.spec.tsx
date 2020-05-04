import React from 'react'
import renderer from 'react-test-renderer'
import Layout from './Layout'

describe('Layout', () => {
    it('should render', () => {
        const layout = renderer.create(<Layout />)
        const layoutInstance = layout.toJSON()

        expect(layoutInstance).not.toBeNull()
        expect(layoutInstance).toHaveLength(3)
        if (layoutInstance) {
            expect(layoutInstance[0].type).toBe('nav')
            expect(layoutInstance[1].type).toBe('div')
            expect(layoutInstance[2].type).toBe('footer')
            expect(layoutInstance).toMatchSnapshot()
        }
    })
})
