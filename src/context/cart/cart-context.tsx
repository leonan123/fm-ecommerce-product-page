import { createContext, useContext } from 'react'
import type { product } from '../../utils/data'

export type Product = typeof product & {
  quantity: number
}

interface CartContext {
  products: Product[]
  addProduct: (product: Product) => void
  deleteProduct: (productId: number) => void
}

export const CartContext = createContext<CartContext>({} as CartContext)

export const useCart = () => useContext(CartContext)
