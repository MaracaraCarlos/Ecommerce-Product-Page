import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Cart = () => {
  const { showCart, cart, handleDeleteItemInCart } = useContext(CartContext)

  return (
    <div
      className={`cart_container ${!showCart ? 'hide' : ''}`}
    >
      <h3 className='title_cart'>Cart</h3>
      <div className='container_cart_list'>
        <p className={cart > 0 ? 'hide' : 'empty'}>Your cart is empty.</p>

        <div className={cart > 0 ? 'info_item_cart_container' : 'hide'}>
          <div className='row_flex'>
            <div className='img_item_container_cart' />

            <div className='name_price_container'>
              <p className='title_item_in_cart'>
                Fall Limited Edition Sneakers
              </p>
              <div className='price_box_cart'>
                <p className='multiply'>$125.00 x {cart}</p>
                <p className='total_in_cart'>${cart * 125}</p>
              </div>
            </div>
            <div className='delete_icon'>
              <i
                id='trash_icon'
                className='bi bi-trash-fill'
                onClick={handleDeleteItemInCart}
              />
            </div>
          </div>
          <button className='checkout'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
