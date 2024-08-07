import mongoose from "mongoose";

mongoose
.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => {
    console.log("database connected");
})
.catch((err) => {
    console.log(err);
})

const db = mongoose.connection;

export default db;