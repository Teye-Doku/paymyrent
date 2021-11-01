import './Services.css';

const  Services = () =>{
    return (
        <div className="services" style={{height:"2000px"}}>
             <div className="service__hero">
                 <h3>Our Services: What We Do &</h3>
                 <h3>How We Do It.</h3>
                 <p>The blueprint to rectify the renting issues in ghana.</p>
             </div>
             <div className="service__renting">
                  <img src="https://i.ibb.co/Q6bcJhZ/ser-1.png" alt=""/>
                  <div className="serviceRenting__info">
                    <h3>Apartment Renting</h3>  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum volutpat eu eros pharetra aliquet. Phasellus quis facilisis risus. 
                        Etiam nec felis a quam condimentum vestibulum. Praesent posuere tincidunt luctus. 
                        Fusce scelerisque sed nisi quis rhoncus.</p>      
                </div>  
             </div>
             <div className="service__shelter">
                  <div className="serviceShelter__info">
                    <h3>Shelter Rendering</h3>  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum volutpat eu eros pharetra aliquet. Phasellus quis facilisis risus. 
                        Etiam nec felis a quam condimentum vestibulum. Praesent posuere tincidunt luctus. 
                        Fusce scelerisque sed nisi quis rhoncus.</p>      
                </div>  
                  <img src="https://i.ibb.co/vZTrhrX/ser-3.png" alt=""/>
             </div>
             <div className="service__renting">
                  <img src="https://i.ibb.co/bXSdCBf/ser-2.png" alt=""/>
                  <div className="serviceRenting__info">
                    <h3>Offices & Stores Renting</h3>  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum volutpat eu eros pharetra aliquet. Phasellus quis facilisis risus. 
                        Etiam nec felis a quam condimentum vestibulum. Praesent posuere tincidunt luctus. 
                        Fusce scelerisque sed nisi quis rhoncus.</p>      
                </div>  
             </div>
        </div>
    )
}


export default Services;