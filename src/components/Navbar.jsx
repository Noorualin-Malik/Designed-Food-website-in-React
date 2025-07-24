import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FoodHub</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Shop</Link></li>
                  <li><Link className="dropdown-item" to="/wishlist">Wishlist</Link></li>
                  <li><Link className="dropdown-item" to="/product">Single Product</Link></li>
                  <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                  <li><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cart">Cart</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
