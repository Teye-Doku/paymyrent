import React from 'react';
import map from '../../images/map.svg';
import bedroom from '../../images/bed.svg';
import bath from '../../images/bath.svg';


const SingleHotel = (props) => {
    const {name, img, place, bed, bathroom, price} = props.hotel;
    return (
        <div className="col-md-4">
            <div className="card hotel-card">
                <img className="card-img-top" src={img} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p><img src={map} alt="" className="img-fluid"/> {place}</p>
                    <div className="d-flex justify-content-between">
                        <p><img src={bedroom} alt="" className="img-fluid"/> {bed}</p>
                        <p><img src={bath} alt="" className="img-fluid"/> {bathroom}</p>
                    </div>
                    <div className="d-flex justify-content-between mt_40">
                   <h4>  <span>&#8373;</span> {price}</h4>
                        <button className="btn btn-primary default-btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;