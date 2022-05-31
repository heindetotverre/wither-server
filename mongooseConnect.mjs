import mongoose from 'mongoose'
import { ComponentContentSchema, PageSchema, UserSchema, TokenSchema } from './schemas/schema.mjs'

try {
  await mongoose.connect('mongodb://127.0.0.1:27017/db')
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