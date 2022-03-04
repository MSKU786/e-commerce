import Image from 'next/image'
import Header from '../components/header'
export default function Checkout() {
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
        <div className="flex flex-col space-y-10 bg-white p-5">
          <h1 className="p-4 text-3xl font-semibold"> Your Shopping Basket</h1>
        </div>
      </main>
    </div>
  )
}
