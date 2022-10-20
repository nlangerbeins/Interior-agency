import Explore from '../Explore/Explore';
import './Services.css';
import titel from './img/titel.jpg'
import { useState } from 'react';
import { dataServices } from './dataServices';
import ServicesBlocks from './ServicesBlocks';

function Services() {

    const [services, setServices] = useState(dataServices);

    return <div className='home_services'>
        <div className="personality_titel">
            <img src={titel} className="slider_img"/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className='description'>
            <h3>Where know-how meets instinct</h3>
            <p>Our comprehensive services includes interior architecture, concept design, property concept development, 3D visualizations, tenant customization, construction drawings.</p>
        </div>
        <div className='services_container'>
            <ServicesBlocks servicesListed={services} />
        </div>
        <Explore/>
    </div>
}

export default Services;