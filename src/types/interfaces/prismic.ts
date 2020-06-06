// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  PRISMIC   >>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import { BlogBodyProps } from './blog'

export interface PRISMIC_RichTextType {
    spans: any[]
    text: string
    type: string
}

export interface PRISMIC_Image {
    alt?: string | null
    copyright: string | null
    dimensions: {
        height: number
        width: number
    }
    url: string
    thumbnail?: {
        dimensions: {
            width: number
            height: number
        }
        alt: string | null
        copyright: string | null
        url: string
    }
}

export interface PRISMIC_ExperienceType {
    city: string
    company: string
    date_from: string
    date_to?: string
    description: PRISMIC_RichTextType[]
    job_title: string
    present?: boolean
}

export interface PRISMIC_SocialLinks {
    name: string
    text?: string | null
    url?: {
        url: string
    } | null
}

export interface PRISMIC_gallery_body {
    type: string
    label?: string
    fields: PRISMIC_gallery_image_fields[]
}

export interface PRISMIC_gallery_image_fields {
    alt_text: PRISMIC_RichTextType[] | null
    image: PRISMIC_Image
    caption: PRISMIC_RichTextType[] | null
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  NODES   >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export interface PRISMIC_landing_node {
    node: {
        about: PRISMIC_RichTextType[]
        background_image: PRISMIC_Image
        experience: PRISMIC_ExperienceType[]
        primary_text: PRISMIC_RichTextType[]
        secondary_text: PRISMIC_RichTextType[]
    }
}

export interface PRISMIC_contact_node {
    node: {
        title: PRISMIC_RichTextType[] | null
        subtitle: PRISMIC_RichTextType[] | null
        social_links: PRISMIC_SocialLinks[]
    }
}

export interface PRISMIC_gallery_node {
    node: {
        title: PRISMIC_RichTextType[] | null
        description: PRISMIC_RichTextType[] | null
        body: PRISMIC_gallery_body[]
    }
}

export interface PRISMIC_blog_node_body {
    title: PRISMIC_RichTextType[]
    date: string
    body: BlogBodyProps[]
    _meta: {
        id: string
        uid: string
        type: string
    }
}
export interface PRISMIC_blog_node {
    node: PRISMIC_blog_node_body
}
