import React from 'react'

export interface CheckboxInputProps {
    label: string
    name: string
    isChecked: boolean
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
    label,
    name,
    isChecked,
    onChange,
}) => {
    return (
        <div className="form-group flex flex-row">
            <input
                type="checkbox"
                data-testid={name}
                name={name}
                checked={isChecked}
                onChange={onChange}
                aria-label={name}
            />
            {label && <label htmlFor={name}>{label}</label>}
        </div>
    )
}

export default CheckboxInput
