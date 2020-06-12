import React from 'react'
import { render } from '@testing-library/react'
import { Quote } from './Quote'
import * as data from '../../../__mocks__/data/blogPage'

describe('Quote', () => {
    it('should render', () => {
        const props = { slice: data.quoteSlice('Join the Dark Side') }

        const { baseElement } = render(<Quote {...props} />)

        expect(baseElement).toMatchSnapshot()
    })
})
