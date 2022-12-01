import { useState } from "react";


function ServicesBlocks({servicesListed}) {

    const [showText, setShowText] = useState(false);

    const showTextOnClick = (element) => {
        element.showMore = !element.showMore;
        setShowText(!showText);
    }
    return (
        <div>
            {servicesListed.map(element => {
                const {idService, nameService, imageLine, description, imageService, showMore, lineShort} = element;

                return (
                    <div className="services_block" key={idService}>
                        <div data-aos="flip-left" data-aos-duration="1500" className="services_text">
                            <div className="services_heading">
                                <p>{nameService}</p>
                                <img src={imageLine} alt="line"/>
                            </div>
                            <div className="services_description">{showMore ? description : description.substring(0, 300) + '...'}</div>
                            <div className="services__show_more">
                                <button onClick={() => showTextOnClick(element)} className='show_more'>{showMore ? 'Show less' : 'Show more'}
                                    <img src={lineShort} alt='line'/>
                                </button>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1500" className="services_img">
                            <img src={imageService} alt={nameService} titel={nameService}/>
                        </div>
                    </div>
                )
            })}

            
        </div>
    )
}

export default ServicesBlocks;