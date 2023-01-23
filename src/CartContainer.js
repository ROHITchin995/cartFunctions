import React from 'react'
import CartItem from './CartItem'

function CartContainer() {
  return (
    <section>
        <header>
            <h2>Your Bag</h2>
            <div>
                <CartItem />
            </div>
            <footer>
                <hr />
                <div>
                    <h4>
                        Total
                    </h4>
                </div>
                <button>Clear Cart</button>
            </footer>
        </header>
    </section>
  )
}

export default CartContainer