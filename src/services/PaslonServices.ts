import { Repository } from "typeorm";
import { Paslon } from "../entities/Paslon";
import { AppDataSource } from "../data-source";

export default new  class PaslonService {
  private readonly PaslonRepository: Repository<Paslon> = AppDataSource.getRepository(Paslon)

  async find() : Promise<object> {
    try {
      const paslon = await this.PaslonRepository
        .createQueryBuilder("paslon")
        .getMany()

      return {
        message: "success",
        ResApi: paslon
      }
    } catch (error) {
      throw error
    }
  }

  async insert(reqBody: Object) : Promise<Object> {
    try {
      const obj = await this.PaslonRepository.save(reqBody)

      return {
        message: "success",
        RestApi: obj
      }
    } catch (error) {
      throw error
    }
  }
}