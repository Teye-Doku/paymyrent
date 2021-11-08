import './Footer.css';


const  Footer = () => {
    return (
        <>
          <div className="footer">
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
      </div>
        </>
    )
}

export default Footer;

