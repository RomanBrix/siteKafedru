import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import Map from './Map';
import Container from './Container';
import { getLanguage, getCookie } from '../functions';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state={
            translate: getLanguage(getCookie("language")).contacts || getLanguage("ua").contacts
        }
        injectTapEventPlugin();

    }
    changeLang(){
        this.setState({
            translate: getLanguage(getCookie("language")).contacts
        })
    }

    send(name, msg, email){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "contacts.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("name=" + name + "&msg=" + msg + "&msgEmail=" + email);
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr);
                alert('Відповідь прийде на Ваш E-mail');
            }
        };
        xhr.onerror = ()=>{
            alert('Спробуйте через 5 хвилин');
        }
    }
    
    render(){
        const { translate } = this.state;
        return (
            <div >
                <Header changeLang={this.changeLang.bind(this)}/>
                <div className="contact-main-containar">
                    <Container send={this.send} translate={translate}/>
                    <Map/>
                </div>
                <Footer/>
            </div>
        );
    }
}
