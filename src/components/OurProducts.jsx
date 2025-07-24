import React from 'react'
import fruits from '../assets/fruits.jpg'
import vagetables from '../assets/vagetables.jpg'
import juice from '../assets/fresh juice.jpg'
import salad from '../assets/salad.jpg'
import fastfood from '../assets/fastfood.jpg'
import soup from '../assets/soup.jpg'
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
                        <img src={salad} alt="Salad" className="product-img" />
                    </div>
                    <div className="col-md-4 col-sm-12 p-2">
                        <h4>Fast Food</h4>
                        <img src={fastfood} alt="Fast Food" className="product-img" />
                    </div>
                    <div className="col-md-4 col-sm-12 p-2">
                        <h4>Soup</h4>
                        <img src={soup} alt="Soup" className="product-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProducts
