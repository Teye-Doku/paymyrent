import { useContext } from 'react';
import logo from '../../images/paymyrent.jpg';
import './Login.css';
import {
 Link,
}from 'react-router-dom';
import AuthContext from '../../context/authcontext';
import useHttp from '../../hooks/useHttp';
import { useForm } from 'react-hook-form';



const Login = () => {

 const auth = useContext(AuthContext) 
 const { sendRequest,clearError } = useHttp();
 const { register,handleSubmit,errors } = useForm();
     const onSubmit = async (values) => {
        try {
            clearError();
             const responseData =
              await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/users/login`,
                'POST',
                 JSON.stringify(values),
                 {
                   'Content-Type':'application/json'
                 }
                )
                auth.login(responseData.userId,responseData.token);
          }catch(e) {}
     }
    return(
        <div className="login">
            <img src={logo} alt="" className="login__logo"/>
            <div className="login__body">
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="email" name="email" ref={register({
                           required:'email is required',
                           /* eslint-disable */
                           pattern:{
                             value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                             message:'Email is invalid'
                           }
                         })}  />
                     {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}    
                    <input type="password" placeholder="password" name="password" ref={register({
                            required:'Password is required',
                            minLength:{
                              value:6,
                              message:'Password must at least 6 characters'
                            }
                         })}  />
                     {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}    
                    <button  type="submit">login</button>
                  
               </form>
            <p>not having account? <Link to="/signup" className="link">sign up</Link> </p>
           
            </div>
        </div>
    )
}
export default Login;