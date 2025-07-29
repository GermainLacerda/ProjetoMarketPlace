import React from 'react'
import './ItemCard.css'

const ItemCard = ({testItem}) => {
  console.log(testItem.titulo)
  return (
    <div className='ItemCard'>
      <h2>{testItem.titulo}</h2>
      <img src={testItem.imgLink} alt="" />
      <p>{testItem.price}</p>
    </div>
  )
}

export default ItemCard