import Image from 'next/image'
import Header from '../components/header'
export default function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="mx-auto max-w-screen-2xl  ">
        <div className="border border-red-400">
          <Image
            src="https://www.fedex.com/content/dam/fedex/us-united-states/FedEx-Office/images/2021/q2/P04130_FY21_Recovery_Pt2_PostsSignsBannersLP_2400x700.jpg"
            objectFit="fill"
            height={250}
            width={1200}
          />
        </div>
      </main>
    </div>
  )
}
