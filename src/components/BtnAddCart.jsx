import 'bootstrap-icons/font/bootstrap-icons.css'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'

const BtnAddCart = () => {
  const { handleAddItemToCart } = useContext(CartContext)
  return (
    <div>
      <button className='btn_add' onClick={handleAddItemToCart}>
        <i id='cart_icon_btn' className='bi bi-cart3' />
        <p>Add to cart</p>
      </button>
    </div>
  )
}

export default BtnAddCart
