import './Projects.css';
import titel from './img/titel.jpg'
import { useState } from 'react';
import { dataProjects } from './dataProjects';
import ChosenProjects from './ChosenProjects';
import Buttons from './Buttons';
import lineLong from './img/lineLong.png'


function Projects() {

    const [projects, setProjects] = useState(dataProjects);

    const chosenProjects = (searchItem) => {
        const newProjects = dataProjects.filter(element => element.searchItem === searchItem);
        setProjects(newProjects);
    }

    return <div className='home_personality'>
        <div className="personality_titel">
            <img src={titel} className="slider_img"/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500"  className='description'>
            <h3>We are untied by our love to beautiful things</h3>
            <p>Our aim is to realise and exceed the vision of each client, reacting a cohesive and authentic space. We take on both residential and commercial projects of varying scopes.</p>
        </div>
        <div className='projects_btn__container'>
            <Buttons filteredProjects={chosenProjects}/>
            <button className='btn_project' onClick={() => {setProjects(dataProjects)}}>show all</button>
        </div>
        <ChosenProjects projectToChoose={projects}/>
        <div data-aos="fade-up" data-aos-duration="1500"  className='description description_projects'>
            <h3>Beauty that comes from trust</h3>
            <p>There is no such thing as past, present or future - what counts is what you make out of it. Design is a process without beginning or end, a vast area of curiosity, a depository of ideas.</p>
        </div>
    </div>
}

export default Projects;