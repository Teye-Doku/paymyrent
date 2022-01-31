
import emailjs from 'emailjs-com';
import { useState,useRef } from 'react';
import './LoanApplication.css';



const LoanApplication = () =>{
    const [ agree, setAgree ] = useState(false);
    const [ sending,setSending ] = useState(false);
    const form = useRef();

    const submitform = e => {
         
         e.preventDefault();
         setSending(true)
         emailjs.sendForm('service_pm7gene', 'template_71ik51j',form.current, 'user_sZdhBQugkvHjrY95FRdbd')
         .then((result) => {
             console.log(result.text);
             setSending(false);
         }, (error) => {
             console.log(error.text);
             setSending(false);
         });
    }
    return (
        <div className='loan__application'>
             <div className='loan__application__requirement'>
                     <h3>Requirements</h3>
                     <div className='requirement__item'>
                         <div className='outer__circle'>
                              <div className='inner__circle'></div>
                         </div>
                         <p>Ghana Card (eg. Voter's card,Ghana card,passport)</p>
                     </div>
                     <div className='requirement__item'>
                         <div className='outer__circle'>
                              <div className='inner__circle'></div>
                         </div>
                         <p>One passport size photograph (Preferably on a white background)</p>
                     </div>
                     <div className='requirement__item'>
                         <div className='outer__circle'>
                              <div className='inner__circle'></div>
                         </div>
                         <p>Proof of Address (eg. Utility Bills,Directional Map,Rent Agreement etc.)</p>
                     </div>
             </div>
             <div className='loan__application__form'>
                 <form ref={form} onSubmit={submitform}>
                    <div className="loan__application__form__years">
                        <p>Enter the number of years you want rent for.</p>
                        <input type="number"  name="number_of_years"  />
                    </div>
                    <div className='loan__application__form__years'>
                        <p>Enter charges per month.</p>
                        <input type="text" name="charges_per_month" />
                    </div>
                    <h3>Personal Information</h3>
                    <div className='loan__application__title'>
                        <select name="title">
                            <option value="Mr">Dr</option>
                            <option value="Mrs">Mr</option>
                            <option value="Miss">Miss</option>
                            <option value="Mr">Mrs </option>
                        </select>
                        <input className='input__one' name='other_title' text="text" placeholder='Your title(if other,specify)'/>
                        <input className='input__two' name='surname' type="text" placeholder='Surname'/>
                    </div>
                    <div className='loan__application__name'>
                        <input type='text' name='firstname' placeholder='Firstname' />
                        <input type='text' name='middlename' placeholder='Middlename' />
                        <input type='text' name='nickname' placeholder='Nicknames(if any)' />    
                    </div>
                    <div className='loan__application__gender'>
                        <select name='gender'>
                            <option value="Gender">--Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input name='nationality' type="text" placeholder='Nationality'/>
                    </div>
                    <div className='loan__application__placeofbirth'>
                        <input type="text" name='place_of_birth' placeholder='Place of Birth'/>
                    </div>
                    <div className='loan__application__placeofbirth'>
                        <p>Date of birth</p>
                        <input type="date" name='date_of_birth' placeholder='Date of Birth'/>
                    </div>
                    <div className='loan__application__gender'>
                        <select name='type_of_id'>
                            <option value="typeofid">--Type of Id--</option>
                            <option value="National">Ghana Card</option>
                            <option value="Password">Passport</option>
                            <option value="Voter">Voter's</option>
                            <option value="Drivers">Drivers's License</option>
                        </select>
                        <input type="text" name='id_number' placeholder='ID Number'/>
                    </div>
                    <div className='loan__application__card_expiry'>
                        <div className='loan__application__card_expiry_date'>
                            <p>Issue date</p>
                            <input type="date" name='issue_date' />
                        </div>
                        <div className='loan__application__card_expiry_date'>
                            <p>Expiry date</p>
                            <input type="date" name='expiry_date' />
                        </div>
                    </div>
                    <div className='loan__application__mary__status'>
                        <select name='marital_status'>
                            <option value="">--Marital Status--</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                        </select>
                        <input type="text" name='other_marriage' placeholder="if other (specify)" />
                        <input type="text" name='number_of_dependents' placeholder="No of dependents" />
                    </div>
                    <div className='loan__application__phone__number'>
                        <input type="text" name='phone' placeholder='Phone Number' />
                    </div>
                    <div className="loan__application__terms__agreement">
                        <p>Agree to Terms and Conditions</p>
                        <input type="checkbox" value={agree} onChange={e=>setAgree(!agree)}/>
                    </div>
                    <div className='loan__application__button__container'>
                    { agree && <button type='submit'> { sending ? "Sending": "Send"} </button>}
                    </div>
                 </form>
             </div>
        </div>
    )
}

export default LoanApplication;
