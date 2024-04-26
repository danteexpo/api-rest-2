import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import UserModel from '../models/auth'
import { encrypt, verify } from '../utils/bcrypt.handle'

const registerNewUser = async (authUser: User) => {
  const user = await UserModel.findOne({ email: authUser.email })
  if (user) return 'EMAIL_ALREADY_IN_USE'

  const encryptedPassword = await encrypt(authUser.password)

  const registerNewUser = await UserModel.create({
    email: authUser.email,
    password: encryptedPassword,
    name: authUser.name,
    description: authUser.description,
  })

  return registerNewUser
}

const loginUser = async (authUser: Auth) => {
  const user = await UserModel.findOne({ email: authUser.email })
  if (!user) return 'NOT_FOUND_USER'

  const passwordHash = user.password

  const isVerified = await verify(authUser.password, passwordHash)

  if (!isVerified) return 'PASSWORD_INCORRECT'

  return user
}

export { registerNewUser, loginUser }
