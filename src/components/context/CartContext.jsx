import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [showCart, setShowCart] = useState(false)
  const [qty, setQty] = useState(0)
  const [cart, setCart] = useState(0)

  const handleClickShowCart = () => {
    if (showCart) {
      setShowCart(false)
    } else if (!showCart) {
      setShowCart(true)
    }
  }
  const addQty = () => {
    if (qty < 10) {
      const newQty = qty + 1
      setQty(newQty)
    }
  }
  const minusQty = () => {
    if (qty > 0) {
      const newQty = qty - 1
      setQty(newQty)
    }
  }
  const handleAddItemToCart = () => {
    if (qty > 0 && cart === 0) {
      setCart(qty)
    } else if (qty > 0 && cart > 0) {
      const newNumber = qty + cart
      setCart(newNumber)
    }
  }
  const handleDeleteItemInCart = () => {
    setCart(0)
  }
  return (
    <CartContext.Provider value={{
      qty,
      showCart,
      cart,
      handleClickShowCart,
      addQty,
      minusQty,
      handleAddItemToCart,
      handleDeleteItemInCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
