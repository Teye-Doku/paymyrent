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
import './OfficePayment.css';

const  OfficePayment = () =>{
     const { officepayid } = useParams();
    const [ status,setStatus ] = useState('');
    const [ to, setTo ] = useState('');
    const [ office,setOffice ] = useState(null);
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { sendRequest } = useHttp();


    useEffect(()=>{
        const getOffice = async () => {
            const responseData = await
             sendRequest(`${process.env.REACT_APP_BACKEND_URL}/offices/${officepayid}`);
             setOffice(responseData?.office);
        }
        getOffice();
    },[sendRequest,officepayid])
    const onSubmit = async () => {
           try {
             const responseData   =   await sendRequest(
                   'https://payproxyapi.hubtel.com/items/initiate',
                    'POST',
                     JSON.stringify( {  
                        "totalAmount": (office?.price * 0.3),
                        "description": "Test with Kwatelai CheckoutInvoice",
                        "callbackUrl": "https://webhook.site/1e46da76-db56-447e-a71a-56c61bb4160e",
                        "returnUrl": `https://paymyrentgh.netlify.app/officepayments/${officepayid}`,
                        "merchantAccountNumber": "2016341",
                        "cancellationUrl": `https://paymyrentgh.netlify.app/officepayments/${officepayid}`,
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
                    paying the rest in monthly deductions. Initial payment:{" "} { office && (office?.price * 0.3)} ghana cedis</p>
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

              
             
                )}
               
                
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

export default OfficePayment;