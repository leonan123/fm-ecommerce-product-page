import IconCart from '../assets/images/icon-cart.svg'

import * as Popover from '@radix-ui/react-popover'
import { useCart } from '../context/cart/cart-context'
import { CartItem } from './cart-item'

export function CartPopover() {
  const { products } = useCart()

  const quantity = products
    .map((product) => product.quantity)
    .reduce((a, b) => a + b, 0)

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          title="Carrinho de compras"
          className="relative text-dark-grayish-blue"
        >
          <img src={IconCart} alt="Cart" width={24} />
          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-light-grayish-blue">
            {quantity}
          </span>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="z-30 h-[256px] min-w-[348px] max-w-[360px] rounded-xl bg-light-grayish-blue px-6 py-8 shadow-2xl outline-none transition-all focus:outline-none data-[state=closed]:animate-hide-popover sm:translate-x-0 sm:data-[state=open]:animate-show-popover"
          sideOffset={50}
        >
          <div className="flex size-full flex-col">
            <p className="font-bold">Cart</p>

            {products.length > 0 ? (
              <div className="mt-12 flex flex-1 flex-col justify-between gap-6">
                {products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}

                <button className="float-end flex min-h-14 w-full items-center justify-center gap-4 rounded-lg bg-orange-500 font-bold transition-colors hover:bg-orange-400">
                  <span>Checkout</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center font-bold text-dark-grayish-blue">
                Your cart is empty
              </div>
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
