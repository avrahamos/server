import mongoose from "mongoose";
import 'dotenv/config'

export const connectToMongo = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_URL!);
  } catch (err) {
    console.log(err);
  }
};
