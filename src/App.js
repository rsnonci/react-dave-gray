import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
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

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (listItems) => {
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const addItem = (item) => {
      const id = items.length? items[items.length - 1].id + 1 : 1;
      const myNewItem = {
        id, 
        checked: false, 
        name: item
      };
      const listItems = [...items, myNewItem];

      setAndSaveItems(listItems);
  }

  const handleChecked = (id) => {
      const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked} : item);
      setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id? item : '');
      setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem);
      setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <SearchItem search={search} setSearch={setSearch} />
      <Content items={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))} handleChecked={handleChecked} handleDelete={handleDelete} />
      <Footer totalItems={items.length} />
    </div>
  );
}

export default App;
