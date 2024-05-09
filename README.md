# Automated testing with Cypress

## What was accomplished in this project:

- How to configure the local development environment
- How to install and configure Cypress
- How to create automated graphical user interface tests
- How to create automated API tests (with visual _feedback_ in the browser)
- How to test APIs that require an access _token_
- How to create optimized and straight-to-the-point tests
- How to save the user session in the browser for later restoration
- How to validate if the user session is still valid and how to deal with it when it is invalidated
- How to clean and create the mass of data before testing begins
- How to protect sensitive data, such as passwords and access tokens
- How to organize tests and custom commands into different "layers" (_API, CLI, GUI_)
- How to structure tests thinking about preconditions, actions and expected results
- How to generate random data for use in automated tests
- How to enable experimental Cypress features
- How to execute commands at the operating system level
- And how to test file reading

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

## Installation

Run `npm install` (or `npm i`) to install the dev dependencies.

## Tests

You can run the tests simulating a desktop or mobile viewport.

### Run tests

Run `npm test` (or `npm t`) to run the test in headless mode on a desktop viewport.
Run `npm run cy:open` to open Cypress in interactive mode on a desktop viewport.
