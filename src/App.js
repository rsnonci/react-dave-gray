import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
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
    <div className="App">
      <Header title="Grocery List" />
      <Content items={items} handleChecked={handleChecked} handleDelete={handleDelete} />
      <Footer totalItems={items.length} />
    </div>
  );
}

export default App;
