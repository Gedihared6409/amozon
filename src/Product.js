import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import { useStateValue } from "./StateProvider";


function Product(props) {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToCart = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
               
                title: props.title,
                image: props.image,
                price: props.price,
                
            }

        });
    };


    return (
        <div className="Product">
        <div className="Product-description">
            <span className="Product-title">{props.title}</span>
            <span className="Product-price">&{props.price}</span>
            <span className="Product-rating">
            <p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p>
            </span>
        </div>
        <img src={props.image} />
        <Link to='/'>
        <button onClick={addToCart} >Add to Cart</button>
        </Link>
    
    </div>
    )
}

export default Product
