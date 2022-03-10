import { CurrencyRupeeIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/header'
import { selectItems } from '../slice/basketSlice'

export default function Checkout() {
  const items: any = useSelector(selectItems)
  const { session }: any = useSession()
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="mx-auto max-w-screen-2xl flex-col lg:flex ">
        <div className="m-5 flex-grow shadow-md">
          <Image
            src="https://www.fedex.com/content/dam/fedex/us-united-states/FedEx-Office/images/2021/q2/P04130_FY21_Recovery_Pt2_PostsSignsBannersLP_2400x700.jpg"
            objectFit="fill"
            height={350}
            width={1200}
          />
        </div>
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

        {/* Right Side */}
        <div>
          {items.length > 0 && (
            <div>
              <h2>
                Subtotal {items?.length}
                <CurrencyRupeeIcon className="h-5" />
                <span>
                  {' '}
                  {items.reduce(
                    (item: any, ans: number) => ans + item.price * 75
                  )}
                </span>
              </h2>
              <button>
                {session ? 'Sign in to Checkout' : 'Procced to checkout'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
