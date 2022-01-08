# End-to-End tests

>The `e2e` folder contains configuration and features for tests

## Table of contents

- [End-to-End tests](#end-to-end-tests)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Development setup](#development-setup)
    - [CI/CD](#cicd)
  - [Good to know](#good-to-know)
    - [What do each dependencies](#what-do-each-dependencies)
    - [Cypress usage](#cypress-usage)
    - [IDE support](#ide-support)
      - [WebStorm](#webstorm)
      - [Intellij IDEA](#intellij-idea)
      - [Visual Studio Code](#visual-studio-code)
    - [TypeScript Support with Webpack](#typescript-support-with-webpack)

## Installation

To run end-to-end tests, we are using `Node`, `NPM`, `Docker`, `Docker Compose` and `Chrome`. Go check them out if you don't have them locally installed.

## Usage

To execute the end-to-end tests via [Cypress](https://www.cypress.io/):

- In one terminal, run `npm run dev` to start local environment
- In a seconde terminal, run `npm run e2e:ci`

### Development setup

To make evolve tests, you can simulate a local environment and start cypress in debug mode inside Chrome.

To start the local environment :

```shell script
npm run dev
```

To start Cypress in debug mode inside Chrome

```shell script
npm run e2e:debug
```

### CI/CD

To  execute the end-to-end tests like CI/CID, run

```shell script
./scripts/ci-teste2e.sh
```

After end-to-end tests are passed, the docker-compose stopped

## Good to know

### What do each dependencies

We will explain why we are using some devDependencies listed in [`package.json`](package.json)

- **cypress** : Front end testing tool
- **cypress-cucumber-preprocessor** : Adds support for using feature files when testing with Cypress
- **@cypress/webpack-preprocessor** : Cypress preprocessor for bundling JavaScript via webpack
- **multiple-cucumber-html-reporter** : Multiple Cucumber HTML Reporter transforms the Cucumber JSON output to a beautiful report

### Cypress usage

You can find the documentation about Cypress at <https://www.cypress.io/>

We recommend to you to glance over this documentation and also on [best practices](https://docs.cypress.io/guides/references/best-practices.html)

### IDE support

#### WebStorm

If you want WebStorm to resolve your steps, use the capitalized `Given/When/Then` function names (instead of the initial given/when/then).

Note, only WebStorm 2019.2 and later versions are able to [resolve steps located outside of a step_definitions folder](https://youtrack.jetbrains.com/issue/WEB-11505)

#### Intellij IDEA

Intellij IDEA Community Edition does not support cucumber in javascript, but the Ultimate Edition can provide the same level support for step resolution as WebStorm.

To enable cucumber step resolution in Intellij IDEA Ulimate edition you will need to download and enable the JetBrains [Cucumber JS plugin](https://plugins.jetbrains.com/plugin/7418-cucumber-js/). In WebStorm this plugin is already bundled into the distribution.

#### Visual Studio Code

To get vscode to resolve your steps, install the [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) extension from the marketplace.

You will also need to tell the extension the locations of your feature and step definition files [as described here](https://github.com/alexkrechik/VSCucumberAutoComplete#settings-example).

Note, that unlike WebStorm which will correctly identify multiple implementations of matching steps, the vscode extension currently resolves to the first matching occurence it finds on its path.

### TypeScript Support with Webpack

We use a Webpack loader to process feature files (TypeScript supported). To see how it is done please take
a look here: [cypress-cucumber-webpack-typescript-example](https://github.com/TheBrainFamily/cypress-cucumber-webpack-typescript-example)
