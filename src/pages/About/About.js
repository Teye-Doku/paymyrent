import about from '../../images/about.jpeg';
import './About.css';


const  About = () =>(
        <div className="about" style={{height:"1000px"}}>
            <div className="about__hero">
                <h3>About Us:</h3>
            </div>
           <div className='about__container'>
                <img src={about} alt="" />
                <div className="about__content">
                    <p> <span className="spantext">PayMyRent</span> is the solution to the biggest headache of majority Ghanaians: <span className="spantext">RENT</span>.</p>
                    <p>Having to pay one or two year advance for rent, is crippling for most Ghanaians and this has a negative effective on all spheres of the lives of the ordinary Ghanaian. PayMyRent brings an end to that.
                            With PayMyRent you only need to make a 3-month deposit of your rent, we will then advance the remainder of the one or two year rent to the landlord and thereafter you will have to make monthly payments to us. This is a lifesaver!
                            Get to live in your dream home without having to break the bank or your back.
                            PayMyRent. Easy Rent For Everyone.</p>
                </div>
           </div>
        </div>
    );



export default About;