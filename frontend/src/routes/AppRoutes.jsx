import { Routes, Route, Navigate } from "react-router-dom";
import UserListPage from "../pages/UserListPage";
import UserAddPage from "../pages/UserAddPage";
import UserEditPage from "../pages/UserEditPage";
import UserDetailPage from "../pages/UserDetailPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/users" element={<UserListPage />} />
      <Route path="/users/add" element={<UserAddPage />} />
      <Route path="/users/:id/edit" element={<UserEditPage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
      <Route path="*" element={<Navigate to="/users" replace />} />
    </Routes>
  );
}
