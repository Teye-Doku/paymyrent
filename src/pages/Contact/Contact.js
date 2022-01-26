
import email from '../../images/email.jpg';
import phone from '../../images/phone.jpg';
import location from '../../images/Location.jpg';
import ContactItem from './ContactItem';
import pen from '../../images/pen.jpg';
import user from '../../images/user.jpg';
import whatsup from '../../images/what.jpg';
import './Contact.css';

const  Contact = () =>{
    


    return (
        <div className="contact" >
            <div className="contact__hero">
                <h3>Contact Us:</h3>
            </div>
            <div className='contact__info'>
                <ContactItem img={email} title="Email Address" subtitle="info@jaskosdata.com" />
                <ContactItem img={phone} title="Office Line" subtitle="+233(0) 249855932" />
                <ContactItem img={location} title="Location" subtitle="Alfred Adjetey, Street" />
            </div>
            <div className="contact__form">
              <h1>Talk to us</h1>
              <div className='contact__form__groups'>
                   <div className='contact__form_item'>
                       <img  src={user} alt=""/>
                       <input type="text" placeholder='Enter your name' />
                   </div> 
                   <div className='contact__form_item'>
                       <img src={email} alt=""/>
                       <input type="text" placeholder='Enter your email' />
                   </div> 
              </div>
              <div className='contact__form__groups'>
                   <div className='contact__form_item'>
                       <img  src={email} alt=""/>
                       <input type="text" placeholder='Subject' />
                   </div> 
                   <div className='contact__form_item'>
                       <img src={phone} alt=""/>
                       <input type="text" placeholder='Enter your number' />
                   </div> 
              </div>
                    <div className='textarea__container'>
                    <textarea rows="10"></textarea>
                    <img src={pen} alt="" />
                    </div>
                    
                    <button> Send Message</button>
                    <div className='whatsup__container'>
                     <a href='https://wa.me/+233279401417'><img src={whatsup} alt=""/></a>
                    </div>
            </div>
        </div>
    )
}


export default Contact;