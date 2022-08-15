import { withIronSessionApiRoute } from 'iron-session/next'

import createHandler from '../../../lib/middleawares/nextConnect'
import validate from '../../../lib/middleawares/validation'
import { login } from "../../../modules/user/user.service"

import { ironConfig } from '../../../lib/middleawares/ironSession'
import { loginSchema } from '../../../modules/user/user.schema'

const handler = createHandler()

handler.post(validate({ body: loginSchema }), async (req, res) => {
  try {
    const user = await login(req.body)
    req.session.user = {
      id: user._id,
      user: user.user
    }
    await req.session.save()
    res.send({ ok: true })
  } catch (err) {
    return res.status(400).send(err.message)
  } 
})

export default withIronSessionApiRoute (handler, ironConfig)