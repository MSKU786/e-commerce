import { CurrencyRupeeIcon, StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../slice/basketSlice'

function CheckoutProduct({ item, index }: any) {
  const { image, id, price, title, description, category, rating } = item
  const starNumber = Math.floor(Math.random() * 5 + 1)
  const dispatch = useDispatch()

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ index }))
  }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle Section*/}
      <div className="col-span-3 mx-5 py-3">
        <p>{title}</p>
        <div className="flex">
          {Array(starNumber)
            .fill(0)
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" fill="#ffd700" />
            ))}
        </div>
        <p className="my-2 text-xs line-clamp-3">{description}</p>
        <div className="mb-5 flex items-center">
          <CurrencyRupeeIcon className="h-5" />
          <span className="ml-1 text-lg font-semibold">{price * 75}</span>
        </div>
      </div>

      <div className="col-span-1 flex-row py-10">
        <button
          onClick={() => console.log('yes ')}
          className="button mt-auto mb-4 block"
        >
          Add to Basket
        </button>
        <button
          onClick={() => removeItemFromBasket()}
          className="button mt-auto block bg-red-600"
        >
          Delete Basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
