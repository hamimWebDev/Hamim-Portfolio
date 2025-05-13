import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { IUser } from './auth.interface'
import { User } from './auth.model'

const signUpUserIntoDb = async (payload: IUser) => {
  const user = await User.findOne({ email: payload.email })
  if (user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This email is already taken')
  }

  const result = await User.create(payload)
  return result
}

export const AuthServices = {
  signUpUserIntoDb,
}
