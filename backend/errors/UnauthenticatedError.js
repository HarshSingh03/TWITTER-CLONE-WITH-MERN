import CustomAPIError from "./custom-errors.js";
import { StatusCodes } from "http-status-codes";

class UnauthenticatedError extends CustomAPIError{
  constructor(message){
    this.status=StatusCodes.UNAUTHORIZED
    super(message,this.status)
  }
}

export default UnauthenticatedError