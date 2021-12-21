import { useRef } from 'react';
import './Tenant.css';
import emailjs from 'emailjs-com';
const Tenant = () => {
    const form = useRef();

    const submitform = e => {
         
         e.preventDefault();
         emailjs.sendForm('service_pm7gene', 'template_1tk134h',form.current, 'user_sZdhBQugkvHjrY95FRdbd')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
    }
  return(
    <div className="tenat" style={{height:"2000px"}}>
        <div className="tenat__hero">
            <h3>Tenant Verification</h3>
            <h3>Get Your Tenants Verified.</h3>
        </div>
        <div className="tenat__info">
            <div className="tenat__info__title">
                <p>Paymyrent helps you verify your tenants and submit report such as, Credit History, 
                    Employment/Business Report,etc.</p>
            </div>
              <h3>Give Us The Details To Reach You On</h3>
            <div className="tenat__form">
               <form ref={form} onSubmit={submitform}>
               <div className="tenat__form__name">
                     <p>Fullname</p>
                     <input type="text"  name="fullname"placeholder="Enter Your Full Name" />
                 </div>
                 <div className="tenat__form__select">
                      <div>
                      <p>What's Your Email Address?</p>
                          <input type="email" name="user_email" placeholder="Enter Your Email Address"/>
                      </div>
                      <div>
                          <p>What's Your Phone Number</p>
                          <input type="text" name="phone" placeholder="Enter Your Phone Number"/>
                      </div>
                 </div>
               
            <button type="submit">Submit & Apply</button>
            </form>
            </div>  
        </div>
   </div>
  );
}
export default Tenant;