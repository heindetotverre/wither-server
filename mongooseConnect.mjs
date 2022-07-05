import mongoose from 'mongoose'
import { ComponentContentSchema, PageSchema, UserSchema, TokenSchema, ImageDataSchema } from './schemas/schema.mjs'


try {
  await mongoose.connect(process.env.MONGO_URL)
} catch (error) {
  console.log(error)
}

const ComponentContent = mongoose.model('ComponentContent', ComponentContentSchema)
const Pages = mongoose.model('Pages', PageSchema)
const Users = mongoose.model('Users', UserSchema)
const Tokens = mongoose.model('Tokens', TokenSchema)
const ImageData = mongoose.model('Images', ImageDataSchema)

export {
  ComponentContent,
  Pages,
  Users,
  Tokens,
  ImageData
}