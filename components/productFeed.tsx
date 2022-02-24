import React from 'react'
import Product from './Product'

function ProductFeed({ products }: any) {
  return (
    <div>
      <div className="grid grid-flow-row-dense gap-3 md:-mt-48 lg:-mt:60 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2">
        {products.slice(0,4).map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <img  className='w-full h-52 md:h-72  object-cover'
       src="https://img.search.brave.com/LiWEQ6Jw1KGVmXAIcRDFJ-9kKhYyldqveZs-DdTEm-g/rs:fit:1200:820:1/g:ce/aHR0cHM6Ly93d3cu/Z29pbmdiZXlvbmQu/Y29tL3d3dzE0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L0NocmlzdG1hcy1T/YWxlLVdlYnNpdGUt/QmFubmVyLmpwZw " 
       loading="lazy" alt="promotoion"/>
       <div className="grid grid-flow-row-dense gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 ">
        {products.slice(4,20).map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductFeed
