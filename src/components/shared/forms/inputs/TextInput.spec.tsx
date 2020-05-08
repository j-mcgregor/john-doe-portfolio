import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextInput from './TextInput'

describe('TextInput', () => {
    it('should render an input', () => {
        const mockFn = jest.fn()
        const utils = render(
            <TextInput
                type="text"
                label="Test Text Input"
                placeholder="Test"
                name="test"
                value=""
                onChange={mockFn}
                required
            />
        )

        expect(utils.baseElement).toMatchSnapshot()
    })

    it('should trigger the onChange by changing the input', () => {
        const mockFn = jest.fn()
        const utils = render(
            <TextInput
                type="text"
                label="Test Text Input"
                placeholder="Test"
                name="test"
                value=""
                onChange={mockFn}
                required
            />
        )

        const input = utils.getByLabelText('test')
        fireEvent.change(input, { target: { value: '123' } })
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})
