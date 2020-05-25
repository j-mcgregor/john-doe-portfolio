import { times } from 'lodash'

export const galleryPage = {
    data: {
        allFile: {
            edges: [
                {
                    node: {
                        name: 'grid-svg.inline',
                        id: 'grid-svg.inline',
                        publicURL: '/assets/grid-svg.inline.svg',
                    },
                },
                {
                    node: {
                        name: 'grid-col-svg.inline',
                        id: 'grid-col-svg.inline',
                        publicURL: '/assets/grid-col-svg.inline.svg',
                    },
                },
                {
                    node: {
                        name: 'grid-row-svg.inline',
                        id: 'grid-row-svg.inline',
                        publicURL: '/assets/grid-row-svg.inline.svg',
                    },
                },
            ],
        },
        prismic: {
            allGallerys: {
                edges: [
                    {
                        node: {
                            title: [
                                {
                                    type: 'heading3',
                                    text: 'Gallery',
                                    spans: [],
                                },
                            ],
                            description: [
                                {
                                    type: 'heading4',
                                    text: 'Look at my stuff!!',
                                    spans: [],
                                },
                            ],
                            body: [
                                {
                                    type: 'type',
                                    fields: times(10, num => ({
                                        alt_text: [
                                            {
                                                type: 'paragraph',
                                                text: `alt text ${num}`,
                                                spans: [],
                                            },
                                        ],
                                        caption: [
                                            {
                                                type: 'paragraph',
                                                text: `caption ${num}`,
                                                spans: [],
                                            },
                                        ],
                                        image: {
                                            dimensions: {
                                                width: 1000,
                                                height: 800,
                                            },
                                            alt: `alt text ${num}`,
                                            copyright: `copyright ${num}`,
                                            url: `http://something-${num}.com`,
                                        },
                                    })),
                                },
                            ],
                        },
                    },
                ],
            },
            allContacts: {
                edges: [
                    {
                        node: {
                            social_links: [
                                {
                                    name: 'Mail',
                                    text: 'info@johndoe.com',
                                    url: {
                                        url: 'mailto:info@johndoe.com',
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    },
}

export const localFiles = {
    allFile: {
        edges: [
            {
                node: {
                    name: 'grid-svg.inline',
                    id: 'grid-svg.inline',
                    publicURL: '/assets/grid-svg.inline.svg',
                },
            },
            {
                node: {
                    name: 'grid-col-svg.inline',
                    id: 'grid-col-svg.inline',
                    publicURL: '/assets/grid-col-svg.inline.svg',
                },
            },
            {
                node: {
                    name: 'grid-row-svg.inline',
                    id: 'grid-row-svg.inline',
                    publicURL: '/assets/grid-row-svg.inline.svg',
                },
            },
        ],
    },
}

export const imageList = times(20, num => ({
    alt_text: [{ text: 'text', type: 'type', spans: [] }],
    image: {
        dimensions: {
            width: 300,
            height: 300,
        },
        alt: `test-${num}`,
        copyright: `test-${num}`,
        url: `test-${num}`,
        thumbnail: {
            dimensions: {
                width: 300,
                height: 300,
            },
            alt: `test-${num}`,
            copyright: `test-${num}`,
            url: `test-${num}`,
        },
    },
    caption: [{ text: 'text', type: 'type', spans: [] }],
}))
