const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req: any, res: any) => {
  const { items, email } = req.body
  console.log(items, email)
}
