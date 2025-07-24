import React from 'react'
import banner5 from '../assets/banner5.jpg'
import Footer from '../components/Footer'
import carrot from '../assets/carrot.jpg'
import salad from '../assets/salad.jpg'
import fastfood from '../assets/fastfood.jpg'
import freshfood from '../assets/fresh juice.jpg'
import vagetables from '../assets/vagetables.jpg'
function Blog() {
  return (
    <>
      <div className="card ">
        <img src={banner5} className="card-img custom-img animate-pop" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title text-white">Home Blog</h5>
          <p className="card-text text-white"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="row">
          {/* left */}
          <div className="col-lg-8 col-sm-12">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6"><img src={salad} alt="" /></div>
                <div className="col-lg-8 col-sm-6 fs-5 px-4"><p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet magni mollitia placeat?</p>
                  <p className='fs-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
              </div>
              <div className="row pt-5">
                <div className="col-lg-4 col-sm-6"><img src={vagetables} alt="" /></div>
                <div className="col-lg-8 col-sm-6 fs-5 px-4"><p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet magni mollitia placeat?</p>
                  <p className='fs-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
              </div>
              <div className="row pt-5">
                <div className="col-lg-4 col-sm-6"><img src={freshfood} alt="" /></div>
                <div className="col-lg-8 col-sm-6 fs-5 px-4"><p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet magni mollitia placeat?</p>
                  <p className='fs-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
              </div>
              <div className="row pt-5">
                <div className="col-lg-4 col-sm-6"><img src={fastfood} alt="" /></div>
                <div className="col-lg-8 col-sm-6 fs-5 px-4"><p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet magni mollitia placeat?</p>
                  <p className='fs-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
              </div>
              <div className="row pt-5">
                <div className="col-lg-4 col-sm-6"><img src={salad} alt="" /></div>
                <div className="col-lg-8 col-sm-6 fs-5 px-4"><p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet magni mollitia placeat?</p>
                  <p className='fs-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-lg-4 col-sm-12">
            <input type="text" placeholder='Search Here' />
            <p className='pt-5 fs-3'>Categories</p>
            <p>Vagetables(12)</p><hr />
            <p>Fruits(22)</p><hr />
            <p>Juice(37)</p><hr />
            <p>Salad(42)</p><hr />
            <p className='pt-5 fs-3'>Recent Blog</p>
            <div className="container">
              <div className="row">
                <div className="col-4"><img src={carrot} alt="" style={{ height: "100px", width: "100px" }} /></div>
                <div className="col-8"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, maxime sunt.</p></div>
              </div>
              <div className="row">
                <div className="col-4 pt-5"><img src={salad} alt="" style={{ height: "100px", width: "100px" }} /></div>
                <div className="col-8 pt-5"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, maxime sunt.</p></div>
              </div>
              <div className="row">
                <div className="col-4 pt-5"><img src={fastfood} alt="" style={{ height: "100px", width: "100px" }} /></div>
                <div className="col-8 pt-5"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, maxime sunt.</p></div>
              </div>
            </div>









            <p className='pt-5 fs-3'>Paragarph</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quo earum consequuntur cum quisquam, nihil minus. Incidunt nam rerum ratione asperiores natus quae quis at, iste non optio voluptatem ipsum?</p>
          </div>


        </div>
      </div>

      <br />
      <hr />
      <br />
      <Footer />
    </>
  )
}

export default Blog
