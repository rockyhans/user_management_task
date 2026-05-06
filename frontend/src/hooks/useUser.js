import { useState, useEffect } from "react";
import { userService } from "../services/userService";

export function useUser(id) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    userService
      .getById(id)
      .then((data) => setUser(data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { user, loading, error };
}
