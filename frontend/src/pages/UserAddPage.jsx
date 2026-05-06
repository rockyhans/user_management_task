import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { userService } from "../services/userService";
import UserForm from "../components/users/UserForm";

export default function UserAddPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await userService.create(data);
      toast.success("User created successfully!");
      navigate("/users");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
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
            Add New User
          </h1>
          <p className="text-sm text-surface-500">Fill in the details below</p>
        </div>
      </div>

      <div className="card p-6 sm:p-8">
        <UserForm onSubmit={handleSubmit} isLoading={loading} />
      </div>
    </div>
  );
}
