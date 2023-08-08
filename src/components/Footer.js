import React from 'react'

const Footer = ({totalItems}) => {
    return (
        <footer>
            {totalItems} List {totalItems === 1? 'item' : 'items'}
        </footer>
    )
}

export default Footer