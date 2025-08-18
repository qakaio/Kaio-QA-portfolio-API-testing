import { test, expect } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// ============================ POSTS ============================
test.describe("Posts API", () => {

  test("GET /posts - should return all posts", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts`);
    expect(response.status()).toBe(200);

    const posts = await response.json();
    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);
  });

  test("GET /posts/:id - should return a post by ID", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);

    const post = await response.json();
    expect(post).toHaveProperty("id", 1);
    expect(post).toHaveProperty("title");
  });

  test("GET /posts?userId=1 - should return posts filtered by userId", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts?userId=1`);
    expect(response.status()).toBe(200);

    const posts = await response.json();
    posts.forEach((p: any) => {
      expect(p.userId).toBe(1);
    });
  });

  test("POST /posts - should create a new post", async ({ request }) => {
    const newPost = {
      title: "My first API test post",
      body: "This is the body of the test post",
      userId: 1
    };

    const response = await request.post(`${BASE_URL}/posts`, { data: newPost });
    expect(response.status()).toBe(201);

    const createdPost = await response.json();
    expect(createdPost).toMatchObject(newPost);
    expect(createdPost).toHaveProperty("id");
  });

  test("PUT /posts/:id - should update a post", async ({ request }) => {
    const updatedPost = { title: "Updated Post Title" };

    const response = await request.put(`${BASE_URL}/posts/1`, { data: updatedPost });
    expect(response.status()).toBe(200);

    const post = await response.json();
    expect(post).toMatchObject(updatedPost);
  });

  test("DELETE /posts/:id - should delete a post", async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
  });

});
