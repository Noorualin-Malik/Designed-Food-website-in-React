import React from 'react'
import banner4 from '../assets/banner4.jpg'
import Footer from '../components/Footer'

function Checkouts() {
  return (
    <>
      <div className="card">
        <img src={banner4} className="card-img custom-img animate-pop" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
          <h5 className="card-title text-white display-4 fw-bold">Checkout</h5>
          <p className="card-text text-white">
            Please enter your shipping and contact details to complete your order.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Left column - Form */}
          <div className="col-lg-8 col-sm-12">
            <form className="p-4 border rounded shadow-sm bg-light">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" required />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" required />
              </div>

              <div className="mb-3">
                <label htmlFor="state" className="form-label">State/Country</label>
                <input type="text" className="form-control" id="state" required />
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">Town/City</label>
                <input type="text" className="form-control" id="city" required />
              </div>

              <div className="mb-3">
                <label htmlFor="zip" className="form-label">Postal Code/ZIP</label>
                <input type="text" className="form-control" id="zip" required />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" required />
              </div>

              <button type="submit" className="btn btn-primary w-100">Place Order</button>
            </form>
          </div>

          {/* Right column - Summary */}
          <div className="col-lg-4 col-sm-12 mt-4 mt-lg-0">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h4 className="mb-3">Order Summary</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Product 1</span>
                  <strong>$20</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Product 2</span>
                  <strong>$15</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Shipping</span>
                  <strong>$5</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  <strong>$40</strong>
                </li>
              </ul>
              <p className="text-muted text-center">Your order will be processed once payment is confirmed.</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <Footer />
    </>
  )
}

export default Checkouts
