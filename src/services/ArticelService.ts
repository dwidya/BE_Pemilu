import { Repository } from "typeorm";
import { Articel } from "../entities/Articel";
import { AppDataSource } from "../data-source";

export default new  class ArticelService {
  private readonly ArticelRepository: Repository<Articel> = AppDataSource.getRepository(Articel)

  async find() : Promise<object> {
    try {
      const Articel = await this.ArticelRepository
        .createQueryBuilder("Articel")
        .getMany()

      return {
        message: "success",
        ResApi: Articel
      }
    } catch (error) {
      throw error
    }
  }
  async insert(reqBody: Object) : Promise<Object> {
    try {
      const obj = await this.ArticelRepository.save(reqBody)

      return {
        message: "success",
        RestApi: obj
      }
    } catch (error) {
      throw error
    }
  }
}