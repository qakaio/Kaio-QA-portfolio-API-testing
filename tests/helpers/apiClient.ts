const BASE_URL = "https://jsonplaceholder.typicode.com";

export const apiClient = {
  async getUsers(request: any) {
    return request.get(`${BASE_URL}/users`);
  },

  async getUserById(request: any, userId: number) {
    return request.get(`${BASE_URL}/users/${userId}`);
  },

  async createUser(request: any, payload: Record<string, unknown>) {
    return request.post(`${BASE_URL}/users`, { data: payload });
  },

  async updateUser(request: any, userId: number, payload: Record<string, unknown>) {
    return request.put(`${BASE_URL}/users/${userId}`, { data: payload });
  },

  async deleteUser(request: any, userId: number) {
    return request.delete(`${BASE_URL}/users/${userId}`);
  },
};
