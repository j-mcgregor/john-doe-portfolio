import React from 'react'
import { act } from 'react-dom/test-utils'
import { mocked } from 'ts-jest/utils'
import { render, fireEvent } from '@testing-library/react'
import ContactForm, { ContactFormProps } from './ContactForm'
import { fetchWrapper } from '../../../utils/fetchWrapper'

jest.mock('../../../utils/fetchWrapper')

const renderContactForm = (props: Partial<ContactFormProps> = {}) => {
    const defaultProps: ContactFormProps = {
        onFirstNameChange: () => {},
        onLastNameChange: () => {},
        onEmailChange: () => {},
        onMessageChange: () => {},
        onSubscribe: () => {},
        onSubmit: () => {},
        handleCallback: (cb: Function, arg: boolean | null) => cb(arg),
        subscribe: false,
    }
    return render(<ContactForm {...defaultProps} {...props} />)
}

describe('ContactForm', () => {
    let mockedFetch

    beforeEach(() => {
        jest.clearAllMocks()
        mockedFetch = mocked(fetchWrapper)
    })
    it('should render the contact form', () => {
        const utils = renderContactForm()
        const form = utils.getByTestId('contact-form')

        expect(form).toHaveFormValues({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            subscribe: false,
        })
        expect(utils.baseElement).toMatchSnapshot()
    })

    it('should fill in the firstName field', async () => {
        // ASSEMBLE
        const onFirstNameChange = jest.fn()
        const utils = renderContactForm({ onFirstNameChange })
        const firstName = utils.getByTestId('firstName')

        // ACT
        fireEvent.change(firstName, { target: { value: 'Bruce' } })

        // ASSERT
        expect(onFirstNameChange).toHaveBeenCalledWith('Bruce')
    })

    it('should fill in the lastName field', async () => {
        // ASSEMBLE
        const onLastNameChange = jest.fn()
        const utils = renderContactForm({ onLastNameChange })
        const lastName = utils.getByTestId('lastName')

        // ACT
        fireEvent.change(lastName, { target: { value: 'Wayne' } })

        // ASSERT
        expect(onLastNameChange).toHaveBeenCalledWith('Wayne')
    })

    it('should fill in the email field', async () => {
        // ASSEMBLE
        const onEmailChange = jest.fn()
        const utils = renderContactForm({ onEmailChange })
        const email = utils.getByTestId('email')

        // ACT
        fireEvent.change(email, { target: { value: 'not@batman.com' } })

        // ASSERT
        expect(onEmailChange).toHaveBeenCalledWith('not@batman.com')
    })

    it('should fill in the message field', async () => {
        // ASSEMBLE
        const onMessageChange = jest.fn()
        const utils = renderContactForm({ onMessageChange })
        const message = utils.getByTestId('message')

        // ACT
        fireEvent.change(message, { target: { value: 'Im Batman!!' } })

        // ASSERT
        expect(onMessageChange).toHaveBeenCalledWith('Im Batman!!')
    })

    it('should toggle the subscribe field', async () => {
        const onSubscribe = jest.fn()
        const utils = renderContactForm({ onSubscribe, subscribe: false })
        const subscribe = utils.getByTestId('subscribe')

        fireEvent.click(subscribe)
        expect(onSubscribe).toHaveBeenCalledWith(true)
        fireEvent.click(subscribe)
        expect(onSubscribe).toHaveBeenCalledWith(false)
    })

    it('should submit with firstName, lastName, email, message and subscribe', async () => {
        // ASSEMBLE
        const onSubmit = jest.fn()
        const handleCallback = jest.fn()

        const utils = renderContactForm({
            subscribe: false,
            onSubmit,
            handleCallback,
        })

        const firstName = utils.getByTestId('firstName')
        const lastName = utils.getByTestId('lastName')
        const email = utils.getByTestId('email')
        const message = utils.getByTestId('message')
        const subscribe = utils.getByTestId('subscribe')
        const submit = utils.getByTestId('SEND MESSAGE')

        mockedFetch.mockImplementationOnce(() => Promise.resolve())

        // ACT
        fireEvent.change(firstName, { target: { value: 'Clark' } })
        fireEvent.change(lastName, { target: { value: 'Kent' } })
        fireEvent.change(email, {
            target: { value: 'lastson@krypton.com' },
        })
        fireEvent.change(message, { target: { value: 'I like the sun' } })
        fireEvent.click(subscribe)

        await act(async () => {
            fireEvent.click(submit)
        })

        // ASSERT
        expect(onSubmit).toHaveBeenCalledWith({
            firstName: 'Clark',
            lastName: 'Kent',
            email: 'lastson@krypton.com',
            message: 'I like the sun',
            subscribe: true,
        })
    })

    it('should show <Notification type="success" /> if status is true', async () => {
        // ASSEMBLE
        const utils = renderContactForm()

        const submit = utils.getByTestId('SEND MESSAGE')

        mockedFetch.mockImplementationOnce(() => Promise.resolve())

        // ACT
        await act(async () => {
            fireEvent.click(submit)
        })

        // ASSERT
        expect(utils.getByTestId('notify-success')).toBeDefined()
    })

    it('should show <Notification type="failure" /> if status is false', async () => {
        // ASSEMBLE
        const utils = renderContactForm()

        const submit = utils.getByTestId('SEND MESSAGE')

        mockedFetch.mockImplementationOnce(() => Promise.reject())

        // ACT
        await act(async () => {
            fireEvent.click(submit)
        })

        // ASSERT
        expect(utils.getByTestId('notify-failure')).toBeDefined()
    })

    it('should remove the success notification when clicked', async () => {
        // ASSEMBLE
        const utils = renderContactForm()
        const submit = utils.getByTestId('SEND MESSAGE')
        mockedFetch.mockImplementationOnce(() => Promise.resolve())

        // ACT
        await act(async () => {
            fireEvent.click(submit)
        })

        // ASSERT
        expect(utils.getByTestId('notify-success')).toBeDefined()
        fireEvent.click(utils.getByTestId('notify-close'))
        // .query returns null if not found, instead of throwing error
        expect(utils.queryByTestId('notify-success')).toBeNull()
    })

    it('should remove the failure notification when clicked', async () => {
        // ASSEMBLE
        const utils = renderContactForm()
        const submit = utils.getByTestId('SEND MESSAGE')
        mockedFetch.mockImplementationOnce(() => Promise.reject())

        // ACT
        await act(async () => {
            fireEvent.click(submit)
        })

        // ASSERT
        expect(utils.getByTestId('notify-failure')).toBeDefined()
        fireEvent.click(utils.getByTestId('notify-close'))
        // .query returns null if not found, instead of throwing error
        expect(utils.queryByTestId('notify-failure')).toBeNull()
    })
})
