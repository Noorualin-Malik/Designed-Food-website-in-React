import React from 'react'
import Navbar from '../components/Navbar'
import banner4 from '../assets/banner4.jpg'
import './Home.css'
import OurProducts from '../components/OurProducts'
import Reviews from '../components/Reviews'
import avail from '../assets/avail-removebg-preview.png'
import quality from '../assets/quality-removebg-preview.png'
import shipping from '../assets/shipping-removebg-preview.png'
import fresh from '../assets/fresh-removebg-preview.png'
import Footer from '../components/Footer'
import apple from '../assets/apple.jpg'
import cabbage from '../assets/cabbage.jpg'
import peas from '../assets/peas.jpg'



function Home() {
  const imgsize={
    height: '100px',
    width: '100px'
  }
  return (
    <>
      {/* hero section */}
      <div className="card ">
        <img src={banner4} className="card-img custom-img animate-pop" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title text-white">Card title</h5>
          <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text text-white"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* our products */}
      <h2 className='text-center'>Our Products</h2>
      <br />
      <OurProducts />
      <br />
      <Reviews />
      {/* <br />
      <h2 className='text-center'>Write Your Review</h2>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Your Review</label>
      </div> */}
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
      <br />
      <h2 className='text-center'>Why Choose us?</h2>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center align-item-center"><img src={avail} alt="" style={imgsize}/></div>
          <div className="col-md-3 d-flex justify-content-center align-item-center"><img src={quality} alt="" style={imgsize}/></div>
          <div className="col-md-3 d-flex justify-content-center align-item-center"><img src={shipping} alt="" style={imgsize}/></div>
          <div className="col-md-3 d-flex justify-content-center align-item-center"><img src={fresh} alt="" style={imgsize}/></div>

        </div>
      </div>
<br />
<hr />
<br />
      <Footer/>
    </>
  )
}

export default Home
