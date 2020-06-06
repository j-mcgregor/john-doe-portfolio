// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>  BLOG   >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import {
    PRISMIC_RichTextType,
    PRISMIC_Image,
    PRISMIC_blog_node,
    PRISMIC_blog_node_body,
} from './prismic'

export interface BlogBodyProps {
    __typename?: string
    type: string
    primary: {
        text?: PRISMIC_RichTextType[]
        caption?: string | null
        image?: PRISMIC_Image
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

export interface PostSummaryProps {
    post: PRISMIC_blog_node_body
}

export interface BlogPostsProps {
    posts?: PRISMIC_blog_node[]
}
