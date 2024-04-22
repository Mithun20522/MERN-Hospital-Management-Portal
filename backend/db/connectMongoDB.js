import mongoose from "mongoose";

export const connectMongoDB = (url) => {
    mongoose.connect(url)
    .then(() => console.log('MongoDB Connected.'))
    .catch((err) => console.log('Error while connecting mongodb', err));
}