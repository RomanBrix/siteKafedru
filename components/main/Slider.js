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
    SLIDERS
} from '../../Globals';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null
        };
    }
    componentDidMount(){
        const carus = document.getElementsByClassName("carousel")[0];
        carus.carousel();
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
                    interval={1000}
                    pauseOnHover={false}
                >
                {/* <Carousel.Item>
                        <img
                            alt="SLIDER1"
                            src={SLIDER1}
                        />
                    </Carousel.Item> */}
                    {items}
                </Carousel>
            );
        }
}
