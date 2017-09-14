import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import Container from'./Container';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class App extends Component {
    render(){
        injectTapEventPlugin();
        return (
            <div>
                <Header/>
                <Container/>
                <div style={{
                    height: '100%',
                    width: '98%',
                    marginBottom: '15%'

                }}/>
                <Footer />
            </div>
        );
    }
}
