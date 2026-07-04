# API Testing Portfolio — Playwright + TypeScript + Postman

Complete API testing demonstration using **Playwright + TypeScript** for automated tests and **Postman** for manual/exploratory testing, targeting the public [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.

Built by [Kaio Garcia](https://github.com/qakaio) — QA Engineer

---

## 📊 Project Overview

| Aspect | Details |
|--------|---------|
| **Target API** | JSONPlaceholder (public REST API) |
| **Automated Framework** | Playwright + TypeScript |
| **Manual Collection** | Postman Collection v2.1 |
| **Resources Tested** | Users, Posts, Comments, Todos, Albums, Photos |
| **CI/CD Ready** | GitHub Actions workflow included |

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
# Run all automated tests
npm test

# Run with HTML report
npm run test:report

# Run specific test file
npx playwright test tests/users.spec.ts

# Run with UI mode (interactive)
npx playwright test --ui

# Run in headed mode
npx playwright test --headed
```

### Postman Collection
```bash
# File: postman/@qakaio - JSONPlaceholder API.postman_collection.json

1. Open Postman
2. Click "Import" → "File" → Select the .json file
3. Collection appears in sidebar with organized folders
```

---

## 📊 Sample Test Patterns

### Schema Validation
```typescript
// tests/api-contract.spec.ts
import { test, expect } from '@playwright/test';
import { validateSchema } from '../utils/schema-validator';

test('Users API returns valid schema', async ({ request }) => {
  const response = await request.get('/users/1');
  expect(response.ok()).toBeTruthy();
  
  const body = await response.json();
  validateSchema(body, userSchema); // JSON Schema validation
});
```

### CRUD Operations
```typescript
// tests/posts.spec.ts
test('Create, read, update, delete post', async ({ request }) => {
  // CREATE
  const create = await request.post('/posts', {
    data: { title: 'Test', body: 'Content', userId: 1 }
  });
  expect(create.ok()).toBeTruthy();
  const post = await create.json();
  
  // READ
  const read = await request.get(`/posts/${post.id}`);
  expect(read.ok()).toBeTruthy();
  
  // UPDATE
  const update = await request.put(`/posts/${post.id}`, {
    data: { ...post, title: 'Updated' }
  });
  expect(update.ok()).toBeTruthy();
  
  // DELETE
  const del = await request.delete(`/posts/${post.id}`);
  expect([200, 204]).toContain(del.status());
});
```

### Error Handling
```typescript
test('Returns 404 for non-existent resource', async ({ request }) => {
  const response = await request.get('/users/999999');
  expect(response.status()).toBe(404);
});
```

---

## 📊 Reporting

```bash
# Generate HTML report
npm run test:report

# Opens automatically, or manually:
npx playwright show-report
```

Report includes:
- ✅ Pass/fail status per test
- 📊 Execution time per test
- 🔍 Trace viewer for debugging
- 📸 Screenshots on failure (if configured)
- 📊 Test duration trends

---

## 🔧 CI/CD Integration

### GitHub Actions (`.github/workflows/api-tests.yml`)
```yaml
name: API Tests
on: [push, pull_request, schedule]

jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm test
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

---

## 📦 Postman Collection

**File:** `postman/@qakaio - JSONPlaceholder API.postman_collection.json`

Collection includes:
- 📁 **Users** — GET/POST/PUT/DELETE, query params
- 📁 **Posts** — CRUD, user relationship
- 📁 **Comments** — CRUD, post relationship
- 📁 **Todos** — CRUD, completion toggle
- 📁 **Albums & Photos** — Nested resources
- 📁 **Error Cases** — 404, 400, 500 scenarios
- 📁 **Performance** — Response time assertions

### Import Instructions
1. Open Postman
2. Click **"Import"** → **"File"**
3. Select `@qakaio - JSONPlaceholder API.postman_collection.json`
4. Collection appears in sidebar with organized folders

---

## 🎯 Key Testing Patterns Demonstrated

| Pattern | Description |
|---------|-------------|
| **API Client Wrapper** | Reusable request methods with logging |
| **Test Data Factory** | Dynamic data generation for isolation |
| **Schema Validation** | JSON Schema validation for contracts |
| **Error Boundary Testing** | 404, 400, 500, timeout scenarios |
| **Data-Driven Tests** | Parameterized tests with external data |
| **Cleanup/Teardown** | Proper resource cleanup after tests |

---

## 📦 Requirements

- Node.js v18+
- npm v9+
- Internet connection (targets public JSONPlaceholder API)

---

## 📄 License

MIT License — Feel free to use as reference for your own API testing portfolio.

---

## 👤 Author

**Kaio Garcia** — QA Engineer
🔗 [GitHub](https://github.com/qakaio) • [LinkedIn](https://linkedin.com/in/kaioqa) • [Portfolio](https://qakaio.github.io)

---

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the excellent public test API
- [Playwright Team](https://playwright.dev/) for excellent API testing capabilities
- [Postman](https://www.postman.com/) for the industry-standard API client
