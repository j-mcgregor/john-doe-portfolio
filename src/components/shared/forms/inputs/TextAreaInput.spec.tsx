import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextAreaInput from './TextAreaInput'

describe('TextAreaInput', () => {
    it('should render a textarea', () => {
        const mockFn = jest.fn()
        const utils = render(
            <TextAreaInput
                label="Test Textarea"
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
            <TextAreaInput
                label="Test Textarea"
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
