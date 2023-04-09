import React from 'react'
import './CardsBack.css'

const CardsBack = () => {
  const IMAGE_URL = 'https://i.pinimg.com/originals/6c/a0/16/6ca016115a894f69dea75cc80f95ad92.jpg'
  return (
      <img className='cards-back' src={IMAGE_URL} alt="cards-back" />
  )
}

export default CardsBack