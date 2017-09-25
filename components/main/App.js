import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
// import Slider from './Slider';
import NewSlider from './NewSlider';
import Hello from'./Hello';

export default class App extends Component {
render(){
    return (
        <div>
            <Header/>
            <div className="sliderContainer">
                 {/*<Slider/>*/}
                <NewSlider/>
            </div>
            <Hello/>
            <Footer/>
        </div>
    );
}
}
