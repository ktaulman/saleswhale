import React from 'react';

export function OfficesCard({ iconURL, title, address, city }) {
    
    //custom styling 
    const style={
        card:{
            maxWidth:"350px",
            border:'none'
        }
    }

    return (

        <div className="col-md-4 col-sm-6 col-xs-12 mb-3">

        <div className=" card pt-3 pb-3 pl-4 pr-4 mb-2 d-flex flex-column justify-content-center border border-light rounded bg-white shadow-lg">
             <img src={iconURL} className="align-self-center card-img-top u-icon u-icon--lg u-icon-secondary--air rounded-circle" alt="office address"/>
            <div className='card-body text-center p-0'>
                <h3 className="card-title m-0">{title}</h3>
                <p className="card-text m-0">{address}</p>
                <p className="card-text m-0">{city}</p>
            </div>
        </div>
        </div>

    );
}
