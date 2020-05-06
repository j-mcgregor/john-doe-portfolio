import React from 'react'
import { TextAreaInputProps } from '../../../../types/interfaces'

const TextAreaInput: React.FC<TextAreaInputProps> = ({
    placeholder,
    label,
    name,
    required,
    value,
    onChange,
}) => (
    <div className="form-group">
        {label && <label>{label}</label>}
        <textarea
            placeholder={placeholder}
            className="form-control"
            name={name}
            required={required}
            value={value}
            onChange={onChange}
        ></textarea>
    </div>
)

export default TextAreaInput
