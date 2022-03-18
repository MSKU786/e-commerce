import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.auth_domain,
  projectId: process.env.project_id,
  storageBucket: 'e-commerce2-3d89d.appspot.com',
  messagingSenderId: '489198849583',
  appId: process.env.app_id,
  measurementId: process.env.measurement_id,
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

export default db
