import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import isValidCard from '../custom/card.validator';
import isValidEmailDomain from '../custom/email.validator';
import validateHelper from '../validate.helper';

const validateGenerateTokenInput = [
  check('cardNumber')
    .exists()
    .isNumeric({ no_symbols: true })
    .isLength({ min: 13, max: 16 })
    .custom(async value => {
      const _isValidCard =  await isValidCard(value);
      if(!_isValidCard) {
        throw new Error('La numeración de la tarjeta es incorrecta.');
      }
      return true;
    }),
  check('cvv')
    .exists()
    .isNumeric({ no_symbols: true })
    .isLength({ min: 3, max: 4 }),
  check('expirationMonth')
    .exists()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 1, max: 2 })
    .custom(async value => {
      const _valueNumber = parseInt(value);
      if(_valueNumber < 1 || _valueNumber > 12) {
        throw new Error('El mes de expiración es incorrecto.');
      }
      return true;
    }),
  check('expirationYear')
    .exists()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 4, max: 4 })
    .custom(async value => {
      const _valueNumber = parseInt(value);
      const currentYear: number = new Date().getFullYear();
      if(_valueNumber > currentYear + 5 ) {
        throw new Error('El año de expiración es incorrecto.');
      }
      return true;
    }),
  check('email')
    .exists()
    .isEmail()
    .isLength({ min: 5, max: 100 })
    .custom(async value => {
      const _isValidCard =  await isValidEmailDomain(value);
      if(!_isValidCard) {
        throw new Error('Los dominios permitidos son: gmail.com, hotmail.com y yahoo.es');
      }
      return true;
    }),
  (request: Request, response: Response, next: NextFunction) => {
    validateHelper(request, response, next);
  }
];

export default validateGenerateTokenInput;