import React, {Component} from 'react';
import axios from "axios";
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import NewSlider from './NewSlider';
import Hello from'./Hello';
import { getLanguage, getCookie } from '../functions';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: getLanguage(getCookie("language")).main || getLanguage("ua").main,
            language: getCookie("language") || "ua",
            news: [[],[]],
        };
        this.getNews();
    }
    changeLang(){
        this.setState({
            translate: getLanguage(getCookie("language")).main,
            language: getCookie("language") || "ua",
        })
    }

    getNews(){
        const that = this;

        axios.get("http://localhost:8888/public/news.php", {params: {from:"main"}})
            .then(({data})=>{
                that.setState({
                    news: data,
                })
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render(){
        const { translate, language, news } = this.state;

    return (
        <div>
            <Header changeLang={this.changeLang.bind(this)}/>
            <div className="sliderContainer">
                <NewSlider/>
            </div>
            <Hello
                translate={translate}
                language={ language }
                news={ news }
            />
            <Footer/>
        </div>
    );
}
}
