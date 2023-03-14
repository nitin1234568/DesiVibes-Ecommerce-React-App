import React from 'react'
import Productscard from './Productscard'

const Products = ({products}) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4 '>
        <h1 className='text-2xl bg-black rounded-lg
        text-white py-2 w-80 text-center'>Your Own Shopping  Store</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, libero animi in nemo explicabo dolorem eius similique quis ratione excepturi delectus eveniet? Porro iste qui asperiores optio eos, earum sunt. Rem accusantium facilis nihil dolores!</p>
      </div>
    <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
      {
        products.map((item)=>(
          <Productscard key={item._id} product={item}/>
        ))
      }
      </div>
    </div>
  )
}

export default Products
