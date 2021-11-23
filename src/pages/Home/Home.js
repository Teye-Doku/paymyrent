import './Home.css';
import Service from '../../components/Services/Service';
import housevector from '../../images/housevec.jpg'
import housevectors from '../../images/housevecc.jpg';
import housevectorss from '../../images/houseveccc.jpg';

import {
  useHistory
} from 'react-router-dom';


const Home = () => {
    const history = useHistory();
     return (
         <div className="home" >
             <div className="home__hero">
                 {/* <h1>Find Your House Rent</h1> */}
                 
                     <div>
                       {/* <select>
                           <option value="All">All</option>
                           <option value="single">Single room</option>
                           <option value="bedroom">2 bedroom </option>
                      </select>   */}
                       <input placeholder="Enter an address,neighborhood or city." type="text" />
                     <button>Find Now</button>
                     </div>
                 
             </div> 
              <div className="home__services">
                    <div className="home__service__item">
                       <img src={housevector} alt="" />
                       <h3>Rent a house</h3>
                       <div className="home__service__item__p_container">
                       <p>Find the most interesting houses for rent, easy on your pocket</p>
                       </div>
                       <button onClick={()=>history.push('/houses')}>search houses</button>
                    
                    </div>
                    <div className="home__service__item">
                       <img src={housevectors} alt="" />
                       <h3>Rent an office</h3>
                       <div className="home__service__item__p_container">
                       <p>Find the most interesting offices for rent, easy on your pocket</p>
                       </div>
                       <button onClick={()=>history.push('/offices')}>search offices</button>
                    
                    </div>
                    <div className="home__service__item">
                       <img src={housevectorss} alt="" />
                       <h3>Rent a store</h3>
                       <div className="home__service__item__p_container">
                       <p>Find the most interesting stores for rent, easy on your pocket</p>
                       </div>
                       <button onClick={()=>history.push('/stores')}>search stores</button>
                    
                    </div>
              </div>
             <Service />
         </div>
     );
}

export default Home;