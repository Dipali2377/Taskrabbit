import mongoose, { Schema } from "mongoose";

const UserSchema = Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  phone: { type: String },
  password: { type: String },
  zipcode: { type: String },
});

const userModel = mongoose.model("user", UserSchema);

export default userModel;
