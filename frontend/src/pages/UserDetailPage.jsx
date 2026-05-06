import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Pencil,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "../hooks/useUser";
import { userService } from "../services/userService";
import Avatar from "../components/ui/Avatar";
import StatusBadge from "../components/ui/StatusBadge";
import ConfirmModal from "../components/ui/ConfirmModal";
import Spinner from "../components/ui/Spinner";

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-surface-100 last:border-0">
      <div className="w-8 h-8 bg-surface-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={14} className="text-surface-500" />
      </div>
      <div>
        <p className="text-xs text-surface-400 font-medium uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm text-surface-800 font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
}

export default function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading, error } = useUser(id);
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await userService.remove(id);
      toast.success("User deleted successfully");
      navigate("/users");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="text-center py-24">
        <p className="text-brand-600 font-medium text-sm">
          {error || "User not found"}
        </p>
        <button
          onClick={() => navigate("/users")}
          className="btn-secondary mt-4"
        >
          Back to users
        </button>
      </div>
    );
  }

  const joinedDate = new Date(user.createdAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="animate-fade-in max-w-2xl mx-auto space-y-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg text-surface-500 hover:text-surface-900 hover:bg-surface-100 transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <h1 className="font-display font-800 text-2xl text-surface-900 tracking-tight">
          User Profile
        </h1>
      </div>

      <div className="card overflow-hidden">
        <div className="h-20 bg-gradient-to-br from-brand-600 to-brand-800 relative">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="px-6 pb-6">
          <div className="-mt-10 mb-4 flex items-end justify-between">
            <div className="ring-4 ring-white rounded-full">
              <Avatar
                src={user.profileImage}
                name={`${user.firstName} ${user.lastName}`}
                size="xl"
              />
            </div>
            <StatusBadge status={user.status} />
          </div>

          <h2 className="font-display font-800 text-xl text-surface-900">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-sm text-surface-500 mt-0.5">{user.email}</p>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-display font-700 text-sm text-surface-900 uppercase tracking-widest mb-2">
          Details
        </h3>
        <InfoRow icon={Mail} label="Email" value={user.email} />
        <InfoRow icon={Phone} label="Mobile" value={user.mobile} />
        <InfoRow icon={User} label="Gender" value={user.gender} />
        <InfoRow icon={MapPin} label="Location" value={user.location} />
        <InfoRow icon={Calendar} label="Joined" value={joinedDate} />
      </div>

      <div className="flex items-center gap-3 justify-end">
        <button onClick={() => setShowDelete(true)} className="btn-danger">
          <Trash2 size={15} />
          Delete User
        </button>
        <button
          onClick={() => navigate(`/users/${id}/edit`)}
          className="btn-primary"
        >
          <Pencil size={15} />
          Edit User
        </button>
      </div>

      <ConfirmModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={handleDelete}
        loading={deleting}
        title="Delete this user?"
        description={`${user.firstName} ${user.lastName} will be permanently removed.`}
      />
    </div>
  );
}
