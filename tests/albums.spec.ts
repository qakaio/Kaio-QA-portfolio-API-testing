import { test, expect } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// ============================ ALBUMS ============================
test.describe("Albums API", () => {

  test("GET /albums - should return all albums", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/albums`);
    expect(response.status()).toBe(200);

    const albums = await response.json();
    expect(Array.isArray(albums)).toBeTruthy();
    expect(albums.length).toBeGreaterThan(0);
  });

  test("GET /albums/:id - should return an album by ID", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/albums/1`);
    expect(response.status()).toBe(200);

    const album = await response.json();
    expect(album).toHaveProperty("id", 1);
    expect(album).toHaveProperty("title");
  });

});
