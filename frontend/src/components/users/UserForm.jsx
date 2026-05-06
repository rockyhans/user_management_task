import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { User, Mail, Phone, MapPin, Upload } from "lucide-react";
import Spinner from "../ui/Spinner";

const FIELD_RULES = {
  firstName: {
    required: "First name is required",
    minLength: { value: 2, message: "Min 2 characters" },
    maxLength: { value: 50, message: "Max 50 characters" },
  },
  lastName: {
    required: "Last name is required",
    minLength: { value: 2, message: "Min 2 characters" },
    maxLength: { value: 50, message: "Max 50 characters" },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: "Enter a valid email address",
    },
  },
  mobile: {
    required: "Mobile number is required",
    pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" },
  },
  gender: { required: "Gender is required" },
  status: { required: "Status is required" },
  location: {
    required: "Location is required",
    minLength: { value: 2, message: "Min 2 characters" },
    maxLength: { value: 100, message: "Max 100 characters" },
  },
};

export default function UserForm({ defaultValues, onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const profileImage = watch("profileImage");

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {profileImage && (
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Profile preview"
            className="w-20 h-20 rounded-full object-cover ring-4 ring-surface-200"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
      )}

      <div>
        <label className="label">
          <Upload size={14} className="inline mr-1" />
          Profile Image URL
          <span className="text-surface-400 font-normal ml-1">(optional)</span>
        </label>
        <input
          type="url"
          placeholder="https://example.com/photo.jpg"
          className="input-field"
          {...register("profileImage")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label">
            <User size={14} className="inline mr-1" />
            First Name <span className="text-brand-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            className={`input-field ${errors.firstName ? "input-field-error" : ""}`}
            {...register("firstName", FIELD_RULES.firstName)}
          />
          {errors.firstName && (
            <p className="error-text">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="label">
            Last Name <span className="text-brand-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            className={`input-field ${errors.lastName ? "input-field-error" : ""}`}
            {...register("lastName", FIELD_RULES.lastName)}
          />
          {errors.lastName && (
            <p className="error-text">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label">
            <Mail size={14} className="inline mr-1" />
            Email Address <span className="text-brand-500">*</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className={`input-field ${errors.email ? "input-field-error" : ""}`}
            {...register("email", FIELD_RULES.email)}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>

        <div>
          <label className="label">
            <Phone size={14} className="inline mr-1" />
            Mobile Number <span className="text-brand-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="10-digit number"
            className={`input-field ${errors.mobile ? "input-field-error" : ""}`}
            {...register("mobile", FIELD_RULES.mobile)}
          />
          {errors.mobile && (
            <p className="error-text">{errors.mobile.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label">
            Gender <span className="text-brand-500">*</span>
          </label>
          <div className="flex items-center gap-4 pt-1">
            {["Male", "Female", "Other"].map((g) => (
              <label
                key={g}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  value={g}
                  className="accent-brand-600 w-4 h-4 cursor-pointer"
                  {...register("gender", FIELD_RULES.gender)}
                />
                <span className="text-sm text-surface-700 group-hover:text-surface-900">
                  {g}
                </span>
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="error-text">{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label className="label">
            Status <span className="text-brand-500">*</span>
          </label>
          <select
            className={`input-field ${errors.status ? "input-field-error" : ""}`}
            {...register("status", FIELD_RULES.status)}
          >
            <option value="">Select status...</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          {errors.status && (
            <p className="error-text">{errors.status.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="label">
          <MapPin size={14} className="inline mr-1" />
          Location <span className="text-brand-500">*</span>
        </label>
        <input
          type="text"
          placeholder="City, Country"
          className={`input-field ${errors.location ? "input-field-error" : ""}`}
          {...register("location", FIELD_RULES.location)}
        />
        {errors.location && (
          <p className="error-text">{errors.location.message}</p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="btn-primary w-full justify-center py-3"
          disabled={isLoading}
        >
          {isLoading && <Spinner size="sm" />}
          {isLoading ? "Saving..." : "Save User"}
        </button>
      </div>
    </form>
  );
}
