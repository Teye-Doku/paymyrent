import './Home.css';
import Service from '../../components/Services/Service';
import HotelList from '../../components/HotelList/HotelList';

const Home = () => {
     return (
         <div className="home" >
             <div className="home__hero">
                 <h1>Find Your House Rent</h1>
                 <div>
                     <input placeholder="Search..." type="text" />
                     <button>Find Now</button>
                 </div>
             </div>
             <HotelList />
             <Service />
         </div>
     );
}

export default Home;