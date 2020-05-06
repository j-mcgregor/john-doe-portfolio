import React from 'react'

export interface CheckboxInputProps {
    label: string
    name: string
    isChecked: boolean
    onChange(): void
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
                name={name}
                checked={isChecked}
                onChange={onChange}
            />
            {label && <label>{label}</label>}
        </div>
    )
}

export default CheckboxInput
