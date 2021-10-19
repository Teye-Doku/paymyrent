import React from 'react';

const SingleService = (props) => {
    const {title, img, des} = props.service;
    return (
        <div className="col-md-4 text-center ser-inner">
            <img src={img} alt="" className="img-fluid"/>
            <h5>{title}</h5>
            <p>{des}</p>
        </div>
    );
};

export default SingleService;