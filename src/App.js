// import logo from './logo.svg';
import './App.css';
import './App.css';
import { useState } from 'react';
import { ProductsTable } from './productsTable';

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]


function App(){
  const[search, setSearch] = useState('');
  const[selectedCategory, setSelectedCategory] = useState("")
  const[inStockOnly, setinStockOnly] = useState(false);

  const handleChange = (e) =>{
    setSearch (e.target.value);
  };


  const toggleInStock = (e)=> {
    setinStockOnly(e.target.checked);
  }


  const selectCategory = (e) =>{
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  const filteredProducts = products.filter((product) =>{
    if(selectedCategory === ''){
      return true;
    }
    return product.category === selectedCategory;
  }).filter((product) =>{
    return product.name.toLowerCase().includes(search.toLowerCase());
  })
  .filter((product) =>{
    if (inStockOnly)
      return product.stocked;
    
    return true;
  });
  // .filter((product) =>{
  //   return product.stocked
  // });


  return (
    <div className="app">
      <input onChange={handleChange} value={search} placeholder="Search ..." />
      <div className="flex justify-between">
        <div>
          <input
            type="checkbox"
            onChange={toggleInStock}
            checked={inStockOnly}
            id="checkbox"
          />
          <label htmlFor="checkbox">Show only products in stock</label>
        </div>
        <div>
          <select value={selectedCategory} onChange={selectCategory}>
            <option value="All">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
          </select>
        </div>
      </div>
      <ProductsTable category={selectedCategory} products={filteredProducts} />
    </div>
  );
}
export default App;