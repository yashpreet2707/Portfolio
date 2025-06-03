import React from 'react'
import MyDock from './MyComponents/MyDock'
import Footer from './MyComponents/Footer'
import Header from './MyComponents/Header'

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 '><MyDock /></div>
    </>
  )
}

export default App