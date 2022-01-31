import './Loading.css';
import paymyrent from '../../images/paymyrent.jpg';

const Loading = () =>{
  return (
       <div className='loading'>
           <img src={paymyrent} alt='' />
       </div>
  );
}

export default Loading;