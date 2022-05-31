import {} from 'dotenv/config'
import mongoose from 'mongoose'
import { ComponentContentSchema, PageSchema, UserSchema, TokenSchema } from './schemas/schema.mjs'

console.log('test')

try {
  await mongoose.connect(process.env.MONGO_URL)
} catch (error) {
  console.log(error)
}

const ComponentContent = mongoose.model('ComponentContent', ComponentContentSchema)
const Pages = mongoose.model('Pages', PageSchema)
const Users = mongoose.model('Users', UserSchema)
const Tokens = mongoose.model('Tokens', TokenSchema)

export {
  ComponentContent,
  Pages,
  Users,
  Tokens
}