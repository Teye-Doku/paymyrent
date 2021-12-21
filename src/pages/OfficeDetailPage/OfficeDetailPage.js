import { useState,useEffect} from 'react';
import {
     useParams
} from 'react-router-dom';
import { GrLocation } from "react-icons/gr";
import useHttp from '../../hooks/useHttp';
import './OfficeDetailPage.css';


const  OfficeDetailPage = () =>{

    const { officeid } = useParams();
    const [ office,setOffice ] = useState({});
    const { sendRequest  }   = useHttp();

    useEffect(()=> {
         const fetchOffice = async () => {
               const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/offices/${officeid}`);
               setOffice(responseData?.office);
         }
         fetchOffice();
    },[officeid,sendRequest])

    return (
        <div className="detail" style={{height: "2000px"}}>
        <div className="detailpage">
         <img className="firstimage" src={`${process.env.REACT_APP_BACKEND_URL}/${office.detailimageone}`} alt=""/>
         <img className="secondimage img-fluid" src={`${process.env.REACT_APP_BACKEND_URL}/${office.detailimagetwo}`} alt=""/>  
        </div>
        <div className="detailpage__info">
          <div className="detailpage_description">
             <h3>Description</h3>
             <p>A nice furnished office for your business.</p> 
          </div>
          <div className="detailpage_description">
                 <h3>Location <span><GrLocation /></span></h3> 
              </div>
            </div>
            <div className="detail__location">
                 <ul>
                      <li>Region<span>{office.region}</span></li>
                      <li>Town<span>{office.town}</span></li>
                      <li>Area <span>{office.location}</span></li>
                      <li>Street <span>{office.street}</span></li>
                 </ul>
            </div>
        <div className="detail__payment">
             <button>press to continue</button>
        </div>
    </div>
    )
}

export default OfficeDetailPage;

