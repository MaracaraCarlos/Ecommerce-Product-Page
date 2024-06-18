import 'bootstrap-icons/font/bootstrap-icons.css'
import logo from '../images/logo.svg'
import CartIcon from './CartIcon'
import NavBar from './NavBar'
import { useState } from 'react'

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false)

  const showMobileMenu = () => {
    if (!menuMobile) {
      setMenuMobile(true)
    }
  }
  const hideMobileMenu = () => {
    if (menuMobile) {
      setMenuMobile(false)
    }
  }
  return (
    <header>
      <div className={menuMobile ? 'menu_mobile' : 'hide'}>
        <div className='back_white'>
          <i
            id='x_icon_menu_mobile'
            className='bi bi-x'
            onClick={hideMobileMenu}
          />
          <NavBar />
        </div>
      </div>
      <div className='left'>
        <i
          id='menu_icon'
          className='bi bi-list'
          onClick={showMobileMenu}
        />
        <div className='img_container'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar_in_it'>
          <NavBar />
        </div>
      </div>
      <CartIcon />
    </header>
  )
}

export default Header
