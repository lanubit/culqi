import { CardEntity } from "../entity/card.entity";

export interface CardRepository {
  findByToken(token:string):Promise<CardEntity | null>
}
