import React from 'react'
import banner6 from '../assets/imgi_15_bg_1.jpg'
import Footer from '../components/Footer'
import avail from '../assets/imgi_1_icon_error.png'
import quality from '../assets/imgi_1_icon_error.png'
import shipping from '../assets/imgi_1_icon_error.png'
import fresh from '../assets/imgi_1_icon_error.png'
import Reviews from '../components/Reviews'

function About() {
  const imgsize={
    height: '100px',
    width: '100px'
  }
  return (
    <>
    <div className="card ">
            <img src={banner6} className="card-img custom-img animate-pop" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title text-white">Card title</h5>
              <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text text-white"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>



<Reviews/>

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

export default About
