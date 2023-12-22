import logo from './logo.svg';
import './App.css';
import './App.css';
import { useState } from 'react';


function App(){
  const[search, setSearch] = useState('');

  const[inStockOnly, setinStockOnly] = useState(false);

  const handleChange = (e) =>{
    setSearch (e.target.value);
  };

  const toggleinStock = (e)=> {
    setinStockOnly(e.target.checked);
  }
  return(
    <div className='app'>
     <input onChange={handleChange} value={search} placeholder='Search....'/>
     <div>
     <input type='checkbox' onChange={handleChange} checked={inStockOnly} id='checkbox'/>
     <label htmlFor='checkbox'> ABC Show only products in stock</label>
     </div>
    </div>
  )
};
export default App;