import React from 'react'
import Footer from '../components/Footer'
import banner1 from '../assets/banner1.jpg'
import { LuUtensilsCrossed } from "react-icons/lu";
import carrot from '../assets/carrot.jpg'
import apple from '../assets/peas.jpg'
import cabbage from '../assets/cabbage.jpg'

function Cart() {
  return (
    <>
<div className="card ">
                   <img src={banner1} className="card-img custom-img animate-pop" alt="..." />
                   <div className="card-img-overlay">
                     <h5 className="card-title text-white">Welcome to Cart</h5>
                     <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p className="card-text text-white"><small>Last updated 3 mins ago</small></p>
                   </div>
                 </div>

{/* start */}
<br />
<br />
<br />
<div className="container">

<table class="table">
  <thead>
    <tr>
      <th scope="col" style={{backgroundColor:"chocolate"}}></th>
      <th scope="col" style={{backgroundColor:"chocolate"}}>Product</th>
      <th scope="col" style={{backgroundColor:"chocolate"}}>Price</th>
      <th scope="col" style={{backgroundColor:"chocolate"}}>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{justifyContent:"center", alignContent:"center"}}><LuUtensilsCrossed /></th>
      <td><img src={carrot} alt="" style={{height:"90px", width:"90px", justifyContent:"center", alignItems:"center"}} /> carrot</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>5$</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>1</td>
    </tr>
    <tr>
      <th scope="row" style={{justifyContent:"center", alignContent:"center"}}><LuUtensilsCrossed /></th>
      <td><img src={apple} alt=""  style={{height:"90px", width:"90px"}}/> peas</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>6$</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>1</td>
    </tr>
    <tr>
      <th scope="row" style={{justifyContent:"center", alignContent:"center"}}><LuUtensilsCrossed /></th>
      <td><img src={cabbage} alt=""  style={{height:"90px", width:"90px"}}/> cabbage</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>7$</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>2</td>
    </tr>
  </tbody>
</table>
</div>

<br />
<hr />
<br />
    <Footer/>
    </>
  )
}

export default Cart
