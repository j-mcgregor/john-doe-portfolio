import React from 'react'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    type,
    value,
    onClick,
    className = '',
}) => (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
        {value}
    </button>
)

export default Button
