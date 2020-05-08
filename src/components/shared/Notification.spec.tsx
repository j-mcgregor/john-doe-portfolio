import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Notification, { NotificationProps } from './Notification'

describe('Notification', () => {
    let props: NotificationProps
    describe('Success: ', () => {
        beforeEach(() => {
            props = {
                type: 'success',
                message: 'Success!',
                onClick: jest.fn(),
            }
        })

        it('should render', () => {
            const { baseElement } = render(<Notification {...props} />)

            expect(baseElement).toMatchSnapshot()
        })

        it('should trigger onClick when icon clicked', () => {
            const { getByTestId } = render(<Notification {...props} />)

            const icon = getByTestId('notify-close')
            fireEvent.click(icon)
            expect(props.onClick).toHaveBeenCalled()
        })
    })
    describe('Failure: ', () => {
        beforeEach(() => {
            props = {
                type: 'failure',
                message: 'Failure!',
                onClick: jest.fn(),
            }
        })

        it('should render', () => {
            const { baseElement } = render(<Notification {...props} />)

            expect(baseElement).toMatchSnapshot()
        })

        it('should trigger onClick when icon clicked', () => {
            const { getByTestId } = render(<Notification {...props} />)

            const icon = getByTestId('notify-close')
            fireEvent.click(icon)
            expect(props.onClick).toHaveBeenCalled()
        })
    })
})
