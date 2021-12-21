import { useState } from 'react';
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

import visa from '../../images/payments/visa.png';
import airteltigo from '../../images/payments/airteltigo.jpg';
import mtn from '../../images/payments/mtn.png';
import vodafone from '../../images/payments/vodafone.png';
import './Payment.css';

const  Payment = () =>{
    const [ isAdding,setIsAdding ] = useState(false);
    const [ isVisa,setIsVisa ] = useState(false);
    const [ isMtn,setIsMtn ] = useState(false);
    const [ isAirtelTigo,setIsAirtelTigo ] = useState(false);
    const [ isVoda,setIsVoda ] = useState(false);
    return (
        <div className="payments" style={{height:"1000px"}}>
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
                    paying the rest in monthly deductions.</p>
                </div>
             </div>
             <div className="payments__method">
                <div className="payments__method__description">
                <div className="payments__step__2">
                     2
                 </div>
                     <p>Select Your Payment Method</p>
                </div>
                <div className="payments__confirm__method">
                     <div className="payments__method__add">
                          <div>
                          <img src={visa} alt="" onClick={()=>{
                              setIsVisa(!isVisa);
                              setIsMtn(false);
                              setIsAirtelTigo(false);
                              setIsVoda(false);
                          }}/>
                           { isAdding && (<span>
                                  <img src={mtn} alt="" onClick={()=>{
                                      setIsMtn(!isMtn);
                                      setIsVisa(false)
                                      setIsAirtelTigo(false);
                                     setIsVoda(false);
                                  }}/>
                                  <img src={airteltigo} alt="" onClick={()=>{
                                      setIsMtn(false);
                                      setIsVisa(false)
                                      setIsAirtelTigo(!isAirtelTigo);
                                     setIsVoda(false);
                                  }} />
                                  <img src={vodafone} alt="" onClick={()=>{
                                      setIsMtn(false);
                                      setIsVisa(false)
                                      setIsAirtelTigo(false);
                                      setIsVoda(!isVoda);
                                  }} />
                                  </span>)}
                          </div>
                          <div>  
                            {!isAdding &&  <button onClick={()=>setIsAdding(true)}>Add payment method <AiOutlinePlus /></button>}
                            
                          </div>
                     </div>
                </div>
                { isAdding && (
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
                }
                <div className="payments__submit__cancel">
                     
                     { isAdding?<button className="submit">Submit</button> :null}
                     { isAdding && <button onClick={()=>setIsAdding(false)} className="cancel">Cancel</button>}
                </div>
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
        </div>
    )
}

export default Payment;