const reducer = (state, action)=>{
    if(action.type === 'Remove'){
        return {
            ...state,
            cart:state.cart.filter((cartItem)=> cartItem.id !== action.payload)
        }
    }
    if(action.type === 'Clear_Cart'){
        return {
            ...state,
            cart : []
        }
    }
    if (action.type === 'Toggle_Amount') {
        let tempCart = state.cart
          .map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              if (action.payload.type === 'increase') {
                return { ...cartItem, amount: cartItem.amount + 1 }
              }
              if (action.payload.type === 'decrease') {
                return { ...cartItem, amount: cartItem.amount - 1 }
              }
            }
            return cartItem
          })
          .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
      }

    if(action.type === 'Get_totals'){
        let {total, amount} = state.cart.reduce(
            (cartTotal, cartItem) =>{
                const {price, amount} = cartItem
                const itemTotal = price * amount
                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal 
            },{
                total:0,
                amount:0
            }
        )
        total = parseFloat(total.toFixed(2))
        return {...state, total, amount}
    }
    
}

export default reducer