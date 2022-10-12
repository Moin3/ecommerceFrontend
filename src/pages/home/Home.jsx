import React from 'react'
import './home.css'
// import Footer from '../components/Footer'
import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
// import HomeBlog from '../components/HomeBlog'
// import NewProducts from '../components/NewProducts'

const Home = () => {
  return (
    <div className='wrapper'>
        <div className="header">
          <Header />
        </div>
      <main className='main'>
          <Intro />
        {/* <HomeBlog />
        <NewProducts /> */}
      </main>
      <footer className='footer'>
        {/* <Footer /> */}
      </footer>
    </div>
  )
}

export default Home