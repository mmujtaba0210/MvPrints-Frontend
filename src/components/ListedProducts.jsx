import Link from 'next/link'
import React from 'react'
import { FiStar } from 'react-icons/fi'

const ListedProducts = ({product}) => {
  return (
    <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="bg-white rounded-lg flex shadow-md border-1 border-[#cec7c7] overflow-hidden hover:shadow-lg transition-shadow w-full"
        >
          <div className="relative h-45 p-4 items-center bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-[150px] h-[160px] mx-auto transition-transform hover:scale-115"
            />
          </div>
          <div className="flex justify-between gap-2 items-baseline py-2 px-3">
            <div>
              <h2 className="text-md font-bold">{product.name}</h2>
              <p className="flex gap-1 text-shadow-md items-center">
                <FiStar color="gold" fill="gold" /> 4.5{" "}
              </p>
            </div>
            <div>
              <p className="flex text-md text-gray-500">$ {product.price}</p>
            </div>
          </div>
        </Link>
  )
}

export default ListedProducts