import React from 'react';
import logo from '../../images/paymyrent.jpg';
import './Login.css';
import {
 Link,
}from 'react-router-dom';




const Login = () => {

 
     const onSubmit = async (values) => {
           console.log(values);
     }
    return(
        <div className="login">
            <img src={logo} alt="" className="login__logo"/>
            <div className="login__body">
               <form onSubmit={onSubmit}>
                    <input type="text" placeholder="email" name="email" />
                    <input type="password" placeholder="password" name="password" />
                    <button  type="submit">login</button>
                  
               </form>
            <p>not having account? <Link to="/signup" className="link">sign up</Link> </p>
           
            </div>
        </div>
    )
}
export default Login;