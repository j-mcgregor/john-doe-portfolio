import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'
import { PRISMIC_ExperienceType } from '../../types/interfaces'

describe('Card', () => {
    let item: PRISMIC_ExperienceType

    beforeEach(() => {
        item = {
            job_title: 'Dog walker',
            date_from: '2000-10-10',
            date_to: '2010-10-10',
            company: 'Walkies!?',
            city: 'The Park',
            description: [
                {
                    text: 'Goofy Goober',
                    type: 'header3',
                    spans: [],
                },
            ],
        }
    })
    it('should render', () => {
        const component = render(<Card item={item} />)

        expect(component).toMatchSnapshot()
    })

    it('should display "present" if present field is true', () => {
        const itemWithPresentField: PRISMIC_ExperienceType = {
            ...item,
            present: true,
        }
        const component = render(<Card item={itemWithPresentField} />)

        expect(component.findByText(/present/)).toBeDefined()
        expect(component).toMatchSnapshot()
    })
})
