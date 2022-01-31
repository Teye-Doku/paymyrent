import React from 'react';
import './Signup.css';
import logo from '../../images/paymyrent.jpg';
import {
 Link
}from 'react-router-dom';
import useHttp from '../../hooks/useHttp';
import { useForm } from 'react-hook-form';
const Signup = () => {
   const { sendRequest,clearError,error } = useHttp();  
   const {  register, handleSubmit ,errors } = useForm();
    
      const onSubmt = async (values) => {
         
         clearError();
         try {
         await sendRequest(
              `${process.env.REACT_APP_BACKEND_URL}/users/register`,
              'POST',
               JSON.stringify(values),
              {
                'Content-Type':'application/json'
              }
            );
            
         }catch(e) {}
      }

    return(
    
          <div className="signup">
            <img src={logo} alt="" className="signup__logo"/>
           
            <div className="signup__body">
               <form onSubmit={handleSubmit(onSubmt)}>
               <input type="text" placeholder="name" name="name" ref={register({
                           required:'name is required'
                         })} />
                      {errors?.name && <p style={{color:"red"}}>{errors?.name.message}</p>}
                    <input type="text" placeholder="email" name="email" ref={register({
                      required:'email is required',
                      /* eslint-disable */
                      pattern:{
                        value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message:'Email is invalid'
                      }
                    })} />
                    {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
                    <input type="password" placeholder="password" name="password"  ref={register({
                      required:'Password is required',
                      minLength:{
                        value:6,
                        message:'Password must at least 6 characters'
                      }
                    })} />
                    {errors?.password && <p style={{color:"red"}}>{errors?.password.message}</p>}
                    
                    <input type="text" placeholder="phone" name="phone" ref={register({
                           required:'phone is required'
                         })} />
                    {errors.phone && <p style={{color:"red"}}>{errors.phone.message}</p>}
                    <button  type="submit">signup</button>
                    {error && <p>User Already exists try to login</p>}
               </form>
            <p>having account already ? <Link className="link" to="/login">login</Link> </p>
           
            </div>
        </div>
        
    )
}
export default Signup;