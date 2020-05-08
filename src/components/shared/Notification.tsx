import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export interface NotificationProps {
    type: 'success' | 'failure'
    message: string
    onClick(): void
}

const Notification: React.FC<NotificationProps> = ({
    type,
    message,
    onClick,
}) => {
    return (
        <div
            className={`text-center notify notify-${type} mt1`}
            data-testid={`notify-${type}`}
        >
            <p>{message}</p>
            <div className="close" onClick={onClick} data-testid="notify-close">
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    )
}

export default Notification
