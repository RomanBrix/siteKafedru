import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import Container from './Container';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { getLanguage, getCookie } from '../functions';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: getLanguage(getCookie("language")).about || getLanguage("ua").about
        };
        injectTapEventPlugin();
    }
    changeLang(){
        this.setState({
            translate: getLanguage(getCookie("language")).about
        })
    }
    render(){
        const { translate } = this.state;
        return(
            <div>
                <Header changeLang={this.changeLang.bind(this)}/>
                <Container translate={ translate }/>
                <Footer/>
            </div>
        )
    }
}
