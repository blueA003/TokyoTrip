import React from 'react'
import Footer from './components/footer/Footer'
import Introduction from './components/introduction/Introduction'
import Header from './components/header/Header'

export default function page() {
  return (
    <div>
      <Header/>
      <Introduction/>
      <Footer/>
    </div>
  )
}
