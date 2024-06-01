import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide a name"] },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: { type: String, required: [true, "Please provide a password"] },
});

const User = mongoose.model("users", userSchema) || mongoose.models.users;

export default User;
