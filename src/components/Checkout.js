import React, { useState } from 'react'
import PaypalCheckoutButton from './PaypalCheckoutButton'

function Checkout() {
  const [amount, setAmount] = useState('1.00')

  const product = {
    description: 'Friendly donation',
    price: amount,
  }

  return (
    <div className="checkout-container">

      <h1>FunAsFam.com Kickstarter</h1>
      <input
        type="number"
        placeholder="Please Donate"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <div className="paypal-button-container">
        <PaypalCheckoutButton product={product} />
      </div>
    </div>
  )
}

export default Checkout
