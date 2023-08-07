import React from 'react'
import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Nonc');
    const [count, SetCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Aa', 'Baba', 'Caca'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = () => {
        SetCount(count + 1)
    }

    // const handleClick2 = (name) => {
    //     console.log(`Hello ${name}`);
    // }

    // const handleClick3 = (e) => {
    //     console.log(e.target.innerText);
    // }

    return (
        <main>
            <p onDoubleClick={handleNameChange}>
            Hello {name} !
            </p>
            <button onClick={handleNameChange}>Change Name!</button>
            <button onClick={handleClick}>Count: {count}</button>
        </main>
    )
}

export default Content