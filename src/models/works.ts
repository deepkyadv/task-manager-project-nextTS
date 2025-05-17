import { Document, Schema, Types, model, models } from "mongoose";

export interface IWork extends Document {
  title: string;
  content: string;
  addedDate: Date;
  status: "pending" | "completed";
  userId: Types.ObjectId;
}

const workSchema = new Schema<IWork>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
    addedDate: {
      type: Date,
      default: () => new Date(), 
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "completed",
    },
    userId :{
      type: Schema.Types.ObjectId,
      ref: "USer",
      required: true
    }
   
  },
  {
    timestamps: true, 
  }
);

export const Work = models.Work || model<IWork>("Work", workSchema);
