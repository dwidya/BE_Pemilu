import { Request, Response } from "express";
import VoteServices from "../services/VoteServices";


export default new class VoteControllers {
  async find(req: Request, res: Response) {
    try {
      const response = await VoteServices.find()

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async insert(req: Request, res: Response) {
    try {
      const data = {
        name: req.body.name,
        alamat: req.body.alamat,
        jenisKelamin: req.body.jenisKelamin,
        paslon: req.body.paslon,
        Author: req.body.Author
      }

      const response = await VoteServices.insert(data)

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}