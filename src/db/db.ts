import mongoose from "mongoose";

export function connectToDB() {
  mongoose
    .connect(process.env.DB_URI!)
    .then(() => console.log("Connected Successfully.."))
    .catch((err) => console.log("DB error ", err));
}
