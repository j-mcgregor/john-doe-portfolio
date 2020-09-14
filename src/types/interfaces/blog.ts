// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>  BLOG   >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import {
    PRISMIC_RichTextType,
    PRISMIC_Image,
    PRISMIC_blog_node,
    PRISMIC_blog_node_body,
} from './prismic'

export interface PRISMIC_PRIMARY_Image_with_Caption {
    type: string
    label?: string
    primary?: {
        caption?: PRISMIC_RichTextType[]
        image?: PRISMIC_Image
    }
}

export interface PRISMIC_PRIMARY_Text {
    type: string
    label?: string
    primary?: {
        text?: PRISMIC_RichTextType[]
    }
}

export interface PRISMIC_PRIMARY_Quote {
    type: string
    label?: string
    primary?: {
        quote?: PRISMIC_RichTextType[]
    }
}

export interface BlogPageProps {
    data: {
        prismic: {
            allBlog_posts: {
                edges: PRISMIC_blog_node[]
            }
        }
    }
}

export interface BlogBodyProps {
    body: Array<
        | PRISMIC_PRIMARY_Image_with_Caption
        | PRISMIC_PRIMARY_Quote
        | PRISMIC_PRIMARY_Text
    >
}

export interface PostSummaryProps {
    post: PRISMIC_blog_node_body
}

export interface BlogPostsProps {
    posts?: PRISMIC_blog_node[]
}

export interface ImageCaptionProps {
    slice: PRISMIC_PRIMARY_Image_with_Caption
}
