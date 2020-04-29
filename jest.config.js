/**
 * TRANSFORM:
 * * tells Jest that all js or jsx files need to be transformed using a jest-preprocess.js file in the project root
 * MODULER NAME MAPPER:
 * * works a bit like webpack rules and tells Jest how to handle imports. You are mainly concerned here with mocking static file imports, which Jest can’t handle. A mock is a dummy module that is used instead of the real module inside tests. It is good when you have something that you can’t or don’t want to test. You can mock anything, and here you are mocking assets rather than code. For stylesheets you need to use the package identity-obj-proxy. For all other assets, you need to use a manual mock called file-mock.js. You need to create this yourself. The convention is to create a directory called __mocks__ in the root directory for this. Note the pair of double underscores in the name
 * TEST IGNORE PATTERNS:
 * * telling Jest to ignore any tests in the node_modules or .cache directories
 * TRANSFORM IGNORE PATTERN:
 * * very important and is different from what you’ll find in other Jest guides. The reason that you need transformIgnorePatterns is because Gatsby includes un-transpiled ES6 code. By default Jest doesn’t try to transform code inside node_modules, so you will get an error like this
 * GLOBALS:
 * * The globals section sets __PATH_PREFIX__, which is usually set by Gatsby, and which some components need
 * TEST URL:
 * * You need to set testURL to a valid URL, because some DOM APIs such as localStorage are unhappy with the default (about:blank).
 * SETUP FILES:
 * * lets you list files that will be included before all tests are run, so it’s perfect for this
 */

module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: [`node_modules`, `.cache`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
}
