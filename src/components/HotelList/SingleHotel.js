import './SingleHotel.css';
import map from '../../images/map.svg';
import bedroom from '../../images/bed.svg';
import bath from '../../images/bath.svg';
import {
     Link
} from 'react-router-dom';


const SingleHotel = (props) => {
    const { _id, name, image, location, bathroom, price } = props.hotel;
    return (
        <div className="col-md-4">
            <div className="card hotel-card">
                <img className="card-img-top" src={`${process.env.REACT_APP_BACKEND_URL}/${image}`} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p><img src={map} alt="" className="img-fluid"/> {location}</p>
                    <div className="d-flex justify-content-between">
                        <p><img src={bedroom} alt="" className="img-fluid"/> {props.hotel.bedroom}</p>
                        <p><img src={bath} alt="" className="img-fluid"/> {bathroom}</p>
                    </div>
                    <div className="d-flex justify-content-between mt_40">
                   <h4>  <span>&#8373;</span> {price}</h4>
                        <button className="details__button"><Link to={`/apartment/${_id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;