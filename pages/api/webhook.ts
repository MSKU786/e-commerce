import * as admin from 'firebase-admin'
import { request } from 'http'
import { buffer } from 'micro'

let privateKey = process.env.private_key?.replace(/\\n/g, '\n')
const serviceAccount: any = {
  type: 'service_account',
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: privateKey,
  client_email:
    'firebase-adminsdk-a3ogn@e-commerce2-3d89d.iam.gserviceaccount.com',
  client_id: '110319895682376782439',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a3ogn%40e-commerce2-3d89d.iam.gserviceaccount.com',
}
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app()

//Establish coonection to stripe
const stripe = require('stripe')(process.env.stripe_secret_key)

const endPointSecret = process.env.webhook_secret

const fullFillOrder = async (session: any) => {
  const orderRef = await app
    .firestore()
    .collection('orders')
    .doc(session?.id)
    .set({
      id: session?.id,
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: Date.now(),
    })

  const object = await app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .get()

  if (object.exists === true) {
    let finalArray = object.data()?.orders
    await app
      .firestore()
      .collection('users')
      .doc(session.metadata.email)
      .set(
        {
          orders: [session.id, ...finalArray],
          _id: session.metadata.email,
        },
        { merge: true }
      )
  } else {
    let ordersId = [orderRef]
    await app
      .firestore()
      .collection('users')
      .doc(session.metadata.email)
      .set(
        {
          orders: [session.id],
          _id: session.metadata.email,
        },
        { merge: true }
      )
  }

  return object
}

export default async (req: any, res: any) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const sig = req.headers['stripe-signature']
    console.log(requestBuffer, payload, sig)
    console.log('till line 87')
    let event
    //Verify that event posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endPointSecret)
      console.log(event, 'till line 92')
    } catch (err: any) {
      console.log('eroor here 94')
      return res.status(400).send(`Webhook Error: ${err?.message}`)
    }
    //Handle the checkout session completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      console.log('session getting genterated line 1000')
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
