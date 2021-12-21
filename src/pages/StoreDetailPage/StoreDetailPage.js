import { useState,useEffect } from 'react';
// import bedroom from  '../../images/bed.svg'
// import bath from '../../images/bath.svg';
// import decoimage from '../../images/decoimage.jpg';
// import decoimages from '../../images/decorimages.jpg';
// import storeone from '../../images/stores/storeone.jpg';
import { GrLocation } from "react-icons/gr";
import {
    useParams
} from 'react-router-dom'
import './StoreDetailPage.css';
import useHttp from '../../hooks/useHttp';

const StoreDetailPage = () => {
    const  { storeid } = useParams();
    const { sendRequest } = useHttp();
    const  [ store,setStore ] = useState({});

  
   useEffect(()=>{
         const fetchStore = async () => {
              const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/stores/${storeid}`);
              setStore(responseData?.store);
         } 
         fetchStore();
   },[sendRequest,storeid])

    return (
        <div className="detail" style={{height: "2000px"}}>
            <div className="detailpage">
             <img className="firstimage" src={`${process.env.REACT_APP_BACKEND_URL}/${store.detailimageone}`} alt=""/>
             <img className="secondimage img-fluid" src={`${process.env.REACT_APP_BACKEND_URL}/${store.detailimagetwo}`} alt=""/>  
            </div>
            <div className="detailpage__info">
              <div className="detailpage_description">
                 <h3>Description</h3>
                 <p>A nice furnished store for your business.</p> 
              </div>
              <div className="detailpage_description">
                 <h3>Location <span><GrLocation /></span></h3> 
              </div>
            </div>
            <div className="detail__location">
                 <ul>
                      <li>Region<span>{store.region}</span></li>
                      <li>Town<span>{store.town}</span></li>
                      <li>Area <span>{store.location}</span></li>
                      <li>Street <span>{store.street}</span></li>
                 </ul>
            </div>
            <div className="detail__payment">
                 <button>press to continue</button>
            </div>
        </div>
    )
}

export default StoreDetailPage;
