import React from 'react';
import './Cart.css'
const Cart = (props) => {
    let {name,price}=props.cart
   // let item=props.item
   // const total= item.reduce((acc,prd)=> parseFloat(acc+prd.price),0)
    
    return (
        <div className="cart">
            
           
            <h2>Name:{name}</h2>
            <h2>Price:{price}</h2>
           
           
        </div>
    );
};

export default Cart;