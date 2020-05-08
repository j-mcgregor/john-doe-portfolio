# John Doe Portfolio

This project will be the final REPO for a proposed course on building a JAM Stack portfolio with a heavy focus on testing and CI/CD

---

## FOREWORD

---

A major theme through this project is to create something fairly simple, but creating it very well, from scratch and conception through development to deployment, tested every step of the way. This repo should be the completed final product, and therefore shouuld be expertly documented

---

## AIMS

---

It could be argued 'Development' itself is only a part of Software Development. Everyone has their different views on what this might include, but for me SD is like a tripod, with its 3 legs being:

1. Development
    - Front, Back, Full Stack, or other, Development is the _building_ and _connection_ of code logic to fulfil tasks
2. Testing
    - Unit, Integration, System, End-to-end / Regression, Smoke etc. all help to preserve quality of code and ensure confidence that new features don't inadvertently introduce breaking changes
3. DevOps
    - The art of taking new features, putting them through the spinner and putting them live as seamlessly, securely and efficiently as possible

The overall aim of this project is to devote time and attention to each of these, to the point that any new features can't go live unless certain quality gates (eg test coverage) are passed.

The final result should serve as a solid learning platform to take forward with confidence into new projects

---

## TECHNOLOGY

---

The list of major and minor tech in this repo, with a brief description of each and a link to that tech's documentation / home page

-   [React](https://reactjs.org/) - React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance
-   [Gatsby](https://www.gatsbyjs.org/docs/) - Gatsby is a blazing fast modern site generator for React. Renders static HTML on the server and sends it to the client where its saved in the cache, allowing for super fast rendering
-   [Typescript](https://www.typescriptlang.org/docs/home.html) - TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript
-   [Sass](https://sass-lang.com/) - Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects
-   [Styled Components](https://styled-components.com/3) - CSS-in-JS library for using SASS withing React components
-   [Jest](https://jestjs.io/en/) - Javascript testing framework with minimal config, easy integration, detailed output and work well with other test runners
-   [Jest JUnit](https://www.npmjs.com/package/jest-junit) - A Jest reporter that creates compatible junit xml files
-   [Jest Sonar Reporter](https://www.npmjs.com/package/jest-sonar-reporter) - jest-sonar-reporter is a custom results processor for Jest. The processor converts Jest's output into Sonar's generic test data format
-   [TS-Jest](https://kulshekhar.github.io/ts-jest/) - ts-jest is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript
-   [@testing-library](https://testing-library.com/) - useful set of testing tools split up into various libraries to allow better testing
-   [CircleCI](https://circleci.com/) - Cloud-based SASS that acts as our pipeline (cloud version of Jenkins)
-   [SonarCloud](https://sonarcloud.io/) - Cloud-based SASS that enables us to run our code through configurable quality gates such as code coverage, code smells, vulnerabilities and bad practices
-   [Github](https://github.com/) - Cloud-based code storage and management platform, for managing and organising Git projects
-   [Prettier](https://prettier.io/) - opinionated code formatter for enforcing code quality. Especially useful with 'Format on Save' setting
-   [ESLint](https://eslint.org/) - ESLint statically analyzes your Javascript code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline
-   [Prismic](https://prismic.io/) - Prismic is a cloud-based headless content management tool (serves JSON) that can plugin directly with Gatsby
-   [Netlify](https://www.netlify.com/) - Advanced all-in-one platform for serving static (and JAM stack) sites. Like Github Pages on steroids
-   [Axios](https://github.com/axios/axios) - Promise-based HTTP request plugin for getting data from across the web
-   [FlexboxGrid(2)](https://evgenyrodionov.github.io/flexboxgrid2/) - Lightweight flex-based SCSS-grid system
-   [React Helmet](https://github.com/nfl/react-helmet) - Helmet takes plain HTML tags and outputs plain HTML tags, but is used inside React components, which makes it the perfect tool for dynamically generating <head> data
-   [Husky](https://github.com/typicode/husky) - Husky can prevent bad git commit, git push and more
-   [Font Awesome](https://fontawesome.com/) - vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit

---

## WORKFLOW

---

This project was built with 4 pages in mind over 5 "sprints":

-   **SPRINT 1**
    -   Planning
        -   Intro and overview
        -   Main tech used and why
    -   Design
        -   UX wireframes
        -   Git workflow
    -   Installation
    -   Configuration
        -   Typescript
        -   Jest
        -   Husky
        -   Netlify and Prismic
-   **SPRINT 2**
    -   Styling & Theme
    -   Shared components
        -   Navbar
        -   Footer
        -   Not Found
    -   Landing Page
        -   Hero
        -   Banner
        -   About
-   **SPRINT 3**
    -   Contact Page
-   **SPRINT 4**
    -   Gallery Page
-   **SPRINT 5**
    -   Blog Page
