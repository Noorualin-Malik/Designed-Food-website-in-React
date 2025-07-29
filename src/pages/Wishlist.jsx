import React from 'react'
import Footer from '../components/Footer'
import banner5 from '../assets/imgi_2_bg_1.jpg'
import { LuUtensilsCrossed } from "react-icons/lu";
import carrot from '../assets/imgi_3_product-3.jpg'
import apple from '../assets/imgi_6_product-4.jpg'
import cabbage from '../assets/imgi_4_product-4.jpg'
import salad from '../assets/imgi_5_product-5.jpg'
import soup from '../assets/imgi_6_product-6.jpg'

function Wishlist() {
  return (
    <>
<div className="card ">
                   <img src={banner5} className="card-img custom-img animate-pop" alt="..." />
                   <div className="card-img-overlay">
                     <h5 className="card-title text-white">Welcome to Wishlist</h5>
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
    <tr>
      <th scope="row" style={{justifyContent:"center", alignContent:"center"}}><LuUtensilsCrossed /></th>
      <td><img src={salad} alt=""  style={{height:"90px", width:"90px"}}/> Salad</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>10$</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>3</td>
    </tr>
    <tr>
      <th scope="row" style={{justifyContent:"center", alignContent:"center"}}><LuUtensilsCrossed /></th>
      <td><img src={soup} alt=""  style={{height:"90px", width:"90px"}}/> Soup</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>15$</td>
      <td style={{justifyContent:"center", alignContent:"center"}}>1</td>
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

export default Wishlist
