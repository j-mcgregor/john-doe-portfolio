import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
    it('should render a button', () => {
        const mockFn = jest.fn()
        const component = render(
            <Button type="button" value="Submit" onClick={mockFn} />
        )

        expect(component.baseElement).toMatchSnapshot()
    })

    it('should trigger the function onClick', () => {
        const mockFn = jest.fn()
        const { getByText } = render(
            <Button type="button" value="Submit" onClick={mockFn} />
        )

        fireEvent.click(getByText('Submit'))

        expect(mockFn).toHaveBeenCalled()
    })
})
