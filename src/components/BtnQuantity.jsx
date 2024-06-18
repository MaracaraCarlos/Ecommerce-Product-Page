const BtnQuantity = ({ quantity, addQty, minusQty }) => {
  return (
    <div className='btn_quantity_container'>
      <button className='minus' onClick={minusQty}>-</button>
      <p className='quantity_p'>{quantity}</p>
      <button className='plus' onClick={addQty}>+</button>
    </div>
  )
}

export default BtnQuantity
