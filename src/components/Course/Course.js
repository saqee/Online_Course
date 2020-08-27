import React, { useState } from 'react';
import fakeData from '../../fakeData/course';
import './Course.css'
import course from '../../fakeData/course';
import Online from '../OnlineClass/Online';
import Cart from '../Cart/Cart';
const Course = () => {

     let [courses,setCourse]=useState(fakeData.slice(0,10));
     const [cart,setCart]=useState([]);
     
    const handleCart=(course)=>{
        let newCourse=[...cart,course]
        setCart(newCourse);
        console.log(newCourse)
        
     }
     const total= cart.reduce((acc,prd)=> parseFloat(acc+prd.price),0)
    return (
        <div className="container">

        <div className="courseName">

        
        <div className="course">
            {
                courses.map(co => <Online course={co} handleCart={handleCart} ></Online>)
            }
            </div>
             <div className="cart">
                <p><b>Cart Summery</b></p> 
                <hr/>
              {
                  cart.map(co => <Cart  cart={co} item={cart}></Cart>)
              }
               <h3>Total Course :{cart.length}</h3>
              <h4>Total Price: {total}</h4>
        </div>
        </div>
        </div>
    );
};

export default Course;