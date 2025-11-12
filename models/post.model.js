import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema({
    title:{type: String, required:true},
    body:{type: String, required:true},

})

const postDATABASE = mongoose.model("POST", postSchema);

export default postDATABASE;

