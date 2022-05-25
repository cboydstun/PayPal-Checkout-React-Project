import React from 'react'
import ProductImage from '../images/feature.png'


export default function Image() {
  return (
    <div className="image-container">
      <img className="product-image"
        src={ProductImage}
        alt="Product Image"
        width="90%"
      />
    </div>
  )
}
