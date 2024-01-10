import { Request, Response } from "express";
import PartaiServices from "../services/PartaiServices";

export default new class PartaiControllers {
  async find(req: Request, res: Response) {
    try {
      const response = await PartaiServices.find()

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async insert(req: Request, res: Response) {
    try {
      const data = {
        name: req.body.name,
        leader: req.body.leader,
        visiMisi: req.body.visiMisi,
        alamat: req.body.alamat,
        Author: req.body.Author
      }

      const response = await PartaiServices.insert(data)

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}