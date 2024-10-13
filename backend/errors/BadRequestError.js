import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-errors.js";

class BadRequestError extends CustomAPIError{
  constructor(message){
    this.status=StatusCodes.BAD_REQUEST
    super(message,this.status)
  }
}

export default BadRequestError