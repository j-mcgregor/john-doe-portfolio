import React from 'react'
import RichText from '../../utils/RichTextCustom'
import { PRISMIC_ExperienceType } from '../../types/interfaces/prismic'

export interface CardProps {
    item: PRISMIC_ExperienceType
}

const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <div className="mb3">
            <div className="text-center">
                <h5 className="m0">
                    {item.job_title} @ {item.company}
                </h5>
                <div className="my1">{item.city}</div>
                <small>
                    {item.date_from} to{' '}
                    {item.present ? 'present' : item.date_to}
                </small>
            </div>
            <RichText render={item.description} />
        </div>
    )
}

export default Card
