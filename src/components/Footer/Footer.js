import './Footer.css';
import airteltigo from '../../images/payments/airteltigo.jpg';
import mtn from '../../images/payments/mtn.png';
import visa from '../../images/payments/visa.png';
import vodafone from '../../images/payments/vodafone.png';

const  Footer = () => {
    return (
        <>
          <div className="footer"
              style={{
                background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('./african_pattern.png')",
                backgroundSize: "contain",
            }}
          >
           <div className="footer__left">
              <div className="footer__item">
                  <h3>About</h3>
                  <div className="footer__spacing"></div>
                  <p>About paymyrentgh.com</p>
                  <p>Partnerships</p>
                  <p>Services</p>
                  <p>Custom Pick</p>
                  
              </div>
              <div className="footer__item">
                  <h3>Contact</h3>
                  <div className="footer__spacing"></div>
                  <p>Telephone: +233 249855932</p>
                  <p>Address: Alfred Adejetey Street</p>
                  <p>Email: info@paymyrentgh.com </p>
              </div>
              <div className="footer__item">
                  <h3>Legal</h3>
                  <div className="footer__spacing"></div>
                  <p>Terms of Use</p>
                  <p>Security</p>
                  <p>Privacy Policy</p>
      
              </div>
              <div className="footer__item">
                  <h3>Connect</h3>
                  <div className="footer__spacing"></div>
                  <p>Customer Support</p>
                  <p>Careers</p>
              </div>
           </div>
           <div>
           <div className="footer__item">
                  <h3>Payment Methods</h3>
                  <div className="footer__spacing"></div>
                   <div className="payments">
                       <img src={mtn} alt=""/>
                       <img src={airteltigo} alt=""/>
                       <img src={vodafone} alt=""/>
                       <img src={visa} alt=""/>
                   </div>
              </div>
           </div>
      </div>
        </>
    )
}

export default Footer;

