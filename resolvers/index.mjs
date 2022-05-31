import { ComponentContent, Pages, Users, Tokens } from '../mongooseConnect.mjs'

export default {
  getComponentContent: async () => {
    try {
      const componentContentArray = await ComponentContent.find({})
      if (!componentContentArray) {
        throw new Error(`No componentContent present`)
      }
      return componentContentArray
    } catch (error) {
      throw error
    }
  },
  getComponentContentBySlug: async ({ slug }) => {
    try {
      const componentContentArray = await ComponentContent.find({ 'formInfo.slug': slug })
      if (!componentContentArray) {
        throw new Error(`No componentContent for page ${slug}`)
      }
      return componentContentArray
    } catch (error) {
      throw error
    }
  },
  getPages: async () => {
    try {
      const pagesArray = await Pages.find({})
      if (!pagesArray) {
        throw new Error(`No pages present`)
      }
      return pagesArray
    } catch (error) {
      throw error
    }
  },
  getSinglePage: async ({ slug }) => {
    try {
      const page = await Pages.findOne({ slug: slug })
      if (!page) {
        throw new Error(`Page not found with: ${slug}`)
      }
      return page
    } catch (error) {
      throw error
    }
  },
  getSingleUser: async ({ tokenId }) => {
    try {
      const token = await Tokens.findOne({ id: tokenId })
      const user = await Users.findOne({ email: token.user })
      if (!user) {
        throw new Error(`User not found with ${token.user}`)
      }
      return user
    } catch (error) {
      throw error
    }
  },
  getToken: async ({ id }) => {
    try {
      const token = await Tokens.findOne({ id: id })
      if (!token) {
        throw new Error(`Token not found with ${id}`)
      }
      return token
    } catch (error) {
      throw error
    }
  },
  createComponentContent: async ({ input }) => {
    try {
      const newComponentContent = new ComponentContent({
        ...input
      })
      const exisitingContent = await ComponentContent.findOne({ 'formInfo.name': input.formInfo.name })
      if (exisitingContent) {
        delete input.id
        await ComponentContent.findOneAndUpdate({ 'formInfo.name': input.formInfo.name }, input)
        const updatedContent = await ComponentContent.findOne({ 'formInfo.name': input.formInfo.name })
        return updatedContent
      } else {
        await newComponentContent.save()
      }
      return newComponentContent
    } catch (error) {
      throw error
    }
  },
  createPage: async ({ input }) => {
    try {
      const newPage = new Pages({
        ...input
      })
      const existingPage = await Pages.findOne({ slug: input.slug })
      if (existingPage) {
        delete input.id
        await Pages.findOneAndUpdate({ slug: input.slug }, input)
        const updatedPage = await Pages.findOne({ slug: input.slug })
        return updatedPage
      } else {
        await newPage.save()
      }
      return newPage
    } catch (error) {
      throw error
    }
  },
  createUser: async ({ input }) => {
    const now = new Date()
    const newToken = new Tokens({
      created: now.getTime(),
      group: input.group,
      user: input.email,
      id: input.id
    })
    const newUser = new Users({
      ...input
    })
    try {
      const existingUser = await Users.findOne({ email: input.email })
      if (existingUser) {
        throw new Error(`User with ${input.email} already exists`)
      }
      await newUser.save()
      await newToken.save()
      return newUser
    } catch (error) {
      throw error
    }
  },
  createToken: async ({ input }) => {
    const user = await Users.findOne({ email: input.user })
    if (!user) {
      throw new Error(`User not found with ${input.user}`)
    }
    if (user.password !== input.password) {
      throw new Error(`Password not correct`)
    }
    delete user.password
    const now = new Date()
    const newToken = new Tokens({
      created: now.getTime(),
      group: user.group,
      ...input
    })
    try {
      await newToken.save()
      return newToken
    } catch (error) {
      throw error
    }
  },
  editUser: async ({ input }) => {
    try {
      const user = await Users.findOne({ id: input.id })
      if (!user) {
        throw new Error(`User not found with ${input.user}`)
      } else {
        await Users.updateOne({ id: input.id }, input)
        const updatedUser = await Users.findOne({ id: input.id })
        return updatedUser
      }
    } catch (error) {
      throw error
    }
  },
  deleteUser: async ({ id }) => {
    try {
      const deletedUser = await Users.findOneAndDelete({ id: id })
      if (!deletedUser) {
        throw new Error(`User with ${id} not found`)
      }
      return deletedUser
    } catch (error) {
      throw error
    }
  },
  deletePage: async ({ id }) => {
    try {
      const deletedPage = await Pages.findOneAndDelete({ id: id })
      if (!deletedPage) {
        throw new Error(`Page with ${id} not found`)
      }
      return deletedPage
    } catch (error) {
      throw error
    }
  },
  deleteToken: async ({ id }) => {
    try {
      const deletedToken = await Tokens.findOneAndDelete({ id: id })
      if (!deletedToken) {
        throw new Error(`Token with ${id} not found`)
      }
      return deletedToken
    } catch (error) {
      throw error
    }
  }
}