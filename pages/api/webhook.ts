import { buffer } from 'micro'
import * as admin from 'firebase-admin'

const serviceAccount = require('../../admin.json')

const app = !admin.apps.length ? admin.intializeApp({!admin.credential.cert(serviceAccount)})


export default async (req: any, res: any) => {
  if (req.method == 'POST') {
  }
}
