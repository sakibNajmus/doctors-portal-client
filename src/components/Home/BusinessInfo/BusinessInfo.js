import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are Open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003, USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us Now',
        description: '+1(563)897-4124',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info =><InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;