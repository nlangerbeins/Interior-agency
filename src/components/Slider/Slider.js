import React from "react";
import './Slider.css';
import { dataSlider } from './dataSlider';
import { useState } from 'react';
import { useEffect } from 'react';
import arrowPrev from './img/prev.png';
import arrowNext from './img/next.png';

function Slider() {

    const [slide, setSlide] = useState(0);
    const {id, image} = dataSlider[slide];

    // Slider
    const back = () => {
        setSlide (slide => {
            slide --;
            if (slide < 0) {
                slide = dataSlider.length - 1;
            }
            return slide;
        })
    }

    const next = () => {
        setSlide (slide => {
            slide ++;
            if (slide > dataSlider.length - 1) {
                slide = 0;
            }
            return slide;
        })
    }

    const moveDot = index => {
        setSlide(index)
    }

    // slider with interval 3s
    useEffect(()=>{
        const interval = setInterval(()=>{
            next();        
        }, 3000);
        return () => clearInterval(interval);
    });

    return <div>
        <div className='container_slider'> 
            <button onClick={back} className='btn_back'>
                <img src={arrowPrev}/>
            </button>
            <img src={image} className='slider_img'/>
            <button onClick={next} className='btn_next'>
            <img src={arrowNext}/>
            </button>
            <div className='container_dot'>
                {Array.from({length:3}).map((item, index) => (
                    <div key={index}
                    onClick={() => moveDot(index ++)} 
                    className={slide === index ? 'dot active' : 'dot'}>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
}

export default Slider;