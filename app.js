import express from "express";
import mongoose from "mongoose";
import postDATABASE from "./models/post.model.js";
import dotenv from "dotenv"
import router from "./router/post.routes.js";
import cors from 'cors'
import fileUpload from "express-fileupload";
dotenv.config()
const app = express();
app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}))

app.use(cors())
const postROUTER = router

app.use("/", postROUTER)

const PORT = process.env.PORT || 8080;


const ConnectedDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL).then(() => console.log('connected db'))
    app.listen(PORT, () =>
      console.log(`server nechanchi portligi http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`ulanishda yoki boshqa narsada xatolik bor : ${error}`);
    
  }
};
ConnectedDB()
