import React from 'react';
import './HotelList.css';
import SingleHotel from './SingleHotel';
import {  hotels } from '../../utilities/hotels';


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