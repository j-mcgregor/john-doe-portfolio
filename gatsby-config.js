const postcssPresetEnv = require('postcss-preset-env')
const path = require('path')

module.exports = {
    siteMetadata: {
        title: `John Doe Portfolio`,
        description: `A dev-test-deploy setup for a Gatsby portfolio with React, Jest and Typescript`,
        author: `@j-mcgregor`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-prismic-graphql',
            options: {
                repositoryName: 'john-doe-portfolio',
                path: '/preview',
                previews: true,
                pages: [
                    {
                        type: 'Blog_post', // casing is particularly important; NO SPACES
                        match: '/blog/:uid',
                        path: '/blog-preview',
                        component: require.resolve('./src/templates/post.tsx'),
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `john-doe-portfolio`,
                short_name: `JDP`,
                start_url: `/`,
                display: `minimal-ui`,
                icon: 'src/images/logo.png',
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Abel`, `Montserrat`],
                display: 'swap',
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    postcssPresetEnv({
                        browsers: '> 0.5%, last 2 versions, ie 11',
                    }),
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },

        'gatsby-plugin-typescript',
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
