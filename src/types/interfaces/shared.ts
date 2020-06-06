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

export interface NavbarProps {
    brand: string | JSX.Element
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
