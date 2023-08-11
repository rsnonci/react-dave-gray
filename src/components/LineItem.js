import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({item, handleChecked, handleDelete}) => {
  return (
        <li className='item'>
            <input type="checkbox" checked={item.checked} onChange={() => handleChecked(item.id)} />
            <label style={(item.checked? {textDecoration: 'line-through'} : null)} onDoubleClick={() => handleChecked(item.id)}>{item.name}</label>
            <FaTrashAlt role='button' tabIndex="0" onClick={() => handleDelete(item.id)} aria-label={`Delete ${item.name}`} />
        </li>
  )
}

export default LineItem