import { useState,useEffect } from 'react';
import {
 useParams
} from 'react-router-dom';
import './SearchPage.css';
import useHttp from '../../hooks/useHttp';
import SearchDefault from '../../components/SearchDefault/SearchDefault';
import SingleHotel from '../../components/HotelList/SingleHotel';
const SearchPage = () => {
     
      const { town,roomnumber,price} = useParams();
      const { loading,sendRequest } = useHttp();
      const [ searchedHouses ,setHouses ] = useState([]);
      
       useEffect(()=>{
          
            const fetchHouses = async () => {
                 const responseData = await sendRequest(
                       `${process.env.REACT_APP_BACKEND_URL}/houses/`
                     ); 
                 const searchedResults = town !== '' ? responseData?.houses.filter(house => house?.town.toLowerCase() === town) :
                                          null;
                 console.log(searchedResults);                             
                 setHouses(searchedResults);  
          
            }
            fetchHouses();
            console.log(roomnumber,price)
       },[sendRequest,town,roomnumber,price])
     return(
         <div >
           { searchedHouses?.length !== 0 && loading && <p>loading...</p>}
           {searchedHouses && 
           (<div className="search__result__container">
               {
                 searchedHouses?.map(searchhouse => <SingleHotel key={searchhouse._id} hotel={searchhouse} />)
               }
           </div>)}
           {searchedHouses?.length === 0 && <SearchDefault />}
         </div>
     );

}
export default SearchPage;