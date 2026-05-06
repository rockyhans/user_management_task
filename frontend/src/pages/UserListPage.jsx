import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Download, Search, RefreshCw } from "lucide-react";
import toast from "react-hot-toast";
import { useUsers } from "../hooks/useUsers";
import { userService } from "../services/userService";
import UserTable from "../components/users/UserTable";
import Pagination from "../components/ui/Pagination";
import EmptyState from "../components/ui/EmptyState";
import ConfirmModal from "../components/ui/ConfirmModal";
import Spinner from "../components/ui/Spinner";

export default function UserListPage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [exporting, setExporting] = useState(false);

  const {
    users,
    pagination,
    loading,
    error,
    page,
    setPage,
    setSearch,
    refetch,
  } = useUsers();

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      setPage(1);
      setSearch(searchInput.trim());
    },
    [searchInput, setPage, setSearch],
  );

  const handleClearSearch = () => {
    setSearchInput("");
    setSearch("");
    setPage(1);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await userService.remove(deleteTarget._id);
      toast.success(`${deleteTarget.firstName} deleted successfully`);
      setDeleteTarget(null);
      refetch();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      const blob = await userService.exportCSV();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "users.csv";
      a.click();
      URL.revokeObjectURL(url);
      toast.success("CSV exported successfully");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-800 text-2xl text-surface-900 tracking-tight">
            User Management
          </h1>
          <p className="text-sm text-surface-500 mt-0.5">
            {pagination ? `${pagination.totalUsers} total users` : "Loading..."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            disabled={exporting}
            className="btn-secondary"
          >
            {exporting ? <Spinner size="sm" /> : <Download size={15} />}
            Export CSV
          </button>
          <button
            onClick={() => navigate("/users/add")}
            className="btn-primary"
          >
            <Plus size={15} />
            Add User
          </button>
        </div>
      </div>

      <div className="card p-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search by name, email, location…"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="input-field pl-9 pr-8"
            />
            {searchInput && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600"
              >
                ✕
              </button>
            )}
          </div>
          <button type="submit" className="btn-primary px-5">
            Search
          </button>
          <button
            type="button"
            onClick={refetch}
            className="btn-secondary px-3"
            title="Refresh"
          >
            <RefreshCw size={15} className={loading ? "animate-spin" : ""} />
          </button>
        </form>
      </div>

      <div className="card p-4 sm:p-6">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Spinner size="lg" />
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-brand-600 font-medium text-sm">{error}</p>
            <button onClick={refetch} className="btn-secondary mt-3">
              Retry
            </button>
          </div>
        ) : users.length === 0 ? (
          <EmptyState
            title="No users found"
            description="Try adjusting your search or add a new user."
          />
        ) : (
          <>
            <UserTable users={users} onDelete={setDeleteTarget} />
            {pagination && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={(p) => setPage(p)}
              />
            )}
          </>
        )}
      </div>

      <ConfirmModal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDeleteConfirm}
        loading={deleting}
        title="Delete user?"
        description={
          deleteTarget
            ? `This will permanently delete ${deleteTarget.firstName} ${deleteTarget.lastName}. This action cannot be undone.`
            : ""
        }
      />
    </div>
  );
}
