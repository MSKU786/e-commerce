import React from 'react'
import Product from './Product'

function ProductFeed({ products }: any) {
  return (
    <div>
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductFeed
