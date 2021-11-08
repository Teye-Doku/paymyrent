import './Contact.css';

const  Contact = () =>{
    return (
        <div className="contact" style={{height:"1500px"}}>
            <div className="contact__hero">
                <h3>Contact Us:</h3>
            </div>
            <div className="contact__content">
                <div className="contact__content__name">
                    <div>
                        <p>First Name*</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Last Name*</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="contact__email">
                    <p>Email*</p>
                    <input type="email" />
                </div>
                <div className="contact__email">
                    <p>Subject*</p>
                    <input type="email" />
                </div>
               <div className="contact__message">
                   <p>Message*</p>
                   <textarea rows="4"></textarea>
               </div>
               <button>Submit</button>
            </div>
        </div>
    )
}


export default Contact;