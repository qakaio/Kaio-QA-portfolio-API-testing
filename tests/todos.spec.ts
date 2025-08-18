import { test, expect } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// ============================ TODOS ============================
test.describe("Todos API", () => {

  test("GET /todos - should return all todos", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/todos`);
    expect(response.status()).toBe(200);

    const todos = await response.json();
    expect(Array.isArray(todos)).toBeTruthy();
    expect(todos.length).toBeGreaterThan(0);
  });

  test("GET /todos/:id - should return a todo by ID", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/todos/1`);
    expect(response.status()).toBe(200);

    const todo = await response.json();
    expect(todo).toHaveProperty("id", 1);
    expect(todo).toHaveProperty("title");
  });

});
