import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Checkouts from './pages/Checkouts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Shop/>} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/product" element={<SingleProduct/>}/>
        <Route path="/checkout" element={<Checkouts/>}/>
      </Routes>

    </>
  );
}

export default App;
