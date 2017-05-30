import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import Intro from './Intro';
import Personal from './Personal';

export default class App extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Intro/>
                <Personal/>
                <Footer/>
            </div>
        );
    }
}
