import { Request, Response } from "express";
import PaslonServices from "../services/PaslonServices";

export default new class TodoControllers {
  async find(req: Request, res: Response) {
    try {
      const response = await PaslonServices.find()

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
  async insert(req: Request, res: Response) {
    try {
      const data = {
        name: req.body.name,
        noPaslon: req.body.noPaslon,
        visiMisi: req.body.visiMisi,
        Author: req.body.Author
      }

      const response = await PaslonServices.insert(data)

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
