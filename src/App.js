import './App.css';
import { useState } from 'react';
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './data'

const allCategories = ['all', ... new Set(items.map((item)=>item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <>
      <div className="container">
        <h1 id="heading">Our Menu</h1>
      </div>
      <div className="center">
        <Categories categories={categories} filterItems={filterItems} />
      </div>
      <div className="bhak">
        <Menu items={menuItems}/>
      </div>
      
    </>
  );
}

export default App;
