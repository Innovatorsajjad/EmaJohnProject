import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";

const Product = ({product,handleAddToCart}) => {
    //    const{product,handleAddToCart}=props;
        const {name,img,seller,price,ratings}=product
   
   

    return (
        <div className='product'>
            <img src={img} alt="" />
       
            <div className="product_info">
            <p className='product_name'> {name} </p>
                <p>Price : ${price} </p>
                <p><small>Sller : {seller}</small></p>
                <p>Ratings {ratings} stars</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='button_cart'  ><p className="button_text">Add to Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;