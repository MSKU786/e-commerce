import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { getServerSession } from 'next-auth'
import { getSession, useSession } from 'next-auth/react'
import Header from '../components/header'
import db from '../firebase'
export default function Orders(orders: any) {
  const { data: session } = useSession()
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-lg p-10">
        <h1 className=" mb-2 border-b border-yellow-400 pb-1 text-3xl "></h1>
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const stripe = require('stripe')(process.env.stripe_secret_key)

  //Get the users logged in credentials
  const { user }: any = await getSession(context)

  if (!user) {
    return {
      props: {},
    }
  }
  // console.log('esssio', session)

  const stripeOrders: any = await getDoc(doc(db, 'users', user?.email))
  const orders = stripeOrders.data().orders
  const allOrders = await Promise.all(
    orders.map(async (order: any) => {
      const res: any = (await getDoc(doc(db, 'orders', order))).data()
      return {
        id: res.id,
        amount: res.amount,
        images: res.imaages,
        timestamp: res.timestamp,
        items: (
          await stripe?.checkout?.sessions.listLineItems(order, {
            limit: 100,
          })
        ).data,
      }
    })
  )
  //stripeOrders?.docs.map((user: any) => console.log(user.data()))
  //Stripe orders

  // const orders = await Promise.all(
  //   stripeOrders?.docs?.map(async (order: any) => ({
  //     id: order.id,
  //     amount: order.data().amount,
  //     amountShipping: order.data().amount_shipping,
  //     images: order.data().images,
  //     timestamp: order.data().timestamp,
  //     items: (
  //       await stripe?.checkout?.sessions?.listLineItems(order?.id, {
  //         limit: 100,
  //       })
  //     )?.data,
  //   }))
  // )
  return {
    props: {
      order: allOrders,
    },
  }
}
