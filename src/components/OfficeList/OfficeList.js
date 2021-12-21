import React from 'react';
import { useState,useEffect } from 'react';
import './OfficeList.css';
import SingleOffice from './SingleOffice';
import useHttp from '../../hooks/useHttp';
import { GrLocation} from "react-icons/gr";


const OfficeList = () => {
    const { loading ,sendRequest } = useHttp();
    const [ offices,setOffices ] = useState([]);
    const [ searchTerm,setSearchTerm ] = useState('');

    useEffect(()=> {
            const fetchOffices = async () => {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/offices/`);
                const searchedOffices = searchTerm !== "" ? 
                responseData?.offices.filter(office => office.town.toLowerCase() === searchTerm.toLowerCase())
                : responseData?.offices;
                console.log(searchedOffices);
                setOffices(searchedOffices);
            }
            fetchOffices();
    },[sendRequest,searchTerm])
    return (
        <>
        <div className="search__container">
            <div className="search__container__search">
                <GrLocation />
                <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} type="text" placeholder="type location e.g Tema" />
            </div>
        </div>
         <section className="hotel-list-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headlines text-center">
                            <h2>Discover your dream offices<br/> available today</h2>
                        </div>
                        <div className="row">
                            {loading && <p>loading...</p>}
                            {
                                offices?.map(office => <SingleOffice key={office._id} office={office}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default OfficeList;

