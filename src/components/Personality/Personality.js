import Explore from '../Explore/Explore';
import personality from './img/titel.jpeg';
import teamImage from './img/team.jpg';
import lineLong from './img/lineLong.png';
import lineShort from './img/lineShort.png';
import { Link } from 'react-router-dom';
import { useState } from "react";
import './Personality.css';
import Team from './Team';
import { dataTeam } from "./dataTeam";

function Personality() {

    const ExpandableText = ({ children, descriptionLength }) => {
        const fullText = children;
      
        // Set the initial state of the text to be collapsed
        const [isExpanded, setIsExpanded] = useState(false);
      
        // This function is called when the read more/less button is clicked
        const toggleText = () => {
          setIsExpanded(!isExpanded);
        };
      
        return (
          <div className='personality__show_more'>
            {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}...`}
                <button onClick={toggleText} className='show_more'>
                {isExpanded ? 'Show less' : 'Show more'}
                <img src={lineShort} alt='line'/>
                </button>
          </div>
        );
      };

    const [team, setTeam] = useState(dataTeam);


    return <div className="home">
        <div className="personality_titel">
            <img src={personality} className="slider_img"/>
        </div>
        <div className='description'>
            <h3>We are untied by our love to beautiful things</h3>
            <p>Our aim is to realise and exceed the vision of each client, reacting a cohesive and authentic space. We take on both residential and commercial projects of varying scopes.</p>
        </div>
        <section className='section_personality'>
                <div className='section_header'>
                    <div className='section_header__left'>
                        <div className='sh__left_name'>
                            <p>Personality</p>
                            <img src={lineLong} alt='line'/>
                        </div>
                        <div className='sh__left_description'>
                            <p>Because beautiful things are better</p>
                        </div>
                    </div>
                    <div className='section_header__right'>
                        <div className='personality_description'>
                            <ExpandableText descriptionLength={250}>
                            Our business aim is to be the best architectural partner, understanding and developing our clients’ business, in balance with designing a spatial experience. We are driven by the desire to develop exceptional value-end products for our clients, and are present both as advisors and partners throughout the process, all the way from early strategy and creative design through to the final realisation. For us, it is not just about applying our own core values, but about working on what delivers the best results and determining how we can achieve them. 
                            </ExpandableText>
                        </div>
                    </div>
                </div>
                <div className='section_img'>
                    <img src={teamImage} alt='office'/>
                </div>
            </section>
            <section className="section_personality">
                <div className='section_header'>
                    <div className='section_header__left'>
                        <div className='sh__left_name'>
                            <p>OUR TEAM</p>
                            <img src={lineLong} alt='line'/>
                        </div>
                        <div className='sh__left_description'>
                            <p>We work with all emotions and senses</p>
                        </div>
                    </div>
                    <div className='section_header__right'>
                        <div className='personality_description'>
                            <ExpandableText descriptionLength={250}>
                            With each project, we start with a blank page and let our clients’ objectives and brand ambitions determine the development of a project’s path rather than basing it solely on our own architectural taste. Our team of designers have a varied international background, and are keen to find the best soultions for your project. When thoughts come together, experiences are shared and individuals come forward, increasing the possibility of producing innovative and value enhancing architecture. This forms the basis of our successful philosophy and is at the core of all our activities. 
                            </ExpandableText>
                        </div>
                    </div>
                </div>
            </section>
            
            <Team teamPersonal={team} />
            <Explore />
        </div>
}

export default Personality;