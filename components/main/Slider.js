import React, {Component} from 'react';
import {
    Carousel
} from 'react-bootstrap';
import {
    SLIDER1,
    SLIDER2,
    SLIDER3
} from '../../Globals';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            direction: null
        };
    }
        handleSelect(selectedIndex, e) {
            this.setState({
                index: selectedIndex,
                direction: e.direction
            });
        }

        render() {
            return (
                <Carousel
                    activeIndex={this.state.index}
                    direction={this.state.direction}
                    onSelect={this.handleSelect.bind(this)}
                    interval={1000}
                    pauseOnHover={false}
                >
                    <Carousel.Item>
                        <img

                            alt="SLIDER1"
                            src={SLIDER1}/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            alt="SLIDER2"
                            src={SLIDER2}/>
                        <Carousel.Caption>
                            <h3>Викладачі</h3>
                            <p>Які справді Вас навчать</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            alt="SLIDER3"
                            src={ SLIDER3 }/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            );
        }
}
