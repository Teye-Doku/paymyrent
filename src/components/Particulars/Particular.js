import {
 Link
} from 'react-router-dom';
import './Particular.css';


const Particular = (props) =>{
    

    const { intent,description,img,link } = props.particular;
    return (
        <div className="particular">
            <div className="particular__image__container">
                  <img src={img} alt="" />
            </div>
            <div className="particular__text__container">
            <p> {description}</p> 
            </div>
            <button><Link to={link}>{intent}</Link></button>
        </div>
    )
}

export default Particular;