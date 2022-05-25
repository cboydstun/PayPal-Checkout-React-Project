import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Image from './components/Image'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

function App() {
  return (
    <PayPalScriptProvider
      options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className='container'>
                  <Image />
                  <Checkout />
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </PayPalScriptProvider>
  )
}

export default App
