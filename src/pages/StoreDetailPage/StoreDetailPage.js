import { useState,useEffect } from 'react';
import bedroom from  '../../images/bed.svg'
import bath from '../../images/bath.svg';
import decoimage from '../../images/decoimage.jpg';
import decoimages from '../../images/decorimages.jpg';
import storeone from '../../images/stores/storeone.jpg';
import {
    useParams
} from 'react-router-dom'
import './StoreDetailPage.css';

const StoreDetailPage = () => {
    const  { storeid } = useParams();
    const  [ store,setStore ] = useState({});

  
   useEffect(()=>{
        const settingStore = () => {
            setStore({
                id: 1,
                place: 'East Legon,Accra',
                price: '3,000',
                img: storeone
            })
            console.log(storeid);
            
        }
        settingStore();
   },[storeid])

    return (
        <div className="detail" style={{height: "2000px"}}>
            <div className="detailpage">
             <img className="firstimage" src={decoimage} alt=""/>
             <img className="secondimage img-fluid" src={decoimages} alt=""/>  
            </div>
            <div className="detailpage__info">
              <div className="detailpage_iconsection">
              <div className="detialpageinfo__log">
                     <p>{store.bed}</p>
                     <img src={bedroom} alt="" />
                </div>
                <div className="detialpageinfo__log">
                     <p>{store.bathroom}</p>
                     <img src={bath} alt="" />
                </div>
              </div>
              <div className="detailpage_description">
                 <h3>Description</h3>
                 <p>A nice furnished house with serene environment.</p> 
              </div>
              <div className="detailpage_description">
                 <h3>Location</h3>
                 <p>{store.place}</p> 
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

export default StoreDetailPage;
