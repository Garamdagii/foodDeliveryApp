import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 10,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    min: 8,
    max: 8,
  },
  address: {
    type: String,
    required: true,
  },
  isVerified: Boolean,
  role: {
    type: String,
    required: true,
    enam: ["User", "Admin"],
    default: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserModel = mongoose.model("User", userSchema);
