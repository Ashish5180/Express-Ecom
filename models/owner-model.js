
import mongoose from "mongoose";


const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    
    products : {
        type: Array,
        default: []
    },
    picture : String,
    gstin: String
});

const ownerModal= mongoose.model("owner", ownerSchema);

export default ownerModal;
