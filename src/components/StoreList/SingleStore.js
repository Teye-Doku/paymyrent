import './SingleStore.css';
import map from '../../images/map.svg';
import {
     Link
} from 'react-router-dom';


const SingleStore = (props) => {
    const { id, img, place, price } = props.store;
    return (
        <div className="col-md-4">
            <div className="card hotel-card">
                <img className="card-img-top" src={img} alt="Card cap" />
                <div className="card-body">
                    {/* <h5 className="card-title">{name}</h5> */}
                    <p><img src={map} alt="" className="img-fluid"/> {place}</p>
                    <div className="d-flex justify-content-between">

                    </div>
                    <div className="d-flex justify-content-between mt_40">
                   <h4>  <span>&#8373;</span> {price}</h4>
                        <button className="btn btn-primary default-btn"><Link to={`/apartment/${id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleStore;