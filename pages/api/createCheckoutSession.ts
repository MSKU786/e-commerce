const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req: any, res: any) => {
  const { items, email } = req.body
  const transformedItem = items.map((item: any) => ({
    description: item?.description,
    quantity: 1,
    price_data: {
      currency: 'inr',
      unit_amount: item.price * 100 * 75,
      product_data: {
        name: item?.title,
        images: [item?.image],
      },
    },
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformedItem,
    mode: 'payment',
    success_url: `${process.env.host}/success`,
    cancel_url: `${process.env.host}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item: any) => item.image)),
    },
  })

  res.status(200).json({
    id: session.id,
  })
}
