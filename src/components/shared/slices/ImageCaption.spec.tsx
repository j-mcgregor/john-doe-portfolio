import React from 'react'
import { render } from '@testing-library/react'
import * as ImageCaption from './ImageCaption'
import { ImageCaptionProps } from '../../../types/interfaces/blog'
import * as data from '../../../__mocks__/data/blogPage'
import { PRISMIC_Image } from '../../../types/interfaces/prismic'

describe('ImageCaption', () => {
    let props: ImageCaptionProps

    describe('Default Image', () => {
        beforeEach(() => {
            props = { slice: data.imageSlice(0) }
        })

        it('should render a default image', () => {
            const { baseElement } = render(
                <ImageCaption.DefaultImage {...props} />
            )

            expect(baseElement).toMatchSnapshot()
            expect(baseElement.querySelectorAll('figcaption').length).toBe(2)
        })

        it('should render a default image with no caption if none provided', () => {
            const newProps: ImageCaptionProps = {
                slice: {
                    ...props.slice,
                    primary: {
                        ...props.slice.primary,
                        caption: [],
                    },
                },
            }

            const { baseElement } = render(
                <ImageCaption.DefaultImage {...newProps} />
            )

            expect(baseElement).toMatchSnapshot()
            expect(baseElement.querySelectorAll('figcaption').length).toBe(1)
        })

        it('should render a default image with no alt text if none provided', () => {
            const image = props.slice.primary ? props.slice.primary.image : {}

            const newProps: ImageCaptionProps = {
                slice: {
                    ...props.slice,
                    primary: {
                        ...props.slice.primary,
                        image: {
                            ...image,
                            alt: '',
                        } as PRISMIC_Image, // so we don't have to include every prop
                    },
                },
            }

            const { baseElement } = render(
                <ImageCaption.DefaultImage {...newProps} />
            )

            expect(baseElement).toMatchSnapshot()
            expect(
                baseElement.getElementsByTagName('img')[0].getAttribute('alt')
            ).toBe('')
        })
    })

    describe('Emphasized Image', () => {
        beforeEach(() => {
            props = { slice: data.imageSlice(0) }
        })

        it('should render an emphasized image', () => {
            const { baseElement } = render(
                <ImageCaption.EmphasizedImage {...props} />
            )

            expect(baseElement).toMatchSnapshot()
            expect(baseElement.querySelectorAll('figcaption').length).toBe(2)
        })

        it('should render an emphasized image with no caption if none provided', () => {
            const newProps: ImageCaptionProps = {
                slice: {
                    ...props.slice,
                    primary: {
                        ...props.slice.primary,
                        caption: [],
                    },
                },
            }

            const { baseElement } = render(
                <ImageCaption.EmphasizedImage {...newProps} />
            )

            expect(baseElement).toMatchSnapshot()
            expect(baseElement.querySelectorAll('figcaption').length).toBe(1)
        })

        it('should render an emphasized image with no alt text if none provided', () => {
            const image = props.slice.primary ? props.slice.primary.image : {}

            const newProps: ImageCaptionProps = {
                slice: {
                    ...props.slice,
                    primary: {
                        ...props.slice.primary,
                        image: {
                            ...image,
                            alt: '',
                        } as PRISMIC_Image, // so we don't have to include every prop
                    },
                },
            }

            const { baseElement } = render(
                <ImageCaption.EmphasizedImage {...newProps} />
            )

            expect(baseElement).toMatchSnapshot()
            expect(
                baseElement.getElementsByTagName('img')[0].getAttribute('alt')
            ).toBe('')
        })
    })

    describe('Full Width Image', () => {
        beforeEach(() => {
            props = { slice: data.imageSlice(0) }
        })

        it('should render a full-width image', () => {
            const { baseElement } = render(
                <ImageCaption.FullWidthImage {...props} />
            )

            expect(baseElement).toMatchSnapshot()
        })

        it('should render a full-width image with no caption if none provided', () => {
            const newProps: ImageCaptionProps = {
                slice: {
                    ...props.slice,
                    primary: {
                        ...props.slice.primary,
                        caption: [],
                    },
                },
            }

            const { baseElement } = render(
                <ImageCaption.FullWidthImage {...newProps} />
            )

            expect(baseElement).toMatchSnapshot()
            expect(
                baseElement
                    .getElementsByClassName('full-width-image')[0]
                    .getAttribute('style')
            ).toBe('background-image: url(http://fillmurray.com/300/300);')
        })

        it('should render a full-width image with no background image if no url provided', () => {
            const newProps: ImageCaptionProps = {
                slice: {
                    ...props.slice,
                    primary: {
                        ...props.slice.primary,
                        image: undefined,
                    },
                },
            }

            const { baseElement } = render(
                <ImageCaption.FullWidthImage {...newProps} />
            )

            expect(baseElement).toMatchSnapshot()
            expect(
                baseElement
                    .getElementsByClassName('full-width-image')[0]
                    .hasAttribute('style')
            ).toBe(false)
        })
    })

    describe('Render Switch Image', () => {
        beforeEach(() => {
            props = { slice: data.imageSlice(0) }
        })

        it('should render a FullWidthImage if label is full-width-image', () => {
            const newProps: ImageCaptionProps = {
                slice: {
                    ...props.slice,
                    label: 'full-width-image',
                },
            }

            const { baseElement } = render(
                <ImageCaption.renderSwitch {...newProps.slice} />
            )

            expect(
                baseElement.getElementsByClassName('full-width-image')[0]
            ).toBeDefined()
            expect(baseElement).toMatchSnapshot()
        })

        it('should render an Emphasized if label is emphasized', () => {
            const newProps: ImageCaptionProps = {
                slice: {
                    ...props.slice,
                    label: 'emphasized',
                },
            }

            const { baseElement } = render(
                <ImageCaption.renderSwitch {...newProps.slice} />
            )

            expect(
                baseElement.getElementsByClassName('emphasized')[0]
            ).toBeDefined()
            expect(baseElement).toMatchSnapshot()
        })

        it('should render a DefaultImage by default', () => {
            const { baseElement } = render(
                <ImageCaption.renderSwitch {...props.slice} />
            )

            expect(baseElement).toMatchSnapshot()
        })
    })

    describe('Image Caption', () => {
        beforeEach(() => {
            props = { slice: data.imageSlice(0) }
        })

        it('should render', () => {
            const { baseElement } = render(
                <ImageCaption.ImageCaption {...props} />
            )

            expect(baseElement).toMatchSnapshot()
        })
    })
})
