import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    type,
    value,
    onClick,
    disabled,
    className = '',
}) => (
    <button
        type={type}
        onClick={onClick}
        className={`btn ${className}`}
        data-testid={value}
        disabled={disabled}
    >
        {value}
        {disabled && <FontAwesomeIcon icon={faSpinner} spin className="ml1" />}
    </button>
)

export default Button
