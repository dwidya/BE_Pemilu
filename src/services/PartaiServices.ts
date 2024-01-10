import { Repository } from "typeorm";
import { Partai } from "../entities/Partai";
import { AppDataSource } from "../data-source";

export default new  class PartaiService {
  private readonly PartaiRepository: Repository<Partai> = AppDataSource.getRepository(Partai)

  async find() : Promise<object> {
    try {
      const Partai = await this.PartaiRepository
        .createQueryBuilder("Partai")
        .getMany()

      return {
        message: "success",
        ResApi: Partai
      }
    } catch (error) {
      throw error
    }
  }
  async insert(reqBody: Object) : Promise<Object> {
    try {
      const obj = await this.PartaiRepository.save(reqBody)

      return {
        message: "success",
        RestApi: obj
      }
    } catch (error) {
      throw error
    }
  }
}