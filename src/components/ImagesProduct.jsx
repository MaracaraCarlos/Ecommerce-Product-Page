import { useContext, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'
import { LightBoxContext } from './context/LightBoxContext'

const image1 = img1
const image2 = img2
const image3 = img3
const image4 = img4

const ImagesProduct = ({ scale }) => {
  const [mainImage, setMainImage] = useState(image1)
  const { showLightBox } = useContext(LightBoxContext)

  const handelClickimg1 = () => {
    setMainImage(image1)
  }
  const handleClickimg2 = () => {
    setMainImage(image2)
  }
  const handelClickimg3 = () => {
    setMainImage(image3)
  }
  const handelClickimg4 = () => {
    setMainImage(image4)
  }
  const handleChangeRight = () => {
    if (mainImage === image1) {
      setMainImage(image2)
    } else if (mainImage === image2) {
      setMainImage(image3)
    } else if (mainImage === image3) {
      setMainImage(image4)
    } else if (mainImage === image4) {
      setMainImage(image1)
    }
  }
  const handleChangeLeft = () => {
    if (mainImage === image1) {
      setMainImage(image4)
    } else if (mainImage === image2) {
      setMainImage(image1)
    } else if (mainImage === image3) {
      setMainImage(image2)
    } else if (mainImage === image4) {
      setMainImage(image3)
    }
  }

  return (
    <div className={`images_product_container ${scale}`}>
      <div className='main_img'>
        <div className='icon_left_container' onClick={handleChangeLeft}>
          <i id='left_caret_icon' className='bi bi-chevron-left' />
        </div>
        <img src={mainImage} alt='main img' onClick={showLightBox} />
        <div className='icon_right_container' onClick={handleChangeRight}>
          <i id='right_caret_icon' className='bi bi-chevron-right' />
        </div>
      </div>
      <div className='carrusel_imgs'>
        <div
          className={`small_img image1 ${mainImage === image1 ? 'image1_select' : ''}`}
          onClick={handelClickimg1}
        />
        <div
          className={`small_img image2 ${mainImage === image2 ? 'image2_select' : ''}`}
          onClick={handleClickimg2}
        />
        <div
          className={`small_img image3 ${mainImage === image3 ? 'image3_select' : ''}`}
          onClick={handelClickimg3}
        />
        <div
          className={`small_img image4 ${mainImage === image4 ? 'image4_select' : ''}`}
          onClick={handelClickimg4}
        />
      </div>
    </div>
  )
}

export default ImagesProduct
