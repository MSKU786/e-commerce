import React from 'react'
import Product from './Product'

function ProductFeed({ products }: any) {
  return (
    <div className="grid grid-flow-row-dense gap-3 md:-mt-48 lg:-mt:60 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductFeed
