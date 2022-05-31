import { buildSchema } from 'graphql'

export default buildSchema(`
  type Page {
    name: String
    slug: String
    isInMenu: Boolean
    pageMenuParent: String
    pageMenuOrder: Int
    title: String
    description: String
    keywords: String
    pageComponents: [String]
    id: String
    author: String
  }
  
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    group: Int
  }

  type Token {
    id: ID
    user: String
    group: Int
    created: Int
  }

  type FieldValidator {
    validator: String
    validated: Boolean
    validationMessage: String
  }

  type ComponentFields {
    autocomplete: String
    class: String
    component: String
    disabled: Boolean
    domclass: String
    formPart: String
    id: String
    key: String
    label: String
    options: [String]
    type: String
    required: Boolean
    validation: FieldValidator
    value: String
    visible: Boolean
  }

  type ComponentFieldInfo {
    name: String
    slug: String
  }

  type ComponentContent {
    formInfo: ComponentFieldInfo
    fields: [ComponentFields]
  }

  input FieldValidatorInput {
    validator: String
    validated: Boolean
    validationMessage: String
  }

  input ComponentFieldsInput {
    autocomplete: String
    class: String
    component: String
    disabled: Boolean
    domclass: String
    formPart: String
    id: String
    key: String
    label: String
    options: [String]
    type: String
    required: Boolean
    validation: FieldValidatorInput
    value: String
    visible: Boolean
  }

  input ComponentFieldInfoInput {
    name: String
    slug: String
  }

  input ComponentContentInput {
    formInfo: ComponentFieldInfoInput
    fields: [ComponentFieldsInput]
  }

  input PageInput {
    name: String
    slug: String
    isInMenu: Boolean
    pageMenuParent: String
    pageMenuOrder: Int
    title: String
    description: String
    keywords: String
    pageComponents: [String]
    id: String
    author: String
  }

  input UserInput {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    oldPassword: String
    group: Int
  }

  input TokenInput {
    user: String
    password: String
    id: String
  }

  type Query {
    getComponentContent: [ComponentContent]
    getComponentContentBySlug(slug: String): [ComponentContent]
    getPages: [Page]
    getSinglePage(slug: String): Page
    getSingleUser(tokenId: String): User
    getToken(id: ID): Token
  }

  type Mutation {
    createComponentContent(input: ComponentContentInput): ComponentContent
    createPage(input: PageInput): Page
    createUser(input: UserInput): User
    createToken(input: TokenInput): Token
    deleteComponentContent(name: String): ComponentContent
    deleteUser(id: String): User
    deletePage(id: String): Page
    deleteToken(id: String): Token
    editUser(input: UserInput): User
  }
`)