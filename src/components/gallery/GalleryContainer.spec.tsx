import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import * as GalleryData from '../../__mocks__/data/gallery'
import GalleryContainer from './GalleryContainer'
import { PRISMIC_gallery_image_fields } from '../../types/interfaces'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

describe('<GalleryContainer />', () => {
    let localFiles
    let imageList: PRISMIC_gallery_image_fields[]

    beforeEach(() => {
        jest.spyOn(window.localStorage.__proto__, 'getItem')

        localFiles = GalleryData.localFiles
        imageList = GalleryData.imageList
    })

    it('should render the SVG icons', () => {
        useStaticQuery.mockImplementation(() => localFiles)
        const { getAllByTestId } = render(
            <GalleryContainer images={imageList} />
        )

        const SVGs = getAllByTestId('data-test-svg')

        expect(SVGs.length).toBe(3)
        SVGs.forEach((item, i) => {
            expect(item.getAttribute('src')).toBe(
                localFiles.allFile.edges[i].node.publicURL
            )
        })
    })

    it('should use localStorage to set to GRID if localStorage return null', () => {
        // ASSEMBLE
        useStaticQuery.mockImplementation(() => localFiles)
        window.localStorage.__proto__.getItem = jest.fn(() => null)

        const { getByTitle } = render(<GalleryContainer images={imageList} />)

        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'true'
        )
        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe(
            'false'
        )
        expect(getByTitle('data-ROW').getAttribute('data-checked')).toBe(
            'false'
        )
    })

    it('should use localStorage to set to: GRID', () => {
        // ASSEMBLE
        useStaticQuery.mockImplementation(() => localFiles)
        window.localStorage.__proto__.getItem = jest.fn(() => 'GRID')

        const { getByTitle } = render(<GalleryContainer images={imageList} />)

        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'true'
        )
        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe(
            'false'
        )
        expect(getByTitle('data-ROW').getAttribute('data-checked')).toBe(
            'false'
        )
    })

    it('should use localStorage to set to: COL', () => {
        // ASSEMBLE
        useStaticQuery.mockImplementation(() => localFiles)
        window.localStorage.__proto__.getItem = jest.fn(() => 'COL')

        const { getByTitle } = render(<GalleryContainer images={imageList} />)

        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'false'
        )
        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe('true')
        expect(getByTitle('data-ROW').getAttribute('data-checked')).toBe(
            'false'
        )
    })

    it('should use localStorage to set to: ROW', () => {
        // ASSEMBLE
        useStaticQuery.mockImplementation(() => localFiles)
        window.localStorage.__proto__.getItem = jest.fn(() => 'ROW')

        const { getByTitle } = render(<GalleryContainer images={imageList} />)

        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'false'
        )
        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe(
            'false'
        )
        expect(getByTitle('data-ROW').getAttribute('data-checked')).toBe('true')
    })

    it('should handle onClick correctly: GRID -> COL', () => {
        // ASSEMBLE
        useStaticQuery.mockImplementation(() => localFiles)
        window.localStorage.__proto__.getItem = jest.fn(() => 'GRID')

        const { getByTitle } = render(<GalleryContainer images={imageList} />)

        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'true'
        )
        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe(
            'false'
        )

        // ACT
        fireEvent.click(getByTitle('data-COL'))

        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'false'
        )
        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe('true')
    })

    it('should handle onClick correctly: GRID -> ROW', () => {
        // ASSEMBLE
        useStaticQuery.mockImplementation(() => localFiles)
        window.localStorage.__proto__.getItem = jest.fn(() => 'GRID')

        const { getByTitle } = render(<GalleryContainer images={imageList} />)

        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'true'
        )
        expect(getByTitle('data-ROW').getAttribute('data-checked')).toBe(
            'false'
        )

        // ACT
        fireEvent.click(getByTitle('data-ROW'))

        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'false'
        )
        expect(getByTitle('data-ROW').getAttribute('data-checked')).toBe('true')
    })

    it('should handle onClick correctly: COL -> ROW', () => {
        // ASSEMBLE
        useStaticQuery.mockImplementation(() => localFiles)
        window.localStorage.__proto__.getItem = jest.fn(() => 'COL')

        const { getByTitle } = render(<GalleryContainer images={imageList} />)

        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe('true')
        expect(getByTitle('data-ROW').getAttribute('data-checked')).toBe(
            'false'
        )

        // ACT
        fireEvent.click(getByTitle('data-ROW'))

        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe(
            'false'
        )
        expect(getByTitle('data-ROW').getAttribute('data-checked')).toBe('true')
    })

    it('should handle onClick correctly: COL -> GRID', () => {
        // ASSEMBLE
        useStaticQuery.mockImplementation(() => localFiles)
        window.localStorage.__proto__.getItem = jest.fn(() => 'COL')

        const { getByTitle } = render(<GalleryContainer images={imageList} />)

        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe('true')
        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'false'
        )

        // ACT
        fireEvent.click(getByTitle('data-GRID'))

        expect(getByTitle('data-COL').getAttribute('data-checked')).toBe(
            'false'
        )
        expect(getByTitle('data-GRID').getAttribute('data-checked')).toBe(
            'true'
        )
    })
})
