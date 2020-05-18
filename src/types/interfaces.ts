// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  SHARED  >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface NavbarProps {
    brand: string | JSX.Element
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  PRISMIC   >>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  INDEX   >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  CONTACT   >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export interface ContactPageProps {
    data: {
        prismic: {
            allContacts: {
                edges: PRISMIC_contact_node[]
            }
        }
    }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>  COMPONENTS   >>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export interface HeroProps {
    backgroundImage?: string
    logo?: JSX.Element
    primary: JSX.Element
    secondary: JSX.Element
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
    classNames?: string[]
    label?: string
    name: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
    placeholder: string
    required: boolean
    type: string
    value: string
}

export interface TextAreaInputProps {
    label?: string
    name: string
    onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
    placeholder: string
    required: boolean
    value: string
}
