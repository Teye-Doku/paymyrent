import React from 'react';
import './OfficeList.css';
import SingleOffice from './SingleOffice';
import {  offices } from '../../utilities/offices';


const OfficeList = () => {
    return (
        <section className="hotel-list-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headlines text-center">
                            <h2>Discover your dream offices<br/> available today</h2>
                        </div>
                        <div className="row">
                            {
                                offices.map(office => <SingleOffice key={office.id} office={office}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeList;