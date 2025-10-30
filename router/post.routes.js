import express from "express"
import postDATABASE from "../models/post.model.js"
import postController from "../controllers/post.controller.js";
const router =  express.Router()


router.get('/get/api', postController.getALL)
router.post('/create', postController.create)
router.delete('/delete/post/api/:id' , postController.delete)
router.put('/updated/:id' , postController.Edit)
router.get('/get/api/one/:id', postController.getone)


export default router;