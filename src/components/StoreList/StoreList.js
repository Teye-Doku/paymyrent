import { useState,useEffect} from 'react';
import './StoreList.css';
import SingleStore from './SingleStore';
import useHttp from '../../hooks/useHttp';
import { GrLocation} from "react-icons/gr";


const StoreList = () => {
    const {loading, sendRequest } = useHttp();
    const [ stores,setStores ] = useState([]);
    const [ searchTerm,setSearchTerm ] = useState('');

    useEffect(()=> {
           const fetchStores = async () => {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/stores/`);
                const searchedStores =
                 searchTerm !== ""? responseData?.stores.filter(store => store.town.toLowerCase() === searchTerm.toLowerCase()) 
                : responseData?.stores;
                setStores(searchedStores);
           }

           fetchStores();
    },[sendRequest,searchTerm]);

    return (
       <>
        <div className="search__container">
            <div className="search__container__search">
                <GrLocation />
                <input  value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="type location e.g Tema" />
            </div>
        </div>
         <section className="hotel-list-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headlines text-center">
                            <h2>Discover the latest Stores <br/> available today</h2>
                        </div>
                        <div className="row">
                            { loading && <p>loading...</p>}
                            {
                                stores.map(store => <SingleStore key={store._id} store={store}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    );
};

export default StoreList;

