import React, { useState } from 'react'
import PaypalCheckoutButton from './PaypalCheckoutButton'

function Checkout() {
  const [amount, setAmount] = useState('1.00')

  const product = {
    description: 'Friendly donation',
    price: amount,
  }

  const  handleAmountChange = (e) => {
    //if value is not a number or 0, set to 20.00
    if (isNaN(e.target.value) || e.target.value === '' || e.target.value == '0') {
      setAmount('20.00')
    } else {
      setAmount(e.target.value)
    }
  }

  return (
    <div className="checkout-container">

      <h1>FunAsFam.com Donation</h1>
      <input
        type="number"
        placeholder="Please Donate"
        onChange={handleAmountChange}
        value={amount}
      />
      <p>Thank you!</p>
      <div className="paypal-button-container">
        <PaypalCheckoutButton product={product} />
      </div>
    </div>
  )
}

export default Checkout
