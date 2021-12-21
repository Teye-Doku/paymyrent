import './SingleOffice.css';
import map from '../../images/map.svg';
// import bedroom from '../../images/bed.svg';
// import bath from '../../images/bath.svg';
import {
     Link
} from 'react-router-dom';


const SingleOffice = (props) => {
    const { _id,image, location,price } = props.office;
    return (
        <div className="col-md-4">
            <div className="card hotel-card">
                <img className="card-img-top" src={`${process.env.REACT_APP_BACKEND_URL}/${image}`} alt="Card cap" />
                <div className="card-body">
                    {/* <h5 className="card-title">{name}</h5> */}
                    <p><img src={map} alt="" className="img-fluid"/> {location}</p>
                    
                    <div className="d-flex justify-content-between mt_40">
                   <h4>  <span>&#8373;</span> {price}</h4>
                        <button className="btn btn-primary default-btn"><Link to={`/offices/${_id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOffice;