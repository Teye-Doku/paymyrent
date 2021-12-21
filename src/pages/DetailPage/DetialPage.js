import { useState,useEffect } from 'react';
import { GrLocation } from "react-icons/gr";
import { FaToiletPaper } from "react-icons/fa";
import {
 useHistory
} from 'react-router-dom';
import bedroom from  '../../images/bed.svg'
import bath from '../../images/bath.svg';
import useHttp from '../../hooks/useHttp';

import {
    useParams
} from 'react-router-dom'
import './DetailPage.css';

const DetialPage = () => {
    const  { houseid } = useParams();
    const history = useHistory();
    const  [ house,setHouse ] = useState({});
    const { loading,sendRequest } = useHttp();

  
   useEffect(()=>{
        const getHouse = async () => {
            const responseData = await
             sendRequest(`${process.env.REACT_APP_BACKEND_URL}/houses/${houseid}`);
             setHouse(responseData?.house);
        }
        getHouse();
   },[houseid,sendRequest])

    return (
        <div className="detail" style={{height: "2000px"}}>
            <div className="detailpage">
              {loading && <p>loading...</p>}  
             <img className="firstimage" src={`${process.env.REACT_APP_BACKEND_URL}/${house.detailimageone}`} alt=""/>
             <img className="secondimage img-fluid" src={`${process.env.REACT_APP_BACKEND_URL}/${house.detailimagetwo}`} alt=""/>  
            </div>
            <div className="detailpage__info">
                 <h4>House info</h4>
              <div className="detailpage_iconsection">
              
                 <div className="detailpageinfo__category">
                    <p>Bedroom</p>  
                    <div className="detialpageinfo__log">
                         <p>{house.bedroom}</p>
                         <img src={bedroom} alt="" />
                    </div>
                 </div>
                 <div className="detailpageinfo__category">
                    <p>Bathroom</p>  
                    <div className="detialpageinfo__log">
                         <p>{house.bathroom}</p>
                         <img src={bath} alt="" />
                    </div>
                 </div>
                 <div className="detailpageinfo__category">
                    <p>Toilet</p>  
                    <div className="detialpageinfo__log">
                         <p>{house.toilet} </p>
                         {" "}
                         <FaToiletPaper />
                         {/* <img src={bath} alt="" /> */}
                    </div>
                 </div>
              </div>
              <div className="detailpage_description">
                 <h3>Description</h3>
                <p>{house.description}</p>
              </div>
              <div className="detailpage_description">
                 <h3>Location <span><GrLocation /></span></h3> 
              </div>
            </div>
            <div className="detail__location">
                 <ul>
                      <li>Region<span>{house.region}</span></li>
                      <li>Town<span>{house.town}</span></li>
                      <li>Area <span>{house.location}</span></li>
                      <li>Street <span>{house.street}</span></li>
                 </ul>
            </div>
            <div className="detail__payment">
                 <button onClick={()=>history.push('/payments')}>press to continue</button>
            </div>
        </div>
    )
}

export default DetialPage;
