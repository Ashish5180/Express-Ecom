
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
    orders : {
        type: Array,
        default: []
    },
    contact: Number,
    picture : String
});

const userModal = mongoose.model("user", userSchema);

export default userModal;
