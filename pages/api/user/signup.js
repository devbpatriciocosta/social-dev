
import Joi from 'joi'

import createHandler from '../../../lib/middleawares/nextConnect'

import validate from '../../../lib/middleawares/validation'

import { signupUser } from "../../../modules/user/user.service"

const postSchema = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  user: Joi.string().required().max(30),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(50).min(6),
})

const signup = createHandler()

  signup.post(validate({ body: postSchema }), async (req, res) => {
    try {
      const user = await signupUser(req.body)
      res.status(201).json(user)
    } catch (err) {
      console.error(err)
      throw err
    }
  })


export default signup