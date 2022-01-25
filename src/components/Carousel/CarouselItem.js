import './CarouselItem.css';

const CarouselItem = ({description,img,name}) =>{
    return (
        <div className='carousel__item'>
             <div className='carousel__item__top'>
                <h3>{name}</h3> 
                <img src={img} alt=""/>
             </div>
             <p>{description}</p>
        </div>
    )
}

export default CarouselItem;