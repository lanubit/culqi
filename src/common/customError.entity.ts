export default class CustomErrorEntity {
  httpStatus: number|any;
  message: string;
  detail: any;

  constructor({ httpStatus, message, detail } : { httpStatus?: number|any, message: string, detail?: any }) {
    this.httpStatus = httpStatus;
    this.message = message;
    this.detail = detail;
  }
}
