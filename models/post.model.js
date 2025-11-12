// import { Schema, model } from "mongoose";

// const postSchema = new Schema({
//     title:{type: String, required:true},
//     body:{type: String, required:true},

// })

// const postDATABASE = mongoose.model("POST", postSchema);

// // export default postDATABASE;
// import mongoose from "mongoose";

// const postSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   picture: { type: String, required: true },
//   view: { type: String, required: true },
//   rating: { type: String, required: true},
  
  
// });

// const postDATABASE = mongoose.model("POST", postSchema);

// export default postDATABASE;
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },         // Kino nomi
  description: { type: String, required: true },   // Kino haqida qisqacha tavsif
  picture: { type: String, required: true },        // Kino rasmi (URL)
  trailer: { type: String },                       // Treyler video linki (ixtiyoriy)
  genre: { type: [String], required: true },       // Janrlar (masalan: ["Action", "Comedy"])
  releaseYear: { type: Number, required: true },   // Chiqarilgan yil
  duration: { type: String, required: true },      // Davomiyligi (masalan: "2h 15m")
  country: { type: String, required: true },       // Mamlakat
  director: { type: String, required: true },      // Rejissor
  cast: { type: [String], required: true },        // Asosiy aktyorlar
  rating: { type: String, default: 0 },            // Reyting (0 dan 10 gacha)
  views: { type: String, default: 0 },             // Ko‘rishlar soni
  createdAt: { type: Date, default: Date.now },    // Qo‘shilgan sana
});

const movieDatabase = mongoose.model("Movie", movieSchema);

export default movieDatabase;
