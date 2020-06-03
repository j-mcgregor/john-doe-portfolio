export const indexPage = {
    prismic: {
        allLandings: {
            edges: [
                {
                    node: {
                        primary_text: [
                            {
                                type: 'header1',
                                text: 'John Doe',
                                spans: [],
                            },
                        ],
                        secondary_text: [
                            {
                                type: 'header2',
                                text: 'Developer',
                                spans: [],
                            },
                        ],
                        background_image: {
                            copyright: '',
                            dimensions: {
                                height: 100,
                                width: 100,
                            },
                            url: 'logo.png',
                            alt: 'logo',
                        },
                        about: [
                            {
                                type: 'paragraph',
                                text: 'lorem ipsum',
                                spans: [],
                            },
                        ],
                        experience: [
                            {
                                city: 'London',
                                company: 'London Inc',
                                date_from: '2019-01-01',
                                date_to: '2020-01-01',
                                description: [
                                    {
                                        type: 'paragraph',
                                        text: 'some job description here',
                                        spans: [],
                                    },
                                ],
                                job_title: 'Dev',
                            },
                        ],
                    },
                },
            ],
        },
    },
    file: {
        childImageSharp: {
            fixed: {
                height: 200,
                width: 200,
                base64: '/logo.png',
                src: '/logo.png',
                srcSet: '/logo.png',
            },
        },
    },
}
