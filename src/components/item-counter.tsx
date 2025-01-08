import IconMinus from '../assets/images/icon-minus.svg'
import IconPlus from '../assets/images/icon-plus.svg'

interface ItemCounterProps {
  quantity: number
  onQuantityChange: (newQuantity: number) => void
}

export function ItemCounter({ onQuantityChange, quantity }: ItemCounterProps) {
  function handleQuantityChange(newQuantity: number) {
    if (newQuantity >= 1) {
      onQuantityChange(newQuantity)
    }
  }

  return (
    <div className="flex w-full items-center justify-between gap-4 p-5 sm:w-[157px]">
      <button
        type="button"
        className="flex select-none items-center justify-center p-1 transition-opacity hover:opacity-75"
        onClick={() => handleQuantityChange(quantity - 1)}
      >
        <img src={IconMinus} alt="-" />
      </button>

      <span className="w-8 text-center font-bold">{quantity}</span>

      <button
        type="button"
        className="flex select-none items-center justify-center p-1 transition-opacity hover:opacity-75"
        onClick={() => handleQuantityChange(quantity + 1)}
      >
        <img src={IconPlus} alt="+" />
      </button>
    </div>
  )
}
