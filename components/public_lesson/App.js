import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import Personal from './Personal';

export default class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Personal/>
                <Footer/>
            </div>
        )
    }
}
