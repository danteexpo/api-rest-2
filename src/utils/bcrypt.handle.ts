import { compare, hash } from 'bcryptjs'

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 8)
  return passwordHash
}

const verify = async (password: string, passwordHash: string) => {
  const isVerified = await compare(password, passwordHash)
  return isVerified
}

export { encrypt, verify }
