import Header from './components/Header'
import LightBox from './components/LightBox'
import Product from './components/Product'
import { CartProvider } from './components/context/CartContext'
import { LightBoxProvider } from './components/context/LightBoxContext'
import './styles/App.css'

function App () {
  return (
    <LightBoxProvider>
      <CartProvider>
        <div className='main_container'>
          <Header />
          <Product />
          <LightBox />
        </div>
      </CartProvider>
    </LightBoxProvider>
  )
}

export default App
