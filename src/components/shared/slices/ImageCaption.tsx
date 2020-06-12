import React, { Fragment } from 'react'
import { asText } from '../../../utils/RichTextCustom'
import {
    ImageCaptionProps,
    PRISMIC_PRIMARY_Image_with_Caption,
} from '../../../types/interfaces/blog'

// Default Image
export const DefaultImage: React.FC<ImageCaptionProps> = ({ slice }) => (
    <div className="post-image container">
        {slice.primary && slice.primary.image && (
            <figcaption className="block-img">
                <img
                    src={slice.primary.image.url}
                    alt={slice.primary.image.alt || ''}
                />
                {slice.primary.caption &&
                asText(slice.primary.caption) !== '' ? (
                    <figcaption className="image-label">
                        {asText(slice.primary.caption)}
                    </figcaption>
                ) : null}
            </figcaption>
        )}
    </div>
)

// Emphasized Image
export const EmphasizedImage: React.FC<ImageCaptionProps> = ({ slice }) => (
    <div className="post-image container">
        {slice.primary && slice.primary.image && (
            <figcaption className="block-img emphasized">
                <img
                    src={slice.primary.image.url}
                    alt={slice.primary.image.alt || ''}
                />
                {slice.primary.caption &&
                asText(slice.primary.caption) !== '' ? (
                    <figcaption className="image-label">
                        {asText(slice.primary.caption)}
                    </figcaption>
                ) : null}
            </figcaption>
        )}
    </div>
)

// Full Width Image
export const FullWidthImage: React.FC<ImageCaptionProps> = ({ slice }) => (
    <div
        className="post-image full-width-image"
        style={{
            backgroundImage:
                slice.primary && slice.primary.image
                    ? `url(${slice.primary.image.url})`
                    : '',
        }}
    >
        <div className="wrapper">
            {slice.primary &&
            slice.primary.caption &&
            asText(slice.primary.caption) !== '' ? (
                <span className="image-label">
                    {asText(slice.primary.caption)}
                </span>
            ) : null}
        </div>
    </div>
)

// Function to determine the image type
export const renderSwitch = (slice: PRISMIC_PRIMARY_Image_with_Caption) => {
    switch (slice.label) {
        case 'full-width-image':
            return <FullWidthImage slice={slice} />
        case 'emphasized':
            return <EmphasizedImage slice={slice} />
        default:
            return <DefaultImage slice={slice} />
    }
}

export const ImageCaption: React.FC<ImageCaptionProps> = ({ slice }) => {
    return <Fragment>{renderSwitch(slice)}</Fragment>
}
