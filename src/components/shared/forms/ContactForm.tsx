import React, { useState } from 'react'
import Notification from '../Notification'
import TextInput from './inputs/TextInput'
import TextAreaInput from './inputs/TextAreaInput'
import Button from '../buttons/Button'
import CheckboxInput from './inputs/CheckboxInput'
import fetchWrapper from '../../../utils/fetchWrapper'
import encode from '../../../utils/encode'

const ContactForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subscribe, setSubscribe] = useState(false)
    const [status, setStatus] = useState<true | false | null>(null)

    const handleChange = (
        e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.currentTarget
        if (name === 'firstName') {
            setFirstName(value)
        } else if (name === 'lastName') {
            setLastName(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'message') {
            setMessage(value)
        }
    }

    const handleCheckbox = () => setSubscribe(!subscribe)

    const handleSubmit = (e: React.FormEvent) => {
        const data = { firstName, lastName, email, message, subscribe }

        fetchWrapper('/', encode(data))
            .then(() => setStatus(true))
            .catch(error => {
                console.log(error)
                setStatus(false)
            })

        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
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
