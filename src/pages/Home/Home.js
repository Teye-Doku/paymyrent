import './Home.css';
// import Service from '../../components/Services/Service';
import Carousels from '../../components/Carousel/Carousel';
// import Particulars from '../../components/Particulars/Particulars';
import housevector from '../../images/housevec.jpg'
import housevectors from '../../images/housevecc.jpg';
import housevectorss from '../../images/houseveccc.jpg';
import approval from '../../images/approval.jpg';
import search from '../../images/search.jpg'
import handshake from '../../images/handshakes.jpg';
import verify from '../../images/verify.jpg';
import flexible from '../../images/flexible.jpg';
import handshakes from '../../images/handshake.jpg';
import money from '../../images/money.jpg';
import hidden from '../../images/hidden.jpg';
import man from '../../images/man.jpeg';

// import { GrLocation,GrRestroom } from "react-icons/gr";
// import { GiMoneyStack } from "react-icons/gi";
// import useHttp from '../../hooks/useHttp';
import {
  useHistory
} from 'react-router-dom';



const Home = () => {
    const history = useHistory();
    // const { sendRequest } = useHttp();
    // const [ town,setTown ] = useState('');
    // const [ room,setRoom ] = useState('1');
    // const [ price,setPrice ] = useState('1000-3000');

    // const searchHouses =  () => {
    //     history.push(`/search/${town}`)
    //     if(!town) {
    //       history.push('/')
    //     }
    //     console.log(room,price);
    // }

     return (
         <div className="home" >
             <div className="home__hero">
                 
                  <div className='home__hero__message'>
                    <h1 className='home__hero__message_h1'>Is Your Rent Due? </h1>
                    {/* <h1 className='home__hero__message_h2'>Monthly</h1>

                    <p>Is Your rent due?</p> */}
                    <p>Don't worry, we will pay upfront for you.</p>

                    <button onClick={e=>history.push('/signup')}>get started</button>
                    
                  </div>
                 
                     {/* <div className="home__search__container">
                     <h1>Find Your Dream House</h1>
                        <div className="home__search__inputs">
                          <div className="home__room_location">
                           
                            <GrLocation />
                            <input 
                            value={town}
                            onChange={e=>setTown(e.target.value)}
                            type="text" 
                            placeholder="type location eg. Tema" />
                          </div>
                          <div className="home__room_location">
                          <GrRestroom />
                          <input value={room} onChange={e=>setRoom(e.target.value)} type="text" placeholder="type room number eg. 1" />
                          </div>
                        </div>
                        <div className="home__search__selects">
                          
                          <div className="home__buselect">
                            <GiMoneyStack />
                            <select value={price} onChange={e=> setPrice(e.target.value)}>
                              <option value="1000-3000">1000-3000</option>
                              <option value="4000-10000">4000-10000</option>
                              <option value="11000-20000">11000-20000</option>
                              <option value="21000-30000">21000-30000</option>
                            </select>
                          </div>
                         <button onClick={searchHouses}>Search</button>
                       </div>
                     </div> */}
                 
             </div> 
             <div className="home__services">
                    <div className="home__service__item">
                       <img src={housevectors} alt="" />
                       <h3>Pay Home Rent</h3>
                       <div className="home__service__item__p_container">
                       <p>We help you to pay your home rent.</p>
                       </div>
                       <button onClick={()=>history.push('/applyloan')}>Apply Now</button>
                    
                    </div>
                    <div className="home__service__item">
                       <img src={housevector} alt="" />
                       <h3>Pay Office Rent</h3>
                       <div className="home__service__item__p_container">
                       <p>We help you to pay your office rent.</p>
                       </div>
                       <button onClick={()=>history.push('/applyloan')}>Apply Now</button>
                    
                    </div>
                    <div className="home__service__item">
                       <img src={housevectorss} alt="" />
                       <h3>Pay Store Rent</h3>
                       <div className="home__service__item__p_container">
                       <p>We help you to pay your store rent.</p>
                       </div>
                       <button onClick={()=>history.push('/applyloan')}>Apply Now</button>
                    
                    </div>
              </div>
             {/* <div className='home__about'>
                  <div className='home__about__imagecontainer'></div>
                  <div className='home__about__text'>
                     <h4>About Us</h4>
                     <div className="about__content">
              <p> <span className="spantext">PayMyRent</span> is the solution to the biggest headache of majority Ghanaians: <span className="spantext">RENT</span>.</p>
              <p>Having to pay one or two year advance for rent, is crippling for most Ghanaians and this has a negative effective on all spheres of the lives of the ordinary Ghanaian. PayMyRent brings an end to that.
                  With PayMyRent you only need to make a 3-month deposit of your rent, we will then advance the remainder of the one or two year rent to the landlord and thereafter you will have to make monthly payments to us. This is a lifesaver!
                  Get to live in your dream home without having to break the bank or your back.
                  PayMyRent. Easy Rent For Everyone.</p>
                </div>
             </div>
             
             </div> */}
             <div className='home__why__chooseus'>
                 <h5>Our Focus</h5>
                  <h3>Why People Choose Us</h3>
                  <div className='home__chooseus__item__container'>
                       <div className='home__chooseus__item'>
                           <img src={flexible} alt="" />
                           <h3>Flexible Options</h3>
                           <p>Paymyrent allows you to find your own house or look 
                             for houses on our website. We will cover your rent for both options!</p>
                       </div>
                       <div className='home__chooseus__item'>
                           <img src={hidden} alt="" />
                           <h3>No Extra Charges</h3>
                           <p>Paymyrent allows you to find your own house or look 
                             for houses on our website. We will cover your rent for both options!</p>
                       </div>
                       <div className='home__chooseus__item'>
                           <img src={handshakes} alt="" />
                           <h3>Loyalty Benefits</h3>
                           <p>Paymyrent allows you to find your own house or look 
                             for houses on our website. We will cover your rent for both options!</p>
                       </div>
                       <div className='home__chooseus__item'>
                           <img src={money} alt="" />
                           <h3>Monthly Payment</h3>
                           <p>Paymyrent allows you to find your own house or look 
                             for houses on our website. We will cover your rent for both options!</p>
                       </div>
                       
                  </div>
             </div>
             <div className='home__banner_message'>
                  <h2>Get The Lowest Interest Rate On The Market.</h2>
             </div>
             <div className="home__howitworks">
                  <div className="home__steps">
                    <div className='home__steps_heading'>
                    <h3>How it works</h3>
                    <h5> Steps to pay your rent monthly.</h5>
                    </div>
                      <div className='home__steps_item'>
                          <img src={search} alt='' />
                          <div className='home__steps__item__content'>
                             <h3>Search</h3>
                             <p>Find your own dream house or browse listings on Paymyrent page</p>
                          </div>
                      </div>
                      <div className='home__steps_item'>
                          <img src={verify} alt='' />
                          <div className='home__steps__item__content'>
                             <h3>Verification</h3>
                             <p>Submit your documents for verification</p>
                          </div>
                      </div>
                      <div className='home__steps_item'>
                          <img src={approval} alt='' />
                          <div className='home__steps__item__content'>
                             <h3>Get Approval</h3>
                             <p>Paymyrent takes 1-4 days to verify documents and provide funding approval</p>
                          </div>
                      </div>
                      <div className='home__steps_item'>
                          <img src={handshake} alt='' />
                          <div className='home__steps__item__content'>
                             <h3>Move In</h3>
                             <p>Sign your contract with Paymyrent and move in. Pay your rent MONTHLY!</p>
                          </div>
                      </div>
                  </div>
                  <div className="home__steps__img">
                     <img src={man} alt=""/>
                  </div>
             </div>
             <Carousels />
             {/* <Particulars /> */}
             {/* <Service /> */}
         </div>
     );
}

export default Home;