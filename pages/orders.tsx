import { CurrencyRupeeIcon } from '@heroicons/react/outline'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import moment from 'moment'
import { getServerSession } from 'next-auth'
import { getSession, useSession } from 'next-auth/react'
import Header from '../components/header'
import db from '../firebase'
export default function Orders({ orders }: any) {
  const { data: session } = useSession()
  console.log(orders)
  return (
    <>
      <Header />
      <main className="xsm:p-2 mx-auto max-w-screen-lg p-10">
        <h1 className=" mb-2 border-b border-yellow-400 pb-1 text-3xl ">
          Your Orders
        </h1>
        {session ? <h2>Orders</h2> : <h2>Please sign in to see your orders</h2>}
        {orders?.map((order: any) => {
          console.log(order)
          return <Order {...{ order }} />
        })}
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

  return {
    props: {
      orders: allOrders,
    },
  }
}

const Order = ({ order }: any) => {
  console.log(order)
  let date = new Date(order?.timestamp)
  let date2 = date.toISOString()

  return (
    <div className="relative rounded-md border">
      <div className="flex items-center space-x-10 bg-gray-100 p-5 text-sm text-gray-600  ">
        <div>
          <p className="text-sm font-bold"> ORDER PLACED</p>
          <p>{moment(date).format('DD MMM YYYY')}</p>
        </div>
        <div>
          <p className="text-sm font-bold"> TOTAL</p>
          <p>
            <CurrencyRupeeIcon className="mb-1 inline h-5" />
            <span className="pt-3text-lg ml-1 font-semibold">
              {order.amount}
            </span>
          </p>
        </div>
        <p className="sm:text-md flex-1 self-end whitespace-nowrap text-right text-sm text-blue-500">
          {order?.items?.length} Orders
        </p>
        <p className="white absolute top-2 right-2 w-32 truncate text-xs md:w-40 lg:w-52">
          Order # {order.id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {order?.images?.map((image: string) => (
            <img src={image} className="h-20 object-contain sm:h-32" />
          ))}
        </div>
      </div>
    </div>
  )
}
