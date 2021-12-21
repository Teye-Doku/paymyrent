import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Renovation.css';
const Renovation = () => {
    const form = useRef();

    const submitform = e => {
         
         e.preventDefault();
         emailjs.sendForm('service_pm7gene', 'template_71ik51j',form.current, 'user_sZdhBQugkvHjrY95FRdbd')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
    }
  return(
    <div className="renovation" style={{height:"2000px"}}>
        <div className="renovation__hero">
            <h3>Home Renovation Funds</h3>
            <h3>Get Funds to renovate your house</h3>
        </div>
        <div className="renovation__info">
            <div className="renovation__info__title">
                <p>Get Funds to renovate your property in order to get tenants. 
                    We help renovate and help get tenant.</p>
            </div>
              <h3>all fields required</h3>
             <form ref={form} onSubmit={submitform}>
             <div className="renovation__form">
                 <div className="renovation__form__name">
                     <p>Fullname</p>
                     <input type="text" name="fullname" placeholder="Enter Your Full Name" />
                 </div>
                 <div className="renovation__form__select">
                      <div>
                          <p>Are you the landlord of the property?</p>
                          <select name="status">
                              <option>Yes</option>
                              <option>No</option>
                          </select>
                      </div>
                      <div>
                          <p>Where is the property located?</p>
                          <input type="text" name="location" placeholder="Where is the property located?"/>
                      </div>
                 </div>
                 <div className="renovation__form__select">
                      <div>
                      <p>What's Your Email Address?</p>
                          <input type="text" name="user_email" placeholder="Enter Your Email Address"/>
                      </div>
                      <div>
                          <p>What's Your Phone Number</p>
                          <input type="text" name="phone" placeholder="Enter Your Phone Number"/>
                      </div>
                 </div>
            </div>  
            <button type="submit">Submit & Apply</button>
             </form>
        </div>
   </div>
  );
}
export default Renovation;