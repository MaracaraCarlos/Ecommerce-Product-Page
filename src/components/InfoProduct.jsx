import { useContext } from 'react'
import BtnAddCart from './BtnAddCart'
import BtnQuantity from './BtnQuantity'
import { CartContext } from './context/CartContext'

const InfoProduct = () => {
  const { qty, addQty, minusQty } = useContext(CartContext)

  const productDetail = {
    name: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    oldPrice: 250,
    newPrice: 125,
    dicount: 50,
    quantity: 0
  }

  return (
    <div className='info_container'>
      <div className='info_container_2'>
        <div className='title'>
          <p className='company'>Sneaker Company</p>
          <h1 className='name_product'>{productDetail.name}</h1>
        </div>
        <div className='description_container'>
          <p className='description'>
            {productDetail.description}
          </p>
        </div>
        <div className='price_container'>
          <div className='new_price'>
            <h3 className='price'>${productDetail.newPrice}.00</h3>
            <p className='discount'>{productDetail.dicount}%</p>
          </div>
          <p className='old_price'>${productDetail.oldPrice}.00</p>
        </div>
        <div className='btns_container'>
          <BtnQuantity
            quantity={qty}
            addQty={addQty}
            minusQty={minusQty}
          />
          <BtnAddCart />
        </div>
      </div>
    </div>
  )
}

export default InfoProduct
