import React from 'react'
import {
    PRISMIC_PRIMARY_Image_with_Caption,
    PRISMIC_PRIMARY_Quote,
    PRISMIC_PRIMARY_Text,
} from '../../types/interfaces/blog'
import { ImageCaption, Quote, Text } from '../../components/shared/slices'
import createKey from '../../utils/createKey'

export interface PostSlicesProps {
    // INTERSECTION TYPES
    // https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
    slices: Array<
        PRISMIC_PRIMARY_Image_with_Caption &
            PRISMIC_PRIMARY_Quote &
            PRISMIC_PRIMARY_Text
    >
}

// Sort and display the different slice options
const PostSlices: React.FC<PostSlicesProps> = ({ slices }) => {
    const postSlices = slices.map((slice, index) => {
        switch (slice.type) {
            case 'text':
                return (
                    <div
                        key={createKey(slice.type, index)}
                        className="homepage-slice-wrapper"
                    >
                        <Text slice={slice} />
                    </div>
                )

            case 'quote':
                return (
                    <div
                        key={createKey(slice.type, index)}
                        className="homepage-slice-wrapper"
                    >
                        <Quote slice={slice} />
                    </div>
                )

            case 'image_with_caption':
                return (
                    <div
                        key={createKey(slice.type, index)}
                        className="homepage-slice-wrapper"
                    >
                        <ImageCaption slice={slice} />
                    </div>
                )

            default:
                return <div key={createKey(slice.type, index)} />
        }
    })

    return <div>{postSlices}</div>
}

export default PostSlices
