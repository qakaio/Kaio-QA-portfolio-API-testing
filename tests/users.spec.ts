import { test, expect } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// ============================ USERS ============================
test.describe("Users API", () => {
  
  test("GET /users - should return all users", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users`);
    expect(response.status()).toBe(200);

    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
  });

  test("GET /users/:id - should return a user by ID", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users/1`);
    expect(response.status()).toBe(200);

    const user = await response.json();
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("email");
  });

  test("POST /users - should create a new user", async ({ request }) => {
    const newUser = {
      name: "Kaio Rampz",
      username: "kaio_r",
      email: "kaio@example.com"
    };

    const response = await request.post(`${BASE_URL}/users`, { data: newUser });
    expect(response.status()).toBe(201);

    const createdUser = await response.json();
    expect(createdUser).toMatchObject(newUser);
    expect(createdUser).toHaveProperty("id");
  });

  test("PUT /users/:id - should update an existing user", async ({ request }) => {
    const updatedUser = { name: "Kaio Updated" };

    const response = await request.put(`${BASE_URL}/users/1`, { data: updatedUser });
    expect(response.status()).toBe(200);

    const user = await response.json();
    expect(user).toMatchObject(updatedUser);
  });

  test("DELETE /users/:id - should delete a user", async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/users/1`);
    expect(response.status()).toBe(200);
  });

});
