import { Request, Response } from "express";
import ArticelServices from "../services/ArticelService";
import { CreateArticelSchema } from "../libs/Validator/ArticelValidator";
import cloudinary from "../libs/cloudinary"

export default new class ArticelControllers {
  async find(req: Request, res: Response) {
    try {
      const response = await ArticelServices.find()

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
  async insert(req: Request, res: Response) {
    try {
      const data = {
        title: req.body.title,
        image: res.locals.filename,
        contect: req.body.contect,
        Author: req.body.Author
      }

      const { error, value } = CreateArticelSchema.validate(data)
      if(error) return res.status(400).json(error.details[0].message)

      cloudinary.upload()
      const cloudinaryRes = await cloudinary.destination(value.image)

      const obj = {
        title: req.body.title,
        image: cloudinaryRes.secure_url,
        contect: req.body.contect,
        Author: req.body.Author
      }

      console.log(value);
      

      const response = await ArticelServices.insert(obj)

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

