import { CheckCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Header from '../components/header'

export default function Success() {
  const router = useRouter()
  return (
    <>
      <div className="h-screen bg-gray-100">
        <Header />
      </div>
      <div className="max-auto max-w-screen-lg">
        <div className="pd-10 flex flex-col bg-white">
          <div className="mb-6 flex items-center space-x-2">
            <CheckCircleIcon className="h-10 text-green-600" />
            <h1>Thank You, your order has been confirmed!</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <p>
            Thank You for shopping with us, We will send a confirmation once
            your order has been shipped
          </p>
          <button
            onClick={() => router.push('/orders')}
            className="button mt-6"
          >
            {' '}
            Go to my orders
          </button>
        </div>
      </div>
    </>
  )
}
