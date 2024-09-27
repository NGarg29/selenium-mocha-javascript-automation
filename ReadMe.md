
# Selenium Mocha JavaScript Automation

This project demonstrates how to set up and run automated tests using Selenium WebDriver with Mocha, written in TypeScript. The tests are designed to validate the functionality of web applications and can be run in different environments.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [npm](https://www.npmjs.com/get-npm)

## Installation

1. **Clone the repository**  
   Use the following command to clone the repository:
   ```bash
   git clone https://github.com/NGarg29/selenium-mocha-typescript-automation.git
   ```

2. **Navigate to the project directory**  
   ```bash
   cd selenium-mocha-typescript-automation
   ```

3. **Install dependencies**  
   Install the required npm packages by running:
   ```bash
   npm install
   ```

## Running Tests

To run the tests, use one of the following commands:

```bash
npm run test
```

or

```bash
npx mocha
```

The tests will execute, and the results will be displayed in the terminal.

## Project Structure

```bash
selenium-mocha-javascript-automation/
│
├── src/                     # Source folder for tests and utilities
│   ├── tests/               # Contains Mocha test files
│   └── helpers/             # Helper functions and utilities
├── package.json             # Project metadata and npm scripts
├── tsconfig.json            # TypeScript configuration file
├── .mocharc.json            # Mocha configuration file
└── README.md                # Project documentation (this file)
```
