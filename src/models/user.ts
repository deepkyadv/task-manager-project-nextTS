import { Document, Model, Schema, model, models } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  about?: string;
  profileUrl: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      default: "",
    },
    profileUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const User: Model<IUser> =
  models.User || model<IUser>("User", userSchema);
