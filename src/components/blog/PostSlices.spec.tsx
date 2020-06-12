import React from 'react'
import { render } from '@testing-library/react'
import PostSlices, { PostSlicesProps } from './PostSlices'
import {
    textSlice,
    imageSlice,
    quoteSlice,
} from '../../__mocks__/data/blogPage'

describe('PostSlices', () => {
    it('should render a Text Slice', () => {
        const props = {
            slices: [textSlice('Lorem ipsum dolor sit amet')],
        } as PostSlicesProps

        const { baseElement, getAllByText } = render(<PostSlices {...props} />)

        expect(baseElement).toMatchSnapshot()
        expect(getAllByText('Lorem ipsum dolor sit amet')).toBeDefined()
    })

    it('should render an Image Slice', () => {
        const props = {
            slices: [imageSlice(0)],
        } as PostSlicesProps

        const { baseElement } = render(<PostSlices {...props} />)

        expect(baseElement).toMatchSnapshot()
        expect(baseElement.getElementsByTagName('img')[0].src).toBe(
            'http://fillmurray.com/300/300'
        )
    })

    it('should render a Quote Slice', () => {
        const props = {
            slices: [quoteSlice('And I quoteth thus...')],
        } as PostSlicesProps

        const { baseElement, getAllByText } = render(<PostSlices {...props} />)

        expect(baseElement).toMatchSnapshot()
        expect(getAllByText('And I quoteth thus...')).toBeDefined()
    })

    it('should render all slices', () => {
        const props = {
            slices: [
                textSlice('Lorem ipsum dolor sit amet'),
                imageSlice(0),
                quoteSlice('And I quoteth thus...'),
            ],
        } as PostSlicesProps

        const { baseElement, getAllByText } = render(<PostSlices {...props} />)

        expect(baseElement).toMatchSnapshot()
        expect(getAllByText('Lorem ipsum dolor sit amet')).toBeDefined()
        expect(getAllByText('And I quoteth thus...')).toBeDefined()
        expect(baseElement.getElementsByTagName('img')[0].src).toBe(
            'http://fillmurray.com/300/300'
        )
    })

    it('should render empty div if type !== match', () => {
        const props = {
            slices: [
                {
                    type: 'batman',
                },
            ],
        } as PostSlicesProps

        const { baseElement } = render(<PostSlices {...props} />)

        expect(baseElement).toMatchSnapshot()
    })
})
