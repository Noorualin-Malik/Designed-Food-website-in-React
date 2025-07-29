import React from 'react'
import fruits from '../assets/imgi_19_category-2.jpg'
import vagetables from '../assets/imgi_17_category.jpg'
import juice from '../assets/imgi_20_category-3.jpg'
import dried from '../assets/imgi_21_category-4.jpg'
import overall from '../assets/imgi_17_category.jpg'

import './OurProducts.css' 

function OurProducts() {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-12 col-md-4 p-2">
                        <h4>Fruits</h4>
                        <img src={fruits} alt="Fruits" className="product-img" />
                    </div>
                    <div className="col-sm-12 col-md-4 p-2">
                        <h4>Vagetables</h4>
                        <img src={vagetables} alt="Vegetables" className="product-img" />
                        
                    </div>
                    <div className="col-sm-12 col-md-4 p-2">
                        <h4>Fresh Juice</h4>
                        <img src={juice} alt="Juice" className="product-img" />
                        
                    </div>
                </div>
            </div>
            <br />
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 col-sm-12 p-2">
                        <h4>Salad</h4>
                        <img src={dried} alt="Salad" className="product-img" />
                    </div>
                    <div className="col-md-4 col-sm-12 p-2">
                        <h4>Fast Food</h4>
                        <img src={fruits} alt="Fast Food" className="product-img" />
                    </div>
                    <div className="col-md-4 col-sm-12 p-2">
                        <h4>Soup</h4>
                        <img src={overall} alt="Soup" className="product-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProducts
