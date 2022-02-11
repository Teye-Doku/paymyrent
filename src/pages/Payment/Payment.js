import { useState,useContext,useEffect } from 'react';
import { GiMoneyStack } from "react-icons/gi";
import { v4 as uuidv4 } from 'uuid';

import { 
  useHistory,
  useParams
 } from 'react-router-dom';
import useHttp from '../../hooks/useHttp'; 


import AuthContext from '../../context/authcontext';
import HubtelPayment from '../HubtelPayment/HubtelPayment';
import './Payment.css';

const  Payment = () =>{
     const { housepayid } = useParams();
    const [ status,setStatus ] = useState('');
    const [ to, setTo ] = useState('');
    const [ house,setHouse ] = useState(null);
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { sendRequest } = useHttp();


    useEffect(()=>{
        const getHouse = async () => {
            const responseData = await
             sendRequest(`${process.env.REACT_APP_BACKEND_URL}/houses/${housepayid}`);
             setHouse(responseData?.house);
        }
        getHouse();
    },[sendRequest,housepayid])
    const onSubmit = async () => {
           try {
             const responseData   =   await sendRequest(
                   'https://payproxyapi.hubtel.com/items/initiate',
                    'POST',
                     JSON.stringify( {  
                        "totalAmount": (house?.price * 0.3),
                        "description": "Test with Kwatelai CheckoutInvoice",
                        "callbackUrl": "https://webhook.site/1e46da76-db56-447e-a71a-56c61bb4160e",
                        "returnUrl": "http://hubtel.com/online",
                        "merchantAccountNumber": "2016341",
                        "cancellationUrl": "http://hubtel.com/online",
                        "clientReference": uuidv4()
                      }),
                      {
                          'Content-Type':'application/json',
                          'Authorization':'Basic OEVFZ3BSTDpmMjUyMmU5NGViNTU0MzBkOWVmYTA4OWZlODdhNGVmZQ=='
                      }
                   )
                   console.log(responseData)
                    setStatus(responseData.status);
                    setTo(responseData.data.checkoutDirectUrl);
                    
                   //history.replace(responseData.data.checkoutDirectUrl)
                   
           }catch(e) {
               
           }
    }
    return (
        <>
           { status && <HubtelPayment to={to} /> } 
           {!status && (<div className="payments" style={{height:"1000px"}}>
            { !auth.token && (
                <div className="payments__authentication">
                      <button onClick={e=>history.push('/login')}>Login</button>
                      <button onClick={e=>history.push('/signup')}>Register</button>
                </div>
            )}
             <div className="payments__subscription">
                   <h3>Learn your payment plan</h3>
                   <div className="payments__money__icon">
                     <GiMoneyStack />
                   </div>
             </div>

             <div className="payments__confirm">
                <div className="payments__confirm__description">
                <div className="payments__step__1">
                     1
                 </div>
                     <p>Know your billing cycle</p>
                </div>
                <div className="payments__confirm__actual">
                    <p>You are required to pay 30% of rent which equals 3 months,
                    paying the rest in monthly deductions. Initial payment:{" "} { house && (house?.price * 0.3)} ghana cedis</p>
                </div>
             </div>
             <div className="payments__method">
                <div className="payments__method__description">
                <div className="payments__step__2">
                     2
                 </div>
                     <p>Proceed to checkout</p>
                </div>
                {!auth.token ? (<div>
                    <p>Register And Login to proceed.</p>
                </div>):(
                 <div className="payments__submit__cancel">
                     
                      <button className="submit" onClick={onSubmit}>Proceed to Checkout</button> 
                      {/* { isAdding && <button onClick={()=>setIsAdding(false)} className="cancel">Cancel</button>} */}
                 </div>

                //      <div className="payments__confirm__method">
                //      <div className="payments__method__add">
                //           <div>
                //           <img src={visa} alt="" onClick={()=>{
                //               setIsVisa(!isVisa);
                //               setIsMtn(false);
                //               setIsAirtelTigo(false);
                //               setIsVoda(false);
                //           }}/>
                //            { isAdding && (<span>
                //                   <img src={mtn} alt="" onClick={()=>{
                //                       setIsMtn(!isMtn);
                //                       setIsVisa(false)
                //                       setIsAirtelTigo(false);
                //                      setIsVoda(false);
                //                   }}/>
                //                   <img src={airteltigo} alt="" onClick={()=>{
                //                       setIsMtn(false);
                //                       setIsVisa(false)
                //                       setIsAirtelTigo(!isAirtelTigo);
                //                      setIsVoda(false);
                //                   }} />
                //                   <img src={vodafone} alt="" onClick={()=>{
                //                       setIsMtn(false);
                //                       setIsVisa(false)
                //                       setIsAirtelTigo(false);
                //                       setIsVoda(!isVoda);
                //                   }} />
                //                   </span>)}
                //           </div>
                //           <div>  
                //             {!isAdding &&  <button onClick={()=>setIsAdding(true)}>Add payment method <AiOutlinePlus /></button>}
                            
                //           </div>
                //      </div>
                // </div>
             
                )}
                {/* { isAdding && (
                     <div className="payments__info__inputs">
                     {
                         isVisa && (  <div className="payments__visa">
                         <div className="payments__name">
                             <p>First name*</p>
                             <input type="text" />
                         </div>
                         <div className="payments__name">
                             <p>Last name*</p>
                             <input type="text" />
                         </div>
                         <div className="payments__name">
                             <p>Credit or Debit card number*</p>
                             <input type="text" />
                         </div>
                         <div className="payments__visa__info">
                         <div className="payments__card__info">
                             <p>Expiration date*</p>
                             <input type="text" placeholder="dd/mm/yy" />
                         </div>
                         <div className="payments__card__info">
                             <p>Security code*</p>
                             <input type="text" />
                         </div>
                       </div>
                      </div>)
                     }
                     {   isMtn && (
                             <div className="payments__mtn">
                                 <p>Enter Mtn Momo Number*</p>
                                 <input type="text" />
                             </div>
                         )
                     }
                     {   isAirtelTigo && (
                             <div className="payments__mtn">
                                 <p>Enter Airteltigo money Number*</p>
                                 <input type="text" />
                             </div>
                         )
                     }
                     {   isVoda && (
                             <div className="payments__mtn">
                                 <p>Enter vodafone Number*</p>
                                 <input type="text" />
                             </div>
                         )
                     }
                  </div>
                )
                } */}
                
             </div>
             <div className="payments__review">
                <div className="payments__review__description">
                <div className="payments__step__3">
                     3
                 </div>
                     <p>Review your order</p>
                </div>
                <div className="payments__confirm__review">
                     <div className="payments__method__review">
                         <ul>
                             <li>30% of the total rent would deducted every months.</li>
                             <li>Renting starts the day you made payment.</li>
                         </ul>
                     </div>
                </div>
             </div>
        </div>)}
        </>
    )
}

export default Payment;