import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import Personal from './Personal';
import { getLanguage, getCookie } from '../functions';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: getLanguage(getCookie("language")).consultation || getLanguage("ua").consultation
        }
    }
    changeLang(){
        this.setState({
            translate: getLanguage(getCookie("language")).consultation
        })
    }
 render(){
     const { translate } = this.state;

     return(
         <div>
            <Header changeLang={this.changeLang.bind(this)}/>
             <Personal translate={ translate.personal }/>
             <Footer/>
         </div>
     )
 }
}
