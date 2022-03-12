import { CurrencyRupeeIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/header'
import { selectItems, selectItemsTotal } from '../slice/basketSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_public_key || '')
export default function Checkout() {
  const items: any = useSelector(selectItems)
  const total: number = useSelector(selectItemsTotal)
  const { data: session }: any = useSession()

  const createCheckoutSession = async () => {
    const stripe = await stripePromise

    const checkoutSession = await axios.post('/api/createCheckoutSession', {
      items: items,
      email: session?.user?.email,
    })

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession?.data?.id,
    })

    if (result?.error) {
      alert(result?.error?.message)
    }

    //Call the backend to create a checkout session
  }
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="mx-auto mb-20 max-w-screen-2xl lg:flex">
        <div className="m-1 mx-4 flex-grow shadow-md">
          <Image
            src="https://www.fedex.com/content/dam/fedex/us-united-states/FedEx-Office/images/2021/q2/P04130_FY21_Recovery_Pt2_PostsSignsBannersLP_2400x700.jpg"
            objectFit="fill"
            height={350}
            width={1200}
          />
          <div className="flex flex-col space-y-10 bg-white p-5 px-32">
            <h1 className="p-4 text-3xl font-semibold">
              {' '}
              {items.length === 0
                ? 'No Items in the basket'
                : 'Your shopping Basket'}
            </h1>
            {items.map((item: any, index: Number) => (
              <CheckoutProduct {...{ item, index }} />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="pd- flex flex-col p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="flex whitespace-nowrap font-bold">
                Subtotal &nbsp;({items?.length})
                <CurrencyRupeeIcon className="ml-4 mt-1 h-6" />
                <span className="text-lg font-bold">{total}</span>
              </h2>
              <button
                onClick={() => createCheckoutSession()}
                role="link"
                className={`button mt-2 ${
                  !session &&
                  'border-gray- cursor-not-allowed border-gray-200 from-gray-300 to-gray-500'
                }`}
              >
                {!session ? 'Sign in to Checkout' : 'Procced to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
