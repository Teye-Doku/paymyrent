import Carousel from 'react-elastic-carousel';
import './Carousel.css';
import CarouselItem from './CarouselItem';
import verify from '../../images/verify.jpg';
const breakPoints = [
 {width:1,itemsToShow:1},
 {width:550,itemsToShow:2},
 {width:768,itemsToShow:3},
];

const Carousels = () =>{
    return (
        <div className='carousel__container'>
            <h4>Our clients testimonials</h4>
            <h3>Review what our clients say about us</h3>
             <Carousel breakPoints={breakPoints}>
                 <CarouselItem img={verify} name="Emmanuel" description="Paymyrentgh helped me find a beautiful apartment and pre-financed my rent advance. The process was smooth and hustle free."/>
                 <CarouselItem img={verify} name="Henrietta" description="I learned about Paymyrentgh from a friend and was too good to be true. So I decided to try Paymyrentgh out.Paymyrentgh is a life saver."/>
                 <CarouselItem img={verify} name="Samuel" description="I searched online for flexible rent payment and Paymyrentgh showed up. Paymyrentgh is a life saver. The process was smooth."/>
                 <CarouselItem img={verify} name="Mary" description="I had rent issues until Paymyrentgh came into the picture. Paymyrentgh assisted me in paying all my rent advance so i could pay monthly."/>
             </Carousel>
        </div>
    )
}
     
export default Carousels;
