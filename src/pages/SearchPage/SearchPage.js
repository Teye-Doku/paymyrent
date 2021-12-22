import { useState,useEffect } from 'react';
import {
 useParams
} from 'react-router-dom';
import './SearchPage.css';
import useHttp from '../../hooks/useHttp';
import SearchDefault from '../../components/SearchDefault/SearchDefault';
import SingleHotel from '../../components/HotelList/SingleHotel';

const SearchPage = () => {
     
      const { town } = useParams();
      const { loading,sendRequest } = useHttp();
      const [ searchedHouses ,setHouses ] = useState([]);
      
       useEffect(()=>{
          
            const fetchHouses = async () => {
                 const responseData = await sendRequest(
                       `${process.env.REACT_APP_BACKEND_URL}/houses/`
                     ); 
                 const searchedResults = town ? responseData?.houses.filter(house => house?.town.toLowerCase() === town.toLowerCase()) :
                                          null;
                 console.log(searchedResults);

                 setHouses(searchedResults);  
          
            }
            fetchHouses();
   
       },[sendRequest,town])
      
     return(
         <div >
           { searchedHouses?.length !== 0 && loading && <p>loading...</p>}
           {searchedHouses && 
           (<>
              { searchedHouses?.length >0 && (
               <div className="search__result__banner">
                <p>{searchedHouses?.length} result found</p>
              </div>
              )}
             <div className="search__result__container">
             
             {
               searchedHouses?.map(searchhouse => <SingleHotel className="search__page__single" key={searchhouse._id} hotel={searchhouse} />)
             }
         </div>
           </>)}
           {searchedHouses?.length === 0 && <SearchDefault />}
         </div>
     );

}
export default SearchPage;