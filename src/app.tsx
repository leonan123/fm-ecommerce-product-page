import { Header } from './components/header'
import { Product } from './components/product'
import { CartProvider } from './context/cart/cart-provider'

export function App() {
  return (
    <div className="pt-7">
      <CartProvider>
        <Header />
        <Product />
      </CartProvider>
    </div>
  )
}
