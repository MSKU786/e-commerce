import * as admin from 'firebase-admin'
import { buffer } from 'micro'

//Secure a connection to firebase from the backend
const serviceAccount = require('../../admin.json')

const app = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
  : admin.app()

//Establish coonection to stripe
const stripe = require('stripe')(process.env.stripe_secret_key)

const endPointSecret = process.env.webhook_secret

const fullFillOrder = async (session: any) => {
  console.log('session', session)
  const res = await app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session?.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      imaages: JSON.parse(session.metadata.images),
      timestamp: Date.now(),
    })
  return res
}
export default async (req: any, res: any) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const sig = req.headers['stripe-signature']
    let event
    //Verify that event posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endPointSecret)
    } catch (err: any) {
      return res.status(400).send(`Webhook Error: ${err?.message}`)
    }
    //Handle the checkout session completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      return fullFillOrder(session)
        .then(() => res.status(200))
        .catch((err) => {
          console.log('error', err.message)
          res.status(400).send(`Webhook Error: ${err.message}`)
        })
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}
