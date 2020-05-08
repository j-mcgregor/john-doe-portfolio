import React from 'react'
import { render } from '@testing-library/react'
import CheckboxInput from './CheckboxInput'

describe('CheckboxInput', () => {
    it('should render a button', () => {
        const mockFn = jest.fn()
        const utils = render(
            <CheckboxInput
                label="Test Checkbox"
                name="Test"
                isChecked={false}
                onChange={mockFn}
            />
        )

        expect(utils.baseElement).toMatchSnapshot()
    })
})
