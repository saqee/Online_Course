import React from 'react';
import './Online.css'
const Online = (props) => {
    let {name,price,img}=props.course
    return (
        <div className="online">
            
            <img src={img} alt=""/>
           <h1>Name Of this Course:{name}</h1>
           
             <div>
                  <h4>Price:${price}</h4>
                  <button onClick={()=> props.handleCart(props.course)}>Add To Cart</button>
             </div>
               
        </div>
    );
};

export default Online;