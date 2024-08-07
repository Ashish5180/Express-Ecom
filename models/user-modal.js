
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart : {
        type: Array,
        default: []
    },
    isadmin: Boolean,
    orders : {
        type: Array,
        default: []
    },
    contact: Number,
    picture : String
});

const user = mongoose.model("user", userSchema);

export default user
