import React from 'react'
import { render } from '@testing-library/react'
import { Text } from './Text'
import * as data from '../../../__mocks__/data/blogPage'

describe('Text', () => {
    it('should render', () => {
        const props = { slice: data.textSlice('Thats no moon...') }

        const { baseElement } = render(<Text {...props} />)

        expect(baseElement).toMatchSnapshot()
    })
})
