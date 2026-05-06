import { useState, useEffect, useCallback } from "react";
import { userService } from "../services/userService";

export function useUsers(initialPage = 1, initialSearch = "") {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [search, setSearch] = useState(initialSearch);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await userService.getAll({ page, limit: 5, search });
      setUsers(data.data);
      setPagination(data.pagination);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const refetch = () => fetchUsers();

  return {
    users,
    pagination,
    loading,
    error,
    page,
    setPage,
    search,
    setSearch,
    refetch,
  };
}
