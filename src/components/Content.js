import React from 'react'
import ItemList from './ItemList'

const Content = ({items, handleChecked, handleDelete}) => {
    return (
        <main>
            {items.length? (
                <ItemList items={items} handleChecked={handleChecked} handleDelete={handleDelete} />
            ) : 
            (
                <p>No item available</p>
            )
        }
            
        </main>
    )
}

export default Content