
import './Serive.css';


import SingleService from './SingleService';

const services = [
    {
        id: 1,
        title: 'Wide Range of Properties',
        des: 'With a robust selection of popular properties on hand, as well as leading properties from experts.',
        img: 'https://i.ibb.co/Q6bcJhZ/ser-1.png'
    },
    {
        id:2,
        title: 'Financing Made Easy',
        des: 'Our stress-free finance department that can find financial solutions to save you money.',
        img: 'https://i.ibb.co/bXSdCBf/ser-2.png'
    },
    {
        id: 3,
        title: 'Trusted by Thousands',
        des: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.',
        img: 'https://i.ibb.co/vZTrhrX/ser-3.png'
    }
    
];

const Service = () => {
    return (
        <section className="service-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headlines text-center">
                            <p>House Rent</p>
                            <h2>Discover best property <br/>deals in Ghana</h2>
                        </div>
                        <div className="row">
                            {
                                services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;