import { CurrencyRupeeIcon, StarIcon } from '@heroicons/react/outline'

import Image from 'next/image'
import React, { useState } from 'react'

function Product({ product }: any) {
  const { id, title, price, description, category, image } = product
  const [starNumber] = useState(Math.floor(Math.random() * 5 + 1))
  const [hasPrime] = useState(Math.random() * 0.5)

  return (
    <div
      key={id}
      className="relative z-30 m-5 flex flex-col bg-white py-4 px-4 shadow-lg"
    >
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3 ">{title}</h4>
      <div className="flex">
        {Array(starNumber)
          .fill(0)
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" fill="#ffd700" />
          ))}
      </div>
      <p className="my-2 text-xs line-clamp-2">{description}</p>
      {hasPrime && <div></div>}
      <div className="mb-5 flex items-center">
        <CurrencyRupeeIcon className="h-5" />
        <span className="ml-1 text-lg font-semibold">{price}</span>
      </div>
      <button className="button mt-auto">Add to Basket</button>
    </div>
  )
}

export default Product
