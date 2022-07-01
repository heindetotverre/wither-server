import mongoose from 'mongoose'
const { Schema } = mongoose

const schema = mongoose.Schema

const UserSchema = new schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  }
})

const PageSchema = new schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
  },
  isInMenu: {
    type: Boolean
  },
  pageMenuParent: {
    type: String
  },
  pageMenuOrder: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keywords: {
    type: String,
    required: true
  },
  pageComponents: {
    type: Array,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})

const TokenSchema = new schema({
  user: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  created: {
    type: Number,
    required: true
  }
})

const ComponentFieldsSchema = new schema({
  autocomplete: {
    type: String
  },
  class: {
    type: String,
    required: true
  },
  component: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean
  },
  domclass: {
    type: String
  },
  formPart: {
    type: String
  },
  id: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array
  },
  type: {
    type: String,
    required: true
  },
  required: {
    type: Boolean
  },
  validation: {
    validator: {
      type: String
    },
    validated: {
      type: Boolean
    },
    validationMessage: {
      type: String
    },
  },
  value: {
    type: Schema.Types.Mixed,
    required: true
  },
  visible: {
    type: Boolean
  }
})

const ComponentContentSchema = new schema({
  formInfo: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  fields: [ComponentFieldsSchema]
})

const FileMetaSchema = new schema({
  id: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Number,
    required: true
  }
})

export {
  ComponentContentSchema,
  FileMetaSchema,
  PageSchema,
  UserSchema,
  TokenSchema
}