import { CardEntity } from "../entity/card.entity";

export class CardValue implements CardEntity {
  cardNumber: number;
  cvv: number;
  expirationMonth: string;
  expirationYear: string;
  email: string;
  
  constructor({
    cardNumber,
    cvv,
    expirationMonth,
    expirationYear,
    email
  }: {
    cardNumber: number,
    cvv: number,
    expirationMonth: string,
    expirationYear: string,
    email: string,
  }) {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.expirationMonth = expirationMonth;
    this.expirationYear = expirationYear;
    this.email = email;
  }
}