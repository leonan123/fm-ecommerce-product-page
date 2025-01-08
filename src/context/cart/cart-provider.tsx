import { useState } from 'react'
import { CartContext, type Product } from './cart-context'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([])

  function deleteProduct(productId: number) {
    setProducts((state) => state.filter((product) => product.id !== productId))
  }

  function addProduct(product: Product) {
    const productIndex = products.findIndex(
      (stateProduct) => (stateProduct.id = product.id),
    )

    setProducts((state) => {
      if (productIndex >= 0) {
        return state.map((stateProduct) => {
          if (stateProduct.id === product.id) {
            return {
              ...stateProduct,
              quantity: product.quantity,
            }
          }

          return stateProduct
        })
      }

      return [...state, product]
    })
  }

  return (
    <CartContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  )
}
