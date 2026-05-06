const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [/^[0-9]{10}$/, "Please provide a valid 10-digit mobile number"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: {
        values: ["Male", "Female", "Other"],
        message: "Gender must be Male, Female, or Other",
      },
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: {
        values: ["Active", "Inactive"],
        message: "Status must be Active or Inactive",
      },
      default: "Active",
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      minlength: [2, "Location must be at least 2 characters"],
      maxlength: [100, "Location cannot exceed 100 characters"],
    },
    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

userSchema.index({ email: 1 });
userSchema.index({ firstName: 1, lastName: 1 });

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
