import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-errors.js";
class NotFoundError extends CustomAPIError{
  constructor(message){
    this.status=StatusCodes.NOT_FOUND
    super(message,this.status)
  }
}

export default NotFoundError