// import logo from './logo.svg';
import './App.css';
import Products from './pages/products/products';
import {Route, Routes} from 'react-router-dom';
import { Home } from './pages/home/home';
import {Nav} from './components/nav'

function App(){
  return (
    <div>
      <Nav />
  <Routes>
    <Route path='/' element={<Home />}></Route>
      <Route path='/Products' element={<Products />} />
  </Routes>
    </div>
  );
}
export default App;