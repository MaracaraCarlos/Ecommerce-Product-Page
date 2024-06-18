import 'bootstrap-icons/font/bootstrap-icons.css'
import imgProfile from '../images/image-avatar.png'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'

const CartIcon = () => {
  const { handleClickShowCart, showCart, cart } = useContext(CartContext)
  return (
    <div className='right'>
      <div className='container_cart_img'>
        <i
          id={showCart ? 'cart_icon_clicked' : 'cart_icon'}
          className='bi bi-cart3'
          onClick={handleClickShowCart}
        />
        <div className={cart === 0 ? 'hide' : 'number_product_on_cart'}>{cart}</div>
      </div>
      <div className='container_profile_img'>
        <img src={imgProfile} alt='profile' />
      </div>
    </div>
  )
}

export default CartIcon
