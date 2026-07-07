# API Testing Portfolio — Playwright + TypeScript + Postman

Complete API testing demonstration using **Playwright + TypeScript** for automated tests and **Postman** for manual/exploratory testing, targeting the public [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.

Built by [Kaio Garcia](https://github.com/qakaio) — QA Engineer

---

## 📊 Project Overview

![Playwright Tests](https://github.com/qakaio/Kaio-QA-portfolio-API-testing/actions/workflows/api-tests.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

| Aspect | |
| Aspect | Details | ||
|--------|---------||
| **Target API** | JSONPlaceholder (public REST API) | |
| **Automated Framework** | Playwright + TypeScript | |
| **Manual Collection** | Postman Collection v2.1 | |
| **Resources Tested** | Users, Posts, Comments, Todos, Albums, Photos | |
| **CI/CD** | GitHub Actions workflow included | |

---

## 🚀 Features

| Feature | Implementation |
|---------|----------------|
| **Automated API Tests** | Playwright `request` API with TypeScript |
| **Manual/Exploratory** | Postman Collection with 50+ requests |
| **Resource Coverage** | Users, Posts, Comments, Todos, Albums, Photos |
| **Test Patterns** | CRUD, Schema validation, Error handling, Performance |
| **HTML Reports** | Playwright built-in HTML reporter |
| **CI/CD Integration** | GitHub Actions workflow included |

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Automation** | Playwright (API testing) |
| **Language** | TypeScript |
| **Manual Testing** | Postman Collection v2.1 |
| **Target API** | JSONPlaceholder (https://jsonplaceholder.typicode.com) |
| **Reporting** | Playwright HTML Reporter |
| **CI/CD** | GitHub Actions |

---

## 📂 Project Structure

```
Kaio-QA-portfolio-API-testing/
├── tests/
│   ├── users.spec.ts           # Users CRUD + validation
│   ├── posts.spec.ts           # Posts CRUD + relationships
│   ├── comments.spec.ts        # Comments CRUD
│   ├── todos.spec.ts           # Todos CRUD
│   ├── albums.spec.ts          # Albums + Photos
│   └── api-contract.spec.ts    # Schema validation tests
├── postman/
│   └── @qakaio - JSONPlaceholder API.postman_collection.json
├── utils/
│   ├── api-client.ts           # Reusable API client wrapper
│   ├── test-data.ts            # Test data generators
│   └── schema-validator.ts     # JSON Schema validation
├── playwright.config.ts        # Playwright configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✅ Test Coverage

| Resource | Tests | Patterns Covered |
|----------|-------|------------------|
| **Users** | 12 tests | GET/POST/PUT/DELETE, 404 handling, schema validation |
| **Posts** | 15 tests | CRUD, user-post relationship, comments linkage |
| **Comments** | 10 tests | CRUD, post-comment relationship |
| **Todos** | 8 tests | CRUD, completion toggle |
| **Albums/Photos** | 10 tests | Nested resources, album-photo relationship |
| **Contract Testing** | 6 tests | JSON Schema validation, response structure |

**Total: 57 automated tests** + 50+ Postman requests

---

## 🛠 How to Run

### Prerequisites
- Node.js v18+
- npm v9+

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/qakaio/Kaio-QA-portfolio-API-testing.git
cd Kaio-QA-portfolio-API-testing

# 2. Install dependencies
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

---

## 📊 CI/CD Pipeline (GitHub Actions)

| Workflow | Status |
|----------|--------|
| **API Tests** | [![API Tests](https://github.com/qakaio/Kaio-QA-portfolio-API-testing/actions/workflows/api-tests.yml/badge.svg)](https://github.com/qakaio/Kaio-QA-portfolio-API-testing/actions/workflows/api-tests.yml) |

**Pipeline Stages:**
1. **Setup** → Node.js 20 + npm cache
2. **Install** → `npm ci`
3. **Lint** → ESLint v9 flat config
4. **Test** → Playwright tests (all resources)
5. **Report** → Upload HTML report as artifact
6. **Deploy** → GitHub Pages (on main branch)

---

## 📄 License

MIT License — Feel free to use as reference for your own portfolio.

---

## 👤 Author

**Kaio Garcia** — QA Engineer  
🔗 [GitHub](https://github.com/qakaio) • [LinkedIn](https://linkedin.com/in/kaioqa) • [Portfolio](https://qakaio.github.io)