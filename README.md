# API Testing Portfolio — Playwright + TypeScript + Postman

![Playwright Tests](https://github.com/qakaio/Kaio-QA-portfolio-API-testing/actions/workflows/api-tests.yml/badge.svg)
![Allure Report](https://img.shields.io/badge/Allure-Report-brightgreen?logo=allure)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Complete API testing demonstration using **Playwright + TypeScript** for automated tests and **Postman** for manual/exploratory testing, targeting the public [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.

Built by [Kaio Garcia](https://github.com/qakaio) — Senior QA Engineer

---

## Project Overview

| Aspect | Details |
|--------|---------|
| **Target API** | JSONPlaceholder (public REST API) |
| **Automated Framework** | Playwright + TypeScript |
| **Manual Collection** | Postman Collection v2.1 |
| **Resources Tested** | Users, Posts, Comments, Todos, Albums, Photos |
| **CI/CD** | GitHub Actions workflow included |
| **Reports** | HTML (GitHub Pages) + **Allure Report** |

---

## Features

| Feature | Implementation |
|---------|----------------|
| **Automated API Tests** | Playwright `request` API with TypeScript |
| **Manual/Exploratory** | Postman Collection with 50+ requests |
| **Resource Coverage** | Users, Posts, Comments, Todos, Albums, Photos |
| **Test Patterns** | CRUD, Schema validation, Error handling, Performance |
| **HTML Reports** | Playwright built-in HTML reporter |
| **Allure Reports** | Advanced reporting with trends, history, categorization |
| **CI/CD Integration** | GitHub Actions workflow included |

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Automation** | Playwright (API testing) |
| **Language** | TypeScript |
| **Manual Testing** | Postman Collection v2.1 |
| **Target API** | JSONPlaceholder (https://jsonplaceholder.typicode.com) |
| **Reporting** | Playwright HTML Reporter + **Allure Report** |
| **CI/CD** | GitHub Actions |

---

## Project Structure

```
Kaio-QA-portfolio-API-testing/
├── tests/
│   ├── users.spec.ts           # Users CRUD + validation
│   ├── posts.spec.ts           # Posts CRUD + relationships
│   ├── comments.spec.ts        # Comments CRUD
│   ├── todos.spec.ts           # Todos CRUD
│   └── albums.spec.ts           # Albums + Photos
├── @qakaio - JSONPlaceholder API.postman_collection.json
├── playwright.config.ts        # Playwright configuration
├── package.json
├── package-lock.json
├── tsconfig.json
├── .github/workflows/
│   └── api-tests.yml           # CI/CD pipeline (Allure + Pages)
└── README.md
```

---

## Test Coverage

The suite exercises users, posts, comments, todos, albums, and photos through
CRUD, relationship, error-handling, and response-validation scenarios. The
Postman collection provides complementary exploratory coverage for the same
public API.

**Total: 57 automated tests** + 50+ Postman requests

---

## Allure Report

**Live Allure Report**: [https://qakaio.github.io/Kaio-QA-portfolio-API-testing/allure-report/](https://qakaio.github.io/Kaio-QA-portfolio-API-testing/allure-report/)

### Features
- **Test Trends** — Pass/fail history over time
- **Categories** — Tests grouped by severity, type, resource
- **Retries** — Full retry history with timeline
- **Duration Analysis** — Slowest tests identification
- **Environment Info** — Browser, OS, Node version tracking

### CI/CD Integration
```yaml
# Allure generation in GitHub Actions
- name: Generate Allure Report
  run: npx allure generate allure-results --clean -o allure-report

- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./allure-report
    destination_dir: allure-report
```

---

## How to Run

### Prerequisites
- Node.js v18+
- npm v9+

### Installation
```bash
git clone https://github.com/qakaio/Kaio-QA-portfolio-API-testing.git
cd Kaio-QA-portfolio-API-testing
npm install
```

### Running Tests
```bash
# Run all tests (headless)
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run specific test file
npx playwright test tests/users.spec.ts

# Run with specific browser
npx playwright test --project=chromium

# View HTML report after run
npx playwright show-report
```

### Generate Allure Report Locally
```bash
# Run tests with Allure reporter
npx playwright test --reporter=line,allure-playwright

# Generate Allure HTML report
npx allure generate allure-results --clean -o allure-report

# Open Allure report
npx allure open allure-report
```

---

## CI/CD Pipeline (GitHub Actions)

| Workflow | Status |
|----------|--------|
| **API Tests** | [![API Tests](https://github.com/qakaio/Kaio-QA-portfolio-API-testing/actions/workflows/api-tests.yml/badge.svg)](https://github.com/qakaio/Kaio-QA-portfolio-API-testing/actions/workflows/api-tests.yml) |

**Pipeline Stages:**
1. **Setup** → Node.js 20 + npm cache
2. **Install** → `npm ci`
3. **Lint** → ESLint v9 flat config
4. **Test** → Playwright tests (all resources)
5. **Allure Report** → Generate + upload artifact
6. **Deploy** → GitHub Pages (on main branch)

---

## Live Reports

| Report Type | URL |
|-------------|-----|
| **Playwright HTML Report** | [https://qakaio.github.io/Kaio-QA-portfolio-API-testing/index.html](https://qakaio.github.io/Kaio-QA-portfolio-API-testing/index.html) |
| **Allure Report** | [https://qakaio.github.io/Kaio-QA-portfolio-API-testing/allure-report/](https://qakaio.github.io/Kaio-QA-portfolio-API-testing/allure-report/) |

---

## License

MIT License — Feel free to use as reference for your own portfolio.

---

## Author

**Kaio Garcia** — Senior QA Engineer  
🔗 [GitHub](https://github.com/qakaio) • [LinkedIn](https://linkedin.com/in/kaioqa) • [Portfolio](https://qakaio.github.io)