
import { useGlobalContext } from './context'
import Cart from './Cart'
import "./cart.css"
export default function Carts() {

    const {cart} = useGlobalContext()
  return (
    <div className='cartList'> {cart.map((item) => <Cart key={item.id} {...item} />)} </div>
  )
}
