import React, {Component} from 'react';
import {
    Carousel
} from 'react-bootstrap';
import {
    SLIDER1,
    SLIDER2,
    SLIDER3,
    SLIDER4,
    SLIDER5,
    SLIDER6,
    SLIDER7,
    SLIDERS
} from '../../Globals';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: "next"
        };
    }
        handleSelect(selectedIndex, e) {
            this.setState({
                index: selectedIndex,
                direction: e.direction
            });
        }

        render() {
            const items = SLIDERS.map((item,index)=>{
                return(
                    <Carousel.Item key={index}>
                        <img
                            alt="SLIDER1"
                            src={item}
                        />
                    </Carousel.Item>
                )
            })
            return (
                <Carousel
                    activeIndex={this.state.index}
                    direction={this.state.direction}
                    onSelect={this.handleSelect.bind(this)}
                    interval={1200}
                    pauseOnHover={false}
                    slide={true}
                >
                    { items }
                </Carousel>
            );
        }
}
