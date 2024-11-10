import mongoose, { Schema, Document } from "mongoose";

export interface ICandidate extends Document {
  name: string;
  imageUrl: string;
  votes: number;
}
const candidateSchema = new Schema<ICandidate>({
  name: {
    type: String,
    unique: true,
  },
  imageUrl: String,
  votes: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model<ICandidate>("Candidate", candidateSchema);
