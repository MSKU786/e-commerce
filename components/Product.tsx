import { CurrencyRupeeIcon, StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useState } from 'react'

function Product({ product }: any) {
  const { id, title, price, description, category, image } = product
  const [starNumber] = useState(Math.floor(Math.random() * 5 + 1))
  const [hasPrime] = useState(Math.random() * 0.5)

  return (
    <div>
      <p>{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(starNumber)
          .fill(0)
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" fill="#ffd700" />
          ))}
      </div>
      <p>{description}</p>
      {hasPrime && <div></div>}
      <div>
        <Currency quantity={/>
      </div>
    </div>
  )
}

export default Product
