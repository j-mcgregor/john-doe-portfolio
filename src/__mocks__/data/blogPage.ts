import _ from 'lodash'
import {
    BlogPageProps,
    PRISMIC_PRIMARY_Image_with_Caption,
    PRISMIC_PRIMARY_Quote,
    PRISMIC_PRIMARY_Text,
} from '../../types/interfaces/blog'
import {
    PRISMIC_blog_node,
    PRISMIC_RichTextType,
    PRISMIC_MetaType,
} from '../../types/interfaces/prismic'

type ImageType = 'image_with_caption' | 'full-width-image' | 'emphasized'

type TextType = 'paragraph' | 'heading3'

export interface ImageSliceTypeProps {
    [index: string]: ImageType
}

export const imageSliceType: ImageSliceTypeProps = {
    '0': 'image_with_caption',
    '1': 'full-width-image',
    '2': 'emphasized',
}

export const makeTextType = (
    type: TextType,
    text: string
): PRISMIC_RichTextType => ({
    type,
    text,
    spans: [],
})

export const meta = (
    id: string,
    uid: string,
    type: string
): PRISMIC_MetaType => ({
    id,
    uid,
    type,
})

export const imageSlice = (
    imageType: number
): PRISMIC_PRIMARY_Image_with_Caption => ({
    primary: {
        caption: [makeTextType('paragraph', `caption-${imageType}`)],
        image: {
            dimensions: {
                width: 1200,
                height: 900,
            },
            alt: `alt-${imageType}`,
            copyright: null,
            url: 'http://fillmurray.com/300/300',
        },
    },
    label: `default`,
    type: imageSliceType[`${imageType}`],
})

export const quoteSlice = (text: string): PRISMIC_PRIMARY_Quote => ({
    primary: {
        quote: [makeTextType('paragraph', text)],
    },
    label: undefined,
    type: 'quote',
})

export const textSlice = (text: string): PRISMIC_PRIMARY_Text => ({
    primary: {
        text: [makeTextType('paragraph', text)],
    },
    label: undefined,
    type: 'text',
})

export const blogNodes: PRISMIC_blog_node[] = _.times(3, num => ({
    node: {
        date: `2020-0${num + 1}-01`,
        body: [
            textSlice('Lorem ipsum dolor sit amet'),
            imageSlice(num),
            quoteSlice('And I quoteth thus...'),
        ],
        _meta: meta(`id-${num + 1}`, `blog-${num + 1}`, 'blog_post'),
        title: [makeTextType('paragraph', `Post ${num + 1}`)],
    },
}))

export const blogPage: BlogPageProps = {
    data: {
        prismic: {
            allBlog_posts: {
                edges: blogNodes,
            },
        },
    },
}
