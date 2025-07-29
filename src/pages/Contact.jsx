import React from 'react'
import banner2 from '../assets/imgi_2_bg_1.jpg'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
     <div className="card ">
                <img src={banner2} className="card-img custom-img animate-pop" alt="..." />
                <div className="card-img-overlay">
                  <h5 className="card-title text-white">Welcome to Contact page</h5>
                  <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text text-white"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
<br />
<br />
<br />
      {/* form */}
      <div style={{backgroundColor:"beige"}}>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Message</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>
          </div>
        </div>
      </div>
      </div>
      <br />
      <br />
      
      <hr />
      <br />
      <Footer/>
    </>
  )
}

export default Contact
