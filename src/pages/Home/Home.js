import { useState } from 'react';
import './Home.css';
import Service from '../../components/Services/Service';
import Particulars from '../../components/Particulars/Particulars';
import housevector from '../../images/housevec.jpg'
import housevectors from '../../images/housevecc.jpg';
import housevectorss from '../../images/houseveccc.jpg';
import { GrLocation,GrRestroom } from "react-icons/gr";
import { GiMoneyStack } from "react-icons/gi";
// import useHttp from '../../hooks/useHttp';
import {
  useHistory
} from 'react-router-dom';


const Home = () => {
    const history = useHistory();
    // const { sendRequest } = useHttp();
    const [ town,setTown ] = useState('');
    const [ room,setRoom ] = useState('1');
    const [ price,setPrice ] = useState('1000-3000');

    const searchHouses =  () => {
        history.push(`/search/${town}/${room}/${price}`)
    }

     return (
         <div className="home" >
             <div className="home__hero">
                 {/* <h1>Find Your House Rent</h1> */}
                 
                     <div className="home__search__container">
                     <h1>Find Your Dream House</h1>
                        <div className="home__search__inputs">
                          <div className="home__room_location">
                            {/* <img src={map} alt="" /> */}
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
                     </div>
                 
             </div> 
              <div className="home__services">
                    <div className="home__service__item">
                       <img src={housevectors} alt="" />
                       <h3>Rent a house</h3>
                       <div className="home__service__item__p_container">
                       <p>Find the most interesting houses for rent, easy on your pocket</p>
                       </div>
                       <button onClick={()=>history.push('/houses')}>search houses</button>
                    
                    </div>
                    <div className="home__service__item">
                       <img src={housevector} alt="" />
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
             <Particulars />
             <Service />
         </div>
     );
}

export default Home;