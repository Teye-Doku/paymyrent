import { useEffect,useState } from 'react';
import './HotelList.css';
import SingleHotel from './SingleHotel';
import useHttp from '../../hooks/useHttp';
import { GrLocation} from "react-icons/gr";


const HotelList = () => {
    const {loading,sendRequest } = useHttp();
    const [ houses,setHouses ] = useState([]);
    const [ searchTerm,setSearchTerm ] = useState('');
    
     useEffect(()=>{
        
          const fetchHouses = async () => {
               const responseData = await sendRequest(
                     `${process.env.REACT_APP_BACKEND_URL}/houses/`
                   );
                const searchedHouses = searchTerm !== ""? responseData?.houses.filter(house => house.town.toLowerCase() === searchTerm.toLowerCase())
                                       : responseData?.houses;   
                setHouses(searchedHouses);  
        
          }
          fetchHouses();
     },[sendRequest,searchTerm])
     
    return (
      <>   
            <div className="search__container">
                    <div className="search__container__search">
                        <GrLocation />
                        <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}  type="text" placeholder="type location e.g Tema" />
                    </div>
            </div>
            <section className="hotel-list-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                                 
          
                        <div className="headlines text-center">
                            <h2>Discover the latest Rent <br/> available today</h2>
                        </div>
                        <div className="row">
                            { loading && <p> loading</p>}
                            {
                                houses?.map(hotel => <SingleHotel key={hotel._id} hotel={hotel}></SingleHotel>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
};

export default HotelList;

