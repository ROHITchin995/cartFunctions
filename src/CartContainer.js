import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'


function CartContainer() {
    const {cart, total, clearCart} = useGlobalContext()
    if(cart.length === 0){
        return(
            <section className='cart'>
                <header>Your bag</header>
                <h4 className='empty-cart'>is currently empty</h4>
            </section>
        )
    }
  return (
    <section className='cart'>
        <header>
            <h2>Your Bag</h2>
            <div>
            {cart.map((item)=>{
                return <CartItem key={item.id} {...item}/>
            })}                   
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                    Total <span>{total}</span>
                    </h4>
                </div>
                <button className='button clear-button' onClick={clearCart}>Clear Cart</button>
            </footer>
        </header>
    </section>
  )
}

export default CartContainer