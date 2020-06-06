import React from 'react'
import { render } from '@testing-library/react'
import About from './About'
import RichText from '../../utils/RichTextCustom'
import {
    PRISMIC_RichTextType,
    PRISMIC_ExperienceType,
} from '../../types/interfaces/prismic'
import Card from '../shared/Card'

describe('About', () => {
    // test about section renders correctly
    // test experiences section renders correctly
    // test buttons work
    let paragraph: PRISMIC_RichTextType[]
    let experience: PRISMIC_ExperienceType[]

    beforeEach(() => {
        paragraph = [
            {
                text: 'lorem ipsum',
                type: 'paragraph',
                spans: [],
            },
        ]
        experience = [
            {
                city: 'Oz',
                company: 'Big Wizard Company',
                date_from: '2000-01-01',
                date_to: '2010-12-31',
                description: [
                    {
                        text: 'operated the curtain pulley',
                        type: 'paragraph',
                        spans: [],
                    },
                ],
                job_title: 'Curtain Puller',
            },
        ]
    })
    it('should render the about section by default', () => {
        // assemble
        const about = <RichText render={paragraph} />
        const cards = experience.map(e => <Card key="hi" item={e} />)
        const result = render(<About about={about} experience={cards} />)

        // assert
        expect(result.container).toMatchSnapshot()
        expect(result.getByText(/lorem ipsum/)).toBeDefined()
    })

    it('should display the experience section when tab is clicked', () => {
        // assemble
        const about = <RichText render={paragraph} />
        const cards = experience.map(e => <Card key="hi" item={e} />)
        const result = render(<About about={about} experience={cards} />)

        // act
        result.getByText('Experience').click()

        // assert
        expect(result.container).toMatchSnapshot()
        expect(result.getByText(/Big Wizard Company/)).toBeDefined()
    })
    it('should display the experience section when tab is clicked', () => {
        // assemble
        const about = <RichText render={paragraph} />
        const cards = experience.map(e => <Card key="hi" item={e} />)
        const result = render(<About about={about} experience={cards} />)

        // act
        result.getByText('About').click()

        // assert
        expect(result.container).toMatchSnapshot()
        expect(result.getByText(/lorem ipsum/)).toBeDefined()
    })
})
