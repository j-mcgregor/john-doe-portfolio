import React from 'react'
import { TextAreaInputProps } from '../../../../types/interfaces/shared'

const TextAreaInput: React.FC<TextAreaInputProps> = ({
    placeholder,
    label,
    name,
    required,
    value,
    onChange,
}) => (
    <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <textarea
            placeholder={placeholder}
            className="form-control"
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            data-testid={name}
            aria-label={name}
        ></textarea>
    </div>
)

export default TextAreaInput
