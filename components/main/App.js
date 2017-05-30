import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import Slider from './Slider';
import Hello from'./Hello';

export default class NAME extends Component {
render(){
    return (
        <div>
            <Header/>
            <div className="sliderContainer">
                <Slider/>
            </div>
            <Hello/>
            <Footer/>
        </div>
    );
}
}
