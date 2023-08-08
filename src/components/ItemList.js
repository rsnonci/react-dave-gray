import React from 'react'
import LineItem from './LineItem'

const ItemList = ({items, handleChecked, handleDelete}) => {
  return (
    items.map((item) => (
        <LineItem key={item.id} item={item} handleChecked={handleChecked} handleDelete={handleDelete} />
    ))
  )
}

export default ItemList