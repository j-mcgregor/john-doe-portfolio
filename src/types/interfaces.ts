export interface NavbarProps {
    brand: string | JSX.Element
}

export interface PRISMIC_RichTextType {
    type: string
    text: string
    spans: any[]
}

export interface PRISMIC_Image {
    dimensions: {
        width: number
        height: number
    }
    alt?: string | null
    copyright: string | null
    url: string
}

export interface PRISMIC_ExperienceType {
    job_title: string
    date_from: string
    date_to?: string
    present?: boolean
    company: string
    city: string
    description: PRISMIC_RichTextType[]
}

export interface PRISMIC_landing_node {
    node: {
        primary_text: PRISMIC_RichTextType[]
        secondary_text: PRISMIC_RichTextType[]
        background_image: PRISMIC_Image
        about: PRISMIC_RichTextType[]
        experience: PRISMIC_ExperienceType[]
    }
}

export interface IndexPageProps {
    data: {
        prismic: {
            allLandings: {
                edges: PRISMIC_landing_node[]
            }
        }
        file: {
            childImageSharp: {
                fixed: {
                    height: number
                    width: number
                    base64: string
                    src: string
                    srcSet: string
                }
            }
        }
    }
}

export interface HeroProps {
    primary: JSX.Element
    secondary: JSX.Element
    logo?: JSX.Element
    backgroundImage?: string
}

export interface StyledHeroProps {
    bgImageUrl?: string
}

export interface AboutProps {
    about: JSX.Element
    experience: JSX.Element[]
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  FORMS   >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export interface TextInputProps {
    type: string
    placeholder: string
    label?: string
    name: string
    required: boolean
    classNames?: string[]
    value: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export interface TextAreaInputProps {
    placeholder: string
    label?: string
    name: string
    required: boolean
    value: string
    onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
}
