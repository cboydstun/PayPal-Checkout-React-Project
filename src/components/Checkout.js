import React, { useState } from 'react'
import PaypalCheckoutButton from './PaypalCheckoutButton'

function Checkout() {
  const [product, setProduct] = useState({
    description: '',
    price: '',
  })

  const [note, setNote] = useState('')
  const [amount, setAmount] = useState()

  const [ready, setReady] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      amount === undefined ||
      amount === '' ||
      amount === null ||
      amount == 0 ||
      amount === NaN
    ) {
      setReady(false)
      alert('Please enter a valid amount')
      setAmount('20.00')
    } else {
      setReady(true)
      setProduct({
        description: note,
        price: amount,
      })
    }
  }

  return (
    <div>
      {!ready ? (
        <div className="checkout-container">
          <h1>
            <a className="domain">FunAsFam.com</a> Donation
          </h1>
          <input
            className="amount-input"
            type="number"
            placeholder="💲💲💲"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          <input
            className="note-input"
            type="text"
            placeholder="🥰 Note"
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
          <button onClick={handleSubmit}>Donate</button>
          <p>Thank you!</p>
        </div>
      ) : (
        <div className="paypal-button-container">
          <PaypalCheckoutButton product={product} />
        </div>
      )}
    </div>
  )
}

export default Checkout
