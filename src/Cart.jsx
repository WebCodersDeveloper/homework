/* eslint-disable react/prop-types */

import { useGlobalContext } from "./context"
import "./cart.css"

export default function Cart({id, img, title, price, amount }) {
    const { add, dec, rem } = useGlobalContext();

  return (
      <div className="cart">
          <img src={img} alt="" />
          <h2>{title}</h2>
          <h4>{ price}</h4>
          <p>Soni: {amount}</p>
          <div className="btn">
          <button onClick={() => add(id)}>add</button>
          <button onClick={amount <=  1 ? () => rem(id) : () => dec(id)}>
              dec
          </button>
          <button onClick={() => rem(id)}>rem</button>  
          </div>
          {/* <button>rem</button> */}

    </div>
  )
}
