import React from 'react'
import { useGlobalContext } from './context'

function CartItem({ id, img, title, price, amount }) {
    const {remove, toggleAmount} = useGlobalContext()
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>
                    {title}
                </h4>
                <h4 className='item-price'>{price}</h4>
                {/* To remove item from cart */}
                <button className='remove-button' onClick={()=>remove(id)}>Remove</button>
            </div>
            <div>
                {/* To increase amount */}
                <button className='amount-button' onClick={()=> toggleAmount(id, 'increase')}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                    </svg>
                </button>
                {/* To display amount */}
                <p className='amount'>
                    {amount}
                </p>
                {/* To decrease amount */}
                <button className='amount-button' onClick={()=> toggleAmount(id, 'decrease')}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default CartItem