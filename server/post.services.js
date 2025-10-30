import postDATABASE from "../models/post.model.js";
import fileServices from "./file.services.js";

class PostServices {
    async create(post, picture) {
      const filename = fileServices.save(picture)
        const newCreater = await postDATABASE.create({ ...post, picture: filename})
        return newCreater
    }

    async getALL() {
        const allPOST = await postDATABASE.find()
        return allPOST
    }
      async delete(id) {
    const deletepost = await postDATABASE.findByIdAndDelete(id)
    return deletepost
  }

  async edit(post, id) {
    if(!id) throw new Error('ID topilmadi')
      const isPOST = await this.getOne(id)
     if(!id) throw new Error('bunday id yoq')
        const updateDATA = await postDATABASE.findByIdAndUpdate(id, post , {
      new : true,
    })

    return updateDATA
  }

  async getOne(id) {
    const getoneid = await postDATABASE.findById(id)
    return getoneid
  }
}

export default new PostServices()