import React from "react";
import './Footer.css';
import lineLong2 from './img/lineLong.png';
import facebook from './img/facebook.png';
import insta from './img/insta.png';
import linkedin from './img/linkedin.png';
import { Link } from 'react-router-dom';
import ContactForm from "../ContactForm/ContactForm";

function Footer() {
    return (
        <div className="footer_section">
            <div className="section_contact">
                <div data-aos="flip-left" data-aos-duration="1500" className="section_contact__left">
                    <div className="contact">
                        <div className='sh__left_name'>
                                <p>contact</p>
                                <img src={lineLong2} alt='line'/>
                        </div>
                        <div className="contact_description">
                            <p>Königsallee 24, 40822</p>
                            <p>Düsseldorf, Germany</p>
                            <p>+49 (0) 000 0000 0</p>
                            <p>NewlAgency@newl.com</p>
                        </div>
                    </div> 
                    <div className="contact">
                        <div className='sh__left_name'>
                                <p>opening hours</p>
                                <img src={lineLong2} alt='line'/>
                        </div>
                        <div className="contact_description">
                            <p>Mon-Fri: 10:00-19:00</p>
                            <p>Sat: 10:00-16:00</p>
                        </div>
                    </div>       
                </div>
                <div data-aos="flip-right" data-aos-duration="1500"  className="section_contact__right">
                    <div className="contact">
                        <div className='sh__left_name'>
                                <p>Let’s talk about your project. Get in touch</p>
                                <img src={lineLong2} alt='line'/>
                        </div>
                        <div className="contact_description">
                            <ContactForm/>
                        </div>
                    </div>   
                </div>
            </div>
            <footer>
                <div className="footer_links">
                    <p>Copyright © 2022</p>
                    <p>All Rights Reserved - NewL Düsseldorf</p>
                    <p>
                        <Link to='/Personality' className="icon">Personality</Link>
                    </p>
                    <p>
                        <Link to='/Projects' className="icon">Projects</Link>
                    </p>
                    <p>
                        <Link to='/Services' className="icon">Services</Link>
                    </p>
                </div>
                <div className="footer_icons">
                    <Link> <img src={insta}/></Link>
                    <Link> <img src={facebook}/></Link>
                    <Link> <img src={linkedin}/></Link>
                </div>
                <div className="footer_description">
                    <p>This website was built on educational purporse</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;