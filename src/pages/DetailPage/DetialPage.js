import { useState,useEffect } from 'react';
import livingroom from '../../images/livingroom.jpg'
import bedroom from  '../../images/bed.svg'
import bath from '../../images/bath.svg';
import {
    useParams
} from 'react-router-dom'
import './DetailPage.css';

const DetialPage = () => {
    const  { apartmentid } = useParams();
    const  [ hotel,setHotel ] = useState({});

  
   useEffect(()=>{
        const settingHotel = () => {
             setHotel(  {
                id: 1,
                name: 'American House',
                place: 'East Legon,Accra',
                bed: '3 Bedrooms',
                bathroom: '2 Bathroom',
                price: '194',
                img: 'https://i.ibb.co/2kXfz4Z/hotel-1.png'
            },)
            console.log(apartmentid);
            
        }
        settingHotel();
   },[apartmentid])

    return (
        <div className="detail" style={{height: "2000px"}}>
            <div className="detailpage">
             <img className="firstimage" src={hotel.img} alt=""/>
             <img className="secondimage img-fluid" src={livingroom} alt=""/>  
            </div>
            <div className="detailpage__info">
              <div className="detailpage_iconsection">
              <div className="detialpageinfo__log">
                     <p>{hotel.bed}</p>
                     <img src={bedroom} alt="" />
                </div>
                <div className="detialpageinfo__log">
                     <p>{hotel.bathroom}</p>
                     <img src={bath} alt="" />
                </div>
              </div>
              <div className="detailpage_description">
                 <h3>Description</h3>
                 <p>A nice furnished house with serene environment.</p> 
              </div>
              <div className="detailpage_description">
                 <h3>Location</h3>
                 <p>{hotel.place}</p> 
              </div>
            </div>
            <div className="detail__location">
                 {/* map container */}
            </div>
            <div className="detail__payment">
                 <button>press to continue</button>
            </div>
        </div>
    )
}

export default DetialPage;
