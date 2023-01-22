import { CardEntity } from "../entity/card.entity";

export class ProtectedCardValue implements CardEntity {
  cardNumber: number;
  expirationMonth: string;
  expirationYear: string;
  email: string;

  constructor({
    cardNumber,
    expirationMonth,
    expirationYear,
    email
  }: {
    cardNumber: number,
    expirationMonth: string,
    expirationYear: string,
    email: string,
  }) {
    this.cardNumber = cardNumber;
    this.expirationMonth = expirationMonth;
    this.expirationYear = expirationYear;
    this.email = email;
  }
  
}