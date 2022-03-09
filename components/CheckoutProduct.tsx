import Image from 'next/image'
import React from 'react'

function CheckoutProduct({ item }: any) {
  const { image, id, price, title, description, category } = item
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
    </div>
  )
}

export default CheckoutProduct
