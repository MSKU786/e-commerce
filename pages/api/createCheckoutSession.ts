const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req: any, res: any) => {
  const { items, email } = req.body
  console.log(items, email)
  const transformedItem = items.map((item: any) => ({
    description: item?.description,
    quantity: 1,
    price_data: {
      currency: 'inr',
      uniit_amount: item.price * 100 * 75,
      product_data: {
        name: item?.title,
        images: [item?.image],
      },
    },
  }))

  const session = await stripe.checkout.session.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['IN'],
    },
    line_items: transformedItem,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    meta_data: {
      email,
      images: JSON.stringify(items.map((item: any) => item.image)),
    },
  })

  res.status(200).json({
    id: session.id,
  })
}
