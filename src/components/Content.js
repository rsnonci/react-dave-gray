import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Item 1',
            checked: true
        },
        {
            id: 2,
            name: 'Item 2',
            checked: false
        },
        {
            id: 3,
            name: 'Item 3',
            checked: false
        }
    ]);

    const handleChecked = (id) => {
        const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked} : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id? item : '');
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    return (
        <main>
            {items.length? (
                items.map((item) => (
                    <li key={item.id} className='item'>
                        <input type="checkbox" checked={item.checked} onChange={() => handleChecked(item.id)} />
                        <label style={(item.checked? {textDecoration: 'line-through'} : null)} onDoubleClick={() => handleChecked(item.id)}>{item.name}</label>
                        <FaTrashAlt role='button' tabIndex="0" onClick={() => handleDelete(item.id)} />
                    </li>
                ))
            ) : 
            (
                <p>No item available</p>
            )
        }
            
        </main>
    )
}

export default Content