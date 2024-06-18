import React, { useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ImagesProduct from './ImagesProduct'
import { LightBoxContext } from './context/LightBoxContext'

const LightBox = () => {
  const { hideLightBox, show } = useContext(LightBoxContext)

  return (
    <div className={`lightbox_container ${!show ? 'hide' : ''}`}>
      <div className='wrap_container'>
        <div className='x_icon_container'>
          <i id='x_icon' className='bi bi-x' onClick={hideLightBox} />
        </div>
        <div className='core_container'>
          <ImagesProduct scale='scale' />
        </div>
      </div>
    </div>
  )
}

export default LightBox
