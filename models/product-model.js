import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
  
    image :Buffer,
    name : String,
    price : Number,
    discount:{
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String

});

const productModal = mongoose.model("product", productSchema);

export default productModal;
