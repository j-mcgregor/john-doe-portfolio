import React from 'react'
import { TextInputProps } from '../../../../types/interfaces'

// We could use const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
// But since this is a composite component including a label, we'll do a custom interface

const TextInput: React.FC<TextInputProps> = ({
    type,
    placeholder,
    label,
    name,
    required,
    value,
    onChange,
    classNames = [],
}) => (
    <div className={`form-group ${classNames.join(' ')}`}>
        {label && <label>{label}</label>}
        <input
            type={type}
            placeholder={placeholder}
            className="form-control"
            name={name}
            required={required}
            value={value}
            onChange={onChange}
        />
    </div>
)

export default TextInput
