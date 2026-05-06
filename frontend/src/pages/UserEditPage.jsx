import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { userService } from "../services/userService";
import { useUser } from "../hooks/useUser";
import UserForm from "../components/users/UserForm";
import Spinner from "../components/ui/Spinner";

export default function UserEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading: fetching, error } = useUser(id);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (data) => {
    setSaving(true);
    try {
      await userService.update(id, data);
      toast.success("User updated successfully!");
      navigate("/users");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg text-surface-500 hover:text-surface-900 hover:bg-surface-100 transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="font-display font-800 text-2xl text-surface-900 tracking-tight">
            Edit User
          </h1>
          {user && (
            <p className="text-sm text-surface-500">
              {user.firstName} {user.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="card p-6 sm:p-8">
        {fetching ? (
          <div className="flex justify-center py-16">
            <Spinner size="lg" />
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-brand-600 text-sm font-medium">{error}</p>
            <button
              onClick={() => navigate("/users")}
              className="btn-secondary mt-3"
            >
              Back to list
            </button>
          </div>
        ) : user ? (
          <UserForm
            defaultValues={{
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              mobile: user.mobile,
              gender: user.gender,
              status: user.status,
              location: user.location,
              profileImage: user.profileImage,
            }}
            onSubmit={handleSubmit}
            isLoading={saving}
          />
        ) : null}
      </div>
    </div>
  );
}
