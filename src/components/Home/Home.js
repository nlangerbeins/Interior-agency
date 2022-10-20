import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import personality from './img/personality.jpg';
import services from './img/service.jpg';
import projects from './img/projects.jpeg';
import lineLong from './img/lineLong.png';
import lineShort from './img/lineShort.png';
import Explore from '../Explore/Explore';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Home() {

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <div className='home'>

            <Slider/>
            <div data-aos="fade-up" data-aos-duration="1500" className='description'>
                <h3>Interior design solutions for residential interiors</h3>
                <p>Our agency specializes in high end residential projects and provides design service to our clients</p>
            </div>
            <section className='section'>
                <div className='section_header'>
                    <div data-aos="flip-left" data-aos-duration="1500" className='section_header__left'>
                        <div className='sh__left_name'>
                            <p>Personality</p>
                            <img src={lineLong} alt='line'/>
                        </div>
                        <div className='sh__left_description'>
                            <p>Because beautiful things are better</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500"  className='section_header__right'>
                        <div className='sh__right_description'>
                            <p>With our way of seeing things and life, we want to touch and enrich. In doing so, we feel fully commited to beauty.</p>
                        </div>
                        <div className='sh__right_more'>
                            <p>
                                <Link to='/Personality' className='link_more'>More</Link>
                            </p>
                            <img src={lineShort} alt='line'/>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className='section_img'>
                    <img src={personality} alt='office'/>
                </div>
            </section>
            <section className='section'>
                <div className='section_header'>
                    <div data-aos="flip-left" data-aos-duration="1500"  className='section_header__left'>
                        <div className='sh__left_name'>
                            <p>PROJECTS</p>
                            <img src={lineLong} alt='line'/>
                        </div>
                        <div className='sh__left_description'>
                            <p>We believe in the power of an idea and the art of craftsmanship</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500"  className='section_header__right'>
                        <div className='sh__right_description'>
                            <p>We are searching for innovations that appear familiar, for provocations that touch our inner self, for functional gravity that makes us laugh. We are working with emotions and all our senses. The customer’s requirements, technical hard facts, aesthetical aspects - step by step everything is integrated into the design process.</p>
                        </div>
                        <div className='sh__right_more'>
                            <p>
                                <Link to='/Projects' className='link_more'>More</Link>
                            </p>
                            <img src={lineShort} alt='line'/>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className='section_img'>
                    <img src={projects} alt='office'/>
                </div>
            </section>
            <section className='section'>
                <div className='section_header'>
                    <div data-aos="flip-left" data-aos-duration="1500"  className='section_header__left'>
                        <div className='sh__left_name'>
                            <p>SERVICES</p>
                            <img src={lineLong} alt='line'/>
                        </div>
                        <div className='sh__left_description'>
                            <p>We believe in the power of an idea and the art of craftsmanship</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="1500"  className='section_header__right'>
                        <div className='sh__right_description'>
                            <p>We are searching for innovations that appear familiar, for provocations that touch our inner self, for functional gravity that makes us laugh. We are working with emotions and all our senses. The customer’s requirements, technical hard facts, aesthetical aspects - step by step everything is integrated into the design process.</p>
                        </div>
                        <div className='sh__right_more'>
                            <p>
                                <Link to='/Services' className='link_more'>More</Link>
                            </p>
                            <img src={lineShort} alt='line'/>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className='section_img'>
                    <img src={services} alt='office'/>
                </div>
            </section>
            <div data-aos="fade-up" data-aos-duration="1500" className='description'>
                <h3>The love for what we do unites us</h3>
                <p>We employ the best interior archtiects, designers and craftsmen in their fields. As different as our comptenteces may be, we are all united by our love for what we do every day.</p>
            </div>

            <Explore/>
        </div>
    )
    
}

export default Home;