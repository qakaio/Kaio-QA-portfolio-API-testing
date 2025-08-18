import { test, expect } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// ============================ COMMENTS ============================
test.describe("Comments API", () => {

  test("GET /comments - should return all comments", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/comments`);
    expect(response.status()).toBe(200);

    const comments = await response.json();
    expect(Array.isArray(comments)).toBeTruthy();
    expect(comments.length).toBeGreaterThan(0);
  });

  test("GET /comments?postId=1 - should return comments filtered by postId", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/comments?postId=1`);
    expect(response.status()).toBe(200);

    const comments = await response.json();
    comments.forEach((c: any) => {
      expect(c.postId).toBe(1);
    });
  });

  test("POST /comments - should create a new comment", async ({ request }) => {
    const newComment = {
      postId: 1,
      name: "Test Comment",
      email: "kaio@example.com",
      body: "This is a test comment"
    };

    const response = await request.post(`${BASE_URL}/comments`, { data: newComment });
    expect(response.status()).toBe(201);

    const createdComment = await response.json();
    expect(createdComment).toMatchObject(newComment);
    expect(createdComment).toHaveProperty("id");
  });

});
