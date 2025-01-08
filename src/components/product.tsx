import { ProductGallery } from './product-gallery'
import { ItemCounter } from './item-counter'
import { BsCart3 } from 'react-icons/bs'
import { product } from '../utils/data'
import { useState } from 'react'
import { useCart } from '../context/cart/cart-context'

export function Product() {
  const [quantity, setQuantity] = useState(1)
  const { addProduct } = useCart()

  function handleQuantityChange(newQuantity: number) {
    setQuantity(newQuantity)
  }

  function handleAddToCart() {
    addProduct({
      ...product,
      quantity,
    })
  }

  return (
    <main className="container relative mx-auto mt-6 flex flex-col gap-6 pb-6 md:px-12 lg:mt-32 lg:flex-row lg:gap-32">
      <div className="mx-auto w-full sm:max-w-[445px]">
        <ProductGallery />
      </div>

      <div className="flex flex-1 flex-col justify-start px-6 lg:justify-center">
        <span className="text-sm font-semibold tracking-widest text-dark-grayish-blue">
          {product.company}
        </span>

        <h1 className="mt-6 text-4xl font-bold">{product.name}</h1>

        <p className="mt-8 text-dark-grayish-blue">{product.description}</p>

        <div className="mt-6 flex flex-col">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-very-dark-blue">
              {Intl.NumberFormat('en-us', {
                currency: 'USD',
                style: 'currency',
                unitDisplay: 'short',
              }).format((product.price * product.discountPercentage) / 100)}
            </span>

            <div className="flex items-center gap-2 rounded-md bg-very-dark-blue px-2.5 py-1 font-bold leading-tight text-white">
              <span>{product.discountPercentage}%</span>
            </div>
          </div>

          <div>
            <span className="font-bold text-dark-grayish-blue line-through">
              {Intl.NumberFormat('en-us', {
                currency: 'USD',
                style: 'currency',
                unitDisplay: 'short',
              }).format(product.price)}
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col flex-wrap items-center sm:flex-row">
          <ItemCounter
            onQuantityChange={handleQuantityChange}
            quantity={quantity}
          />

          <button
            onClick={handleAddToCart}
            className="flex min-h-14 w-full flex-1 shrink-0 items-center justify-center gap-4 rounded-lg bg-orange-500 font-bold transition-colors hover:bg-orange-400"
          >
            <BsCart3 size={18} strokeWidth={0.3} />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </main>
  )
}
