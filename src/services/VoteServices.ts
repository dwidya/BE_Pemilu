import { Repository } from "typeorm";
import { Vote } from "../entities/Vote";
import { AppDataSource } from "../data-source";

export default new  class VoteService {
  private readonly VoteRepository: Repository<Vote> = AppDataSource.getRepository(Vote)

  async find() : Promise<object> {
    try {
      const Vote = await this.VoteRepository
        .createQueryBuilder("Vote")
        .getMany()

      return {
        message: "success",
        ResApi: Vote
      }
    } catch (error) {
      throw error
    }
  }

  async insert(reqBody: Object) : Promise<Object> {
    try {
      const obj = await this.VoteRepository.save(reqBody)

      return {
        message: "success",
        RestApi: obj
      }
    } catch (error) {
      throw error
    }
  }
}