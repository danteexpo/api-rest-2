import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'Desc.',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const UserModel = model('Users', UserSchema)

export default UserModel
