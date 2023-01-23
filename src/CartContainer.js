import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'


function CartContainer() {
    const {cart, total, clearCart} = useGlobalContext()
  return (
    <section>
        <header>
            <h2>Your Bag</h2>
            <div>
            {cart.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })}   


                
            </div>
            <footer>
                <hr />
                <div>
                    <h4>
                    {total}
                    </h4>
                </div>
                <button onClick={clearCart}>Clear Cart</button>
            </footer>
        </header>
    </section>
  )
}

export default CartContainer