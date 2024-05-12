import mongoose from "mongoose";

const DB_TYPE = 'mongodb';
const DB_HOST = 'localhost';
const DB_PORT = '27017';
const DB_NAME = 'notes';

export const connectDB = async () => {mongoose.connect(`${DB_TYPE}://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
console.log("connected")};