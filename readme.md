# Playwright UI Automation Project

## About the Project

This repository contains my practical exercises and UI automation tests using Playwright with TypeScript.

The project is part of my journey toward becoming a QA Automation Engineer.

## Technologies

- Playwright
- TypeScript
- Node.js
- Git and GitHub

## Test Environment

Website: https://lab.becomeqa.com

## Current Test Cases

| Test Case | Description | Status |
|---|---|---|
| User can log in | Practice login modal interactions and page visibility assertions | In progress |

## Project Structure

```text
my_first_playwright_test/
├── tests/
│   └── login.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## How to Run the Tests

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run tests:

```bash
npx playwright test
```

Run tests with browser visible:

```bash
npx playwright test --headed
```

View HTML report:

```bash
npx playwright show-report
```

## Learning Objectives

- Understand Playwright fundamentals.
- Work with locators and web elements.
- Automate user interactions.
- Practice assertions and validations.
- Execute and debug automated tests.
- Apply QA testing principles.

## Author

Osvaldo Veites

QA Engineer | Functional Testing | API Testing | Test Automation

GitHub: [OsvaldoVeites](https://github.com/OsvaldoVeites)