import React, {Component} from 'react';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import Container from'./Container';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { getLanguage, getCookie } from '../functions';
import axios from "axios";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: getLanguage(getCookie("language")).news || getLanguage("ua").news,
            language: getCookie("language") || "ua",
            news: [[],[]],
            events: [[],[]]
        };
        injectTapEventPlugin();
        this.getNews();
    }
    changeLang(){
        this.setState({
            translate: getLanguage(getCookie("language")).news,
            language: getCookie("language") || "ua",
        });
    }
    getNews(){
    const that = this;

    axios.get("http://localhost:8888/public/news.php", {params: {from:"news"}})
        .then(({data})=>{
            that.setState({
                news: data[0],
                events: data[1]
            })
        })
        .catch((err)=>{
            console.log(err);
        });
}
    render(){
        const { translate, news, language, events} = this.state;
        console.log(news);
        console.log(events);

        return (
            <div>
                <Header changeLang={this.changeLang.bind(this)}/>
                <Container
                    translate={ translate }
                    news={ news }
                    events={ events }
                    language={ language }/>
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
