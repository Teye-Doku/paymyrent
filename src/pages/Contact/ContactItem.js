import './ContactItem.css';

const  ContactItem = ({img,title,subtitle}) =>{
    return (
        <div className='contact__item'>
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default ContactItem;
