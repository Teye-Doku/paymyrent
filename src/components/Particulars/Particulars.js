import Particular from "./Particular";
import { particulars } from '../../utilities/particulars';
import './Particulars.css';
const  Particulars = () =>{
    return (
        <div className="particulars">
             {
                  particulars.map(particular => <Particular key={particular.id} particular={particular} />)
             }
        </div>
    )
}


export default Particulars;
