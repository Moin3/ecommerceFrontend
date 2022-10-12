import React from 'react'
import './shop.css'
// import Footer from '../components/Footer'
import Header from '../../components/header/Header'
// import ShopMainPart from '../../components/ShopMainPart'

const Shop = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header/>
      </header>
      <main className='main'>
        {/* <ShopMainPart /> */}
        moin
      </main>
      <footer className='footer'>
        {/* <Footer /> */}
      </footer>
    </div>
  )
}

export default Shop