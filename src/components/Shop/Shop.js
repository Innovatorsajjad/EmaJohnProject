import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products , setProducts]= useState([])
    const [cart,setCart]=useState([])

    useEffect (()=>{
        fetch("products.json")
        .then(Response=>Response.json())
        .then(data=>setProducts(data))
    },[]);
    

    const handleAddToCart =(product)=>{
        const newCart ={...cart,product};
        setCart(newCart);  
    }
    
    return (

        <div className='shop_container'>
            <div className="product_container">
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                    
                }
            </div>
            <div className="card_container">
                <h2>Card Container</h2>
                <p>Card length:{cart.length}</p> 
            </div>
        </div>
    );
};

export default Shop;