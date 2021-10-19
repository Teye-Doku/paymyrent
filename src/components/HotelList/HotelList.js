import React from 'react';
import './HotelList.css';
import SingleHotel from './SingleHotel';

const hotels = [
    {
        id: 1,
        name: 'American House',
        place: 'East Legon,Accra',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '194',
        img: 'https://i.ibb.co/2kXfz4Z/hotel-1.png'
    },
    {
        id: 2,
        name: 'AU Village',
        place: 'Cantoments,Accra',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '194',
        img: 'https://i.ibb.co/1d3W2h2/hotel-2.png'
    },
    {
        id: 3,
        name: 'American House',
        place: 'Tantra Hill',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '194',
        img: 'https://i.ibb.co/7RXNBDn/hotel-3.png'
    },
    {
        id: 4,
        name: '4 bedrooms townhouse',
        place: 'Labadi,Accra',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '194',
        img: 'https://i.ibb.co/2kXfz4Z/hotel-1.png'
    },
    {
        id: 5,
        name: 'Classic Hub',
        place: 'Haatso,Accra',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '194',
        img: 'https://i.ibb.co/1d3W2h2/hotel-2.png'
    },
    {
        id: 6,
        name: 'Takroadi House',
        place: 'Tema,Community 4',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '194',
        img: 'https://i.ibb.co/7RXNBDn/hotel-3.png'
    }
];

const HotelList = () => {
    return (
        <section className="hotel-list-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headlines text-center">
                            <p>House Rent</p>
                            <h2>Discover the latest Rent <br/> available today</h2>
                        </div>
                        <div className="row">
                            {
                                hotels.map(hotel => <SingleHotel key={hotel.id} hotel={hotel}></SingleHotel>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelList;