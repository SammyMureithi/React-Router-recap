import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navigation from './Components/Navigation';
import Order from './Components/Order';
import NoMatch from './NoMatch';
import Products from './Components/Products';
import NewProducts from './NewProducts';
import Featured from './Featured';
import Users from './Components/Users';
import DynamicRoute from './DynamicRoute';
import SearchParam from './SearchParam';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='place-order' element={<Order />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='products' element={<Products />}>
          <Route index element={<Featured/>}/>
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='user' element={<Users />}/>
        <Route path='user/:userId' element={<DynamicRoute />} />
        <Route path='seachParam' element={<SearchParam/>}/>
    </Routes>
    </div>
  );
}

export default App;
