import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import Personal from './Personal';
import { getLanguage, getCookie } from '../functions';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: getLanguage(getCookie("language")).public_lesson || getLanguage("ua").public_lesson
        }
    }
    changeLang(){
        this.setState({
            translate: getLanguage(getCookie("language")).public_lesson
        })
    }
    render(){
        const { translate } = this.state;

        return(
            <div>
                <Header changeLang={this.changeLang.bind(this)}/>
                <Personal translate={ translate }/>
                <Footer/>
            </div>
        )
    }
}
