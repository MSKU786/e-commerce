import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCTvQiKVhwESJZ7rDwGNblIDxZlxe-pxm0',
  authDomain: 'e-commerce2-3d89d.firebaseapp.com',
  projectId: 'e-commerce2-3d89d',
  storageBucket: 'e-commerce2-3d89d.appspot.com',
  messagingSenderId: '489198849583',
  appId: '1:489198849583:web:6e1b46f1c64217736b80da',
  measurementId: 'G-33ENKQ60Z8',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

export default db
