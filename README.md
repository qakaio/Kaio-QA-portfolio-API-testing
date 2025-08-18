# API Testing Portfolio

This project demonstrates **API testing** using **Playwright + TypeScript** with the public [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.

<img src="Test run screenshot - Passed.png"></img>
<img src="Passed - Postman.png"></img>

## 🚀 Features
- Manual API tests (Postman Collection)
- Automated API tests (Playwright)
- Organized structure for `Users`, `Posts`, `Comments`, `Todos`, and `Albums`
- GitHub Actions ready (can be added for CI/CD)
- HTML reports for test runs

## 🛠️ Tech Stack
- [Playwright](https://playwright.dev) for API testing
- TypeScript
- JSONPlaceholder public API

## 📂 Project Structure
```
api-testing-portfolio/
 ├── tests/              # Test files organized by resource
 ├── package.json        # Project dependencies and scripts
 ├── playwright.config.ts# Playwright configuration
 └── README.md           # Documentation
```

## ▶️ How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/qakaio/Kaio-QA-portfolio-API-testing.git
   cd Kaio-QA-portfolio-API-testing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run all tests:
   ```bash
   npm test
   ```

4. Generate an HTML report:
   ```bash
   npm run test:report
   ```
   Then open the `test-report/index.html` file in your browser.

---
