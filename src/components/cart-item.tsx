import IconDelete from '../assets/images/icon-delete.svg'
import { useCart, type Product } from '../context/cart/cart-context'
import {
  getFormattedProductPrice,
  getFormattedProductTotalPrice,
} from '../utils/price'

interface CartItemProps {
  product: Product
}

export function CartItem({ product }: CartItemProps) {
  const { deleteProduct } = useCart()

  const formattedProductPrice = getFormattedProductPrice(
    (product.price * product.discountPercentage) / 100,
  )

  const formattedProductTotalPrice = getFormattedProductTotalPrice(
    product.quantity,
    product.price,
    product.discountPercentage,
  )

  return (
    <div key={product.id} className="flex items-center gap-4">
      <img
        className="size-[50px] rounded-md"
        src={`${product.rootImagesPath}${product.featuredImagePath}`}
        alt={product.name}
      />

      <div className="text-dark-grayish-blue">
        <p>{product.name}</p>
        <span>
          {formattedProductPrice} x {product.quantity}
        </span>
        <span className="ml-2.5 font-bold text-very-dark-blue">
          {formattedProductTotalPrice}
        </span>
      </div>

      <button onClick={() => deleteProduct(product.id)}>
        <img src={IconDelete} alt="delete" width={16} />
      </button>
    </div>
  )
}
