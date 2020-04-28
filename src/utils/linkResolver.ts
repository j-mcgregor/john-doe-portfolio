interface LinkResolverProp {
    type: string
    uid: string
}

export const linkResolver = (doc: LinkResolverProp) => {
    if (doc.type === 'page') {
        return `/${doc.uid}`
    }

    return '/'
}
