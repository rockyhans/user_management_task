import api from "./api";

export const userService = {
  getAll: (params) => api.get("/users", { params }).then((r) => r.data),

  getById: (id) => api.get(`/users/${id}`).then((r) => r.data),

  create: (data) => api.post("/users", data).then((r) => r.data),

  update: (id, data) => api.put(`/users/${id}`, data).then((r) => r.data),

  remove: (id) => api.delete(`/users/${id}`).then((r) => r.data),

  exportCSV: () =>
    api.get("/users/export/csv", { responseType: "blob" }).then((r) => r.data),
};
