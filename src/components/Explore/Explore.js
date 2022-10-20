import React from "react";
import './Explore.css';
import explore from './bg-grey.jpg';
import { Link } from 'react-router-dom';

function Explore() {
    return (
        <div className="section_explore">
            <div className="section_explore__bg">
                <img src={explore}/>
            </div>
            <div className="section_explore__descr">
                <h2 className="heading_explore">Where the Magic Happens</h2>
                <button className="btn_explore">
                    <Link to='/Projects' className="explore_link">explore</Link>
                </button>
            </div>
        </div>
    )
}

export default Explore;