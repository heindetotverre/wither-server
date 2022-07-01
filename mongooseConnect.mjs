import {} from 'dotenv/config'
import mongoose from 'mongoose'
import { ComponentContentSchema, PageSchema, UserSchema, TokenSchema, FileMetaSchema } from './schemas/schema.mjs'


try {
  await mongoose.connect(process.env.MONGO_URL)
} catch (error) {
  console.log(error)
}

const ComponentContent = mongoose.model('ComponentContent', ComponentContentSchema)
const Pages = mongoose.model('Pages', PageSchema)
const Users = mongoose.model('Users', UserSchema)
const Tokens = mongoose.model('Tokens', TokenSchema)
const FileMeta = mongoose.model('FileMeta', FileMetaSchema)

export {
  ComponentContent,
  Pages,
  Users,
  Tokens,
  FileMeta
}