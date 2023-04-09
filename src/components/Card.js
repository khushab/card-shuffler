import React from 'react'
import './Card.css'

const Card = ({ card }) => {
  return (
    <div className="card">
      <img className='card-img' src={card?.image} alt={card?.code} />
    </div>
  )
}

export default Card