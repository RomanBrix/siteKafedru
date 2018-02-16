import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import NewSlider from './NewSlider';
import Hello from'./Hello';
import { getLanguage, getCookie } from '../functions/index.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: getLanguage(getCookie("language")).main || getLanguage("ua").main
        }
    }
    changeLang(){
        this.setState({
            translate: getLanguage(getCookie("language")).main
        })
    }

    render(){
        const { translate } = this.state;

    return (
        <div>
            <Header changeLang={this.changeLang.bind(this)}/>
            <div className="sliderContainer">
                <NewSlider/>
            </div>
            <Hello translate={translate} />
            <Footer/>
        </div>
    );
}
}
