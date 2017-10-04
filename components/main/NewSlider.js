import React, {Component} from 'react';
import  Carousel from 'nuka-carousel';
import {
    SLIDER1,
    SLIDER2,
    SLIDER3,
    SLIDER4,
    SLIDER5,
    SLIDERS
} from '../../Globals';
// import Arrows from './Arrows';

export default class NewSlider extends Component {
        render() {
            const items = SLIDERS.map((item,index)=>{
                /*
<img
                    key={index}
                    alt="SLIDER1"
                    src={item}
                />
                 */
                return(
                    <div className="photo" style={{backgroundImage: `url(${item})`}} key={index}/>
                )
            });
            return (
                <Carousel autoplay={true} autoplayInterval={ 3000 }>
                    { items }
                </Carousel>
            );
        }
}
