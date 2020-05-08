import React, { useState } from 'react'
import axios from 'axios'
import Notification from '../Notification'
import TextInput from './inputs/TextInput'
import TextAreaInput from './inputs/TextAreaInput'
import Button from '../buttons/Button'
import CheckboxInput from './inputs/CheckboxInput'
import encode from '../../../utils/encode'

export interface SubmitProps {
    firstName: string
    lastName: string
    email: string
    message: string
    subscribe: boolean
}
export interface ContactFormProps {
    onFirstNameChange?: (firstName: string) => void
    onLastNameChange?: (lastName: string) => void
    onEmailChange?: (email: string) => void
    onMessageChange?: (message: string) => void
    onSubscribe?: (subscribe: boolean) => void
    onSubmit?: (props: SubmitProps) => void
    handleCallback?: (callback: Function, arg: boolean | null) => void
    subscribe?: boolean
}

const ContactForm = (props: ContactFormProps) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [subscribe, setSubscribe] = useState<boolean>(false)
    const [status, setStatus] = useState<true | false | null>(null)
    const [, setLoading] = useState<boolean>(false)

    const handleChange = (
        e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.currentTarget
        if (name === 'firstName') {
            setFirstName(value)
            props.onFirstNameChange && props.onFirstNameChange(value)
        } else if (name === 'lastName') {
            setLastName(value)
            props.onLastNameChange && props.onLastNameChange(value)
        } else if (name === 'email') {
            setEmail(value)
            props.onEmailChange && props.onEmailChange(value)
        } else if (name === 'message') {
            setMessage(value)
            props.onMessageChange && props.onMessageChange(value)
        }
    }

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        setSubscribe(checked)
        props.onSubscribe && props.onSubscribe(checked)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = { firstName, lastName, email, message, subscribe }
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

        setLoading(true)
        try {
            const res = await axios({
                method: 'POST',
                url: 'https://john-doe-portfolio.netlify.app/',
                data: encode({ 'form-name': 'contact-form', ...data }),
                headers,
            })
            console.log(res)
            setStatus(true)
            props.onSubmit && props.onSubmit(data)
        } catch (e) {
            setStatus(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form
            name="contact-form"
            onSubmit={handleSubmit}
            data-testid="contact-form"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="row">
                <TextInput
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    classNames={['col-md-6']}
                    value={firstName}
                    onChange={handleChange}
                    required
                />
                <TextInput
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    classNames={['col-md-6']}
                    value={lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <TextInput
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
            />
            <TextAreaInput
                placeholder="Message"
                name="message"
                value={message}
                onChange={handleChange}
                required
            />
            <CheckboxInput
                isChecked={subscribe}
                onChange={handleCheckbox}
                name="subscribe"
                label="Subscribe to newsletter?"
            />
            <Button type="submit" value="SEND MESSAGE" className="mt1" />
            {status === true ? (
                <Notification
                    type="success"
                    message="Success!"
                    onClick={() => setStatus(null)}
                />
            ) : null}
            {status === false ? (
                <Notification
                    type="failure"
                    message="Oops! Something went wrong"
                    onClick={() => setStatus(null)}
                />
            ) : null}
        </form>
    )
}

export default ContactForm
