import React, { useState } from 'react'
import banner4 from '../assets/imgi_2_bg_1.jpg'
import carrot from '../assets/imgi_1_product-1.jpg'
import Footer from '../components/Footer'
import apple from '../assets/imgi_3_product-1.jpg'
import cabbage from '../assets/imgi_4_product-4.jpg'
import peas from '../assets/imgi_3_product-3.jpg'

function SingleProduct() {
  const[count, setcount]= useState(1)
  const increment=()=>{
    return setcount(count+1)
  }
  const decrement=()=>{
    return setcount(count-1)
  }
  return (
    <>
      {/* Banner Section */}
      <div className="card">
        <img src={banner4} className="card-img custom-img animate-pop" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
          <h5 className="card-title text-white display-4">Fresh Vegetables</h5>
          <p className="card-text text-white">
            High quality, organic vegetables delivered to your door.
          </p>
          <p className="card-text text-white">
            <small>Updated 3 mins ago</small>
          </p>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="container">
        <div className="row pt-5 align-items-center justify-content-center">
          <div className="col-lg-6 col-sm-12 text-center">
            <img src={carrot} style={{ height: "550px", width: "100%", objectFit: "contain" }} alt="Carrot" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <p className='fs-1 fw-bold'>Carrot</p>
            <p>5.0 ⭐⭐⭐⭐⭐ — 600 <span style={{ color: "grey" }}>sold</span></p>
            <p className='fs-3 fw-semibold'>$50.00</p>
            <p style={{ color: "grey" }}>
              Fresh, organic carrots packed with vitamins and great taste. Perfect for salads, cooking, and juicing.
            </p>

            <div className="mb-3">
              <button type="button" className="btn btn-outline-success me-2">Small</button>
              <button type="button" className="btn btn-outline-success me-2">Medium</button>
              <button type="button" className="btn btn-outline-success">Large</button>
            </div>

            <div className="d-flex align-items-center mb-2">
              <button type="button" className="btn btn-outline-success" onClick={decrement}>-</button>
              <span className="mx-3">{count}</span>
              <button type="button" className="btn btn-outline-success" onClick={increment}>+</button>
            </div>
            <p className='mt-2'>600 kg available</p>

            <div className="d-grid gap-2 mt-4">
              <button className="btn btn-secondary" type="button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="text-center my-5">
        <p className="text-uppercase text-muted mb-0">Products</p>
        <h2 className="fw-bold">Related Products</h2>
        <p style={{ color: "grey" }}>Fresh picks just for you, hand-picked and high-quality.</p>
      </div>

      {/* Product Cards */}
      <div className="container">
        <div className="row justify-content-center">

          {[{ name: 'Apple', price: 40, img: apple },
            { name: 'Cabbage', price: 80, img: cabbage },
            { name: 'Peas', price: 20, img: peas },
            { name: 'Apple', price: 20, img: apple }
          ].map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center" key={index}>
              <div className="my-4 border rounded shadow-sm text-center" style={{ width: "250px" }}>
                <img src={item.img} className="card-img-top p-2" alt={item.name} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text py-2">${item.price}.00</p>
                  <button className="btn btn-sm btn-outline-primary my-2">View More</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <hr />
      <br />
      <Footer />
    </>
  )
}

export default SingleProduct
