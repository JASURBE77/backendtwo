import { Schema, model } from "mongoose";


// export default postDATABASE;
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },

  
});

const postDATABASE = mongoose.model("POST", postSchema);

export default postDATABASE;

