import React from 'react';
import './Signup.css';
import logo from '../../images/paymyrent.png';
import {
 Link
}from 'react-router-dom';

const Signup = () => {
    
    
      const onSubmt = async (values) => {
         console.log(values);
      }

    return(
    
          <div className="signup">
            <img src={logo} alt="" className="signup__logo"/>
           
            <div className="signup__body">
               <form onSubmit={onSubmt}>
               <input type="text" placeholder="name" name="name" />

                    <input type="text" placeholder="email" name="email" />
                    
                    <input type="password" placeholder="password" name="password" />
                    
                    <input type="text" placeholder="phone" name="phone"/>
                    <button  type="submit">signup</button>
                    
               </form>
            <p>having account already ? <Link className="link" to="/login">login</Link> </p>
           
            </div>
        </div>
        
    )
}
export default Signup;