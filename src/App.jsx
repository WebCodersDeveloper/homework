
import './App.css'
import Carts from './Carts';
import { useGlobalContext } from './context'

function App() {

  const { amount, clearCart, total } = useGlobalContext();

  return (
    <>
      <h2 className='txt'>Hello User</h2>
      <h2 className='txt'>Umumiy soni: {amount}</h2>
      
      <Carts />

      <div className="ft">
      <button className='rem' onClick={() => clearCart()}>clealAll</button>
      <p>total price:{total}</p>
      </div>
        
    </>
  )
}

export default App
