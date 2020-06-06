import { BlogPageProps } from '../../types/interfaces/blog'

export const blogPage: BlogPageProps = {
    data: {
        prismic: {
            allBlog_posts: {
                edges: [
                    {
                        node: {
                            date: '2020-01-01',
                            body: [
                                {
                                    primary: {
                                        text: [
                                            {
                                                type: 'paragraph',
                                                text:
                                                    'Lorem ipsum dolor sit amet',
                                                spans: [],
                                            },
                                        ],
                                    },
                                    type: 'text',
                                },
                                {
                                    primary: {
                                        caption: null,
                                        image: {
                                            dimensions: {
                                                width: 1200,
                                                height: 900,
                                            },
                                            alt: null,
                                            copyright: null,
                                            url:
                                                'https://images.prismic.io/john-doe-portfolio/5de3113f-3022-4bc2-bf56-304a1f748db3_photo-1534713570913-ae674f0fc2af.jpeg?auto=compress,format&rect=0,0,1934,1450&w=1200&h=900',
                                        },
                                    },
                                    type: 'image_with_caption',
                                },
                            ],
                            _meta: {
                                id: '123',
                                uid: 'blog-1',
                                type: 'blog_post',
                            },
                            title: [
                                {
                                    type: 'heading3',
                                    text: 'First post',
                                    spans: [],
                                },
                            ],
                        },
                    },
                ],
            },
        },
    },
}
