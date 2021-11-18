import React from 'react';
import './StoreList.css';
import SingleStore from './SingleStore';
import {  stores } from '../../utilities/stores';


const StoreList = () => {
    return (
        <section className="hotel-list-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headlines text-center">
                            <h2>Discover the latest Stores <br/> available today</h2>
                        </div>
                        <div className="row">
                            {
                                stores.map(store => <SingleStore key={store.id} store={store}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreList;