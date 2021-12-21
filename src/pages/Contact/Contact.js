import { useRef } from 'react';
// import emailjs from 'emailjs-com';
import './Contact.css';

const  Contact = () =>{
    const form = useRef();

    // const submitform = e => {
    //      e.preventDefault();
    //      emailjs.sendForm('service_pm7gene', 'template_71ik51j',form.current, 'user_sZdhBQugkvHjrY95FRdbd')
    //      .then((result) => {
    //          console.log(result.text);
    //      }, (error) => {
    //          console.log(error.text);
    //      });
    // }
    return (
        <div className="contact" style={{height:"1500px"}}>
            <div className="contact__hero">
                <h3>Contact Us:</h3>
            </div>
            <div className="contact__content">
              <form ref={form} >
              <div className="contact__content__name">
                    <div>
                        <p>First Name*</p>
                        <input name="firstname" type="text" />
                    </div>
                    <div>
                        <p>Last Name*</p>
                        <input  name="lastname" type="text" />
                    </div>
                </div>
                <div className="contact__email">
                    <p>Email*</p>
                    <input name="user_email" type="email" />
                </div>
                <div className="contact__email">
                    <p>Subject*</p>
                    <input name="subject" type="text" />
                </div>
               <div className="contact__message">
                   <p>Message*</p>
                   <textarea name="message" rows="4"></textarea>
               </div>
               <button >Submit</button>
              </form>
            </div>
        </div>
    )
}


export default Contact;