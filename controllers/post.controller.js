import postDATABASE from "../models/post.model.js";
import postServices from "../server/post.services.js";

class postController {
  async getALL(req, res) {
    try {
      const allpostget = await postServices.getALL();
      res.status(200).json(allpostget);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async create(req , res) {
    try {;
  const newPOst = await postServices.create(req.body, req.files.picture)
  res.status(201).json(newPOst);
} catch (error) {
  res.status(500).json(error);   
}
  }


  async delete(req ,res) {
   try {
   const postdelete =  await postServices.delete(req.params.id)
   res.status(200).json(postdelete)  
   } catch (error) {
  res.status(500).json(error);   
    
   }
  }

  async Edit(req , res) {
    try {
      const {body ,  params} = req
      const rename =  await postServices.edit(body , params.id)
      res.status(200).json(rename)  
    } catch (error) {
  res.status(500).json(error);   
    }
  }
  async getone(req, res) {
        try {
      
      const getidproduct =  await postServices.getOne(req.params.id)
      res.status(200).json(getidproduct)  
    } catch (error) {
  res.status(500).json(error);   
    }
  }

}

export default new postController();
