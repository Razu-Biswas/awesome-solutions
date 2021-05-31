import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const serviceData = [
    {
        title: 'Largest Apps Service', 
        desc: 'Solutions management service that manages and oversees the Largest of organization responsible for network and operations which includes data communication.'
    },
    {
        title: 'Software Development Service', 
        desc: 'Software management service that manages and oversees the IT of organization responsible for network and operations which includes data communication.'
    },
    {
        title: 'Digital Solutions Service', 
        desc: 'Digital management service that manages and oversees the Largest of organization responsible for network and operations which includes data communication.'
    }
]

const Services = () => {
    return (
        <div className="container">
            {/* <h2 className="text-center">Offer The Latest Software And <br /> Solutions To Our Customers!</h2> */}
            <div className="row w-100 mt-5">
                {
                    serviceData.map( service => <ServiceCard service={service}></ServiceCard>)
                }

                {/* <p className="text-secondary mt-4 text-center">Working hard to earn our customer's trust. <a href="#" className="text-dark">Explore All Services </a></p> */}
            </div>
            
        </div>
    );
};

export default Services;