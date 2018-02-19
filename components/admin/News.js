import React, {Component} from 'react';
import axios from "axios";
import NewsContainer from "./NewsContainer";
import EventsContainer from "./EventsContainer";
import Change from "./Change";

export default class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: [],
            events: [],
            toggle: true,
            change: false,
            changeItem : {},
            type: ""
        };
        this.getAllNewsAndEvents();
    }

    getAllNewsAndEvents(){
        const that = this;
        axios.get("http://localhost:8888/public/news.php", {params: {from:"admin"}})
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

    toggleHandler(change){
        this.setState({
            toggle: change
        })
    }
    changeHandler(change, item, type){
        if(change === true){
            this.setState({
                change: change,
                changeItem: item,
                type: type
            })
        }else{
            this.setState({
                change: change
            })
        }
    }
    hendlerAdd(change, type){
        this.setState({
            change: change,
            changeItem: [],
            type: type
        })
    }
    render() {
        const {news, events, toggle, change, changeItem, type} = this.state;
        const newsContainer = news.map((item, index) => {
            return <NewsContainer item={item} key={index} changeHandler={this.changeHandler.bind(this)}/>
        });
        const eventssContainer = events.map((item, index) => {
            return <EventsContainer item={item} key={index} changeHandler={this.changeHandler.bind(this)}/>
        });

        if (!change) {
            return (
                <div className="content">
                    <div className="btn btn_add" onClick={()=> this.hendlerAdd(true, "add")}>
                        <i className="icon-plus-squared-alt"/>
                        Добавить</div>
                    <div className="toggleHandler">
                        <div className="btn btn_change" onClick={() => this.toggleHandler(true)}>Новости</div>
                        <div className="btn btn_change" onClick={() => this.toggleHandler(false)}>Events</div>
                    </div>
                    <div className="container">
                        {
                            toggle ?
                                <h1><i className="icon-newspaper"/> Новости</h1>
                                :
                                <h1><i className="icon-gift"/> События</h1>
                        }
                        <div className="items-container">
                            {
                                toggle ?
                                    newsContainer : eventssContainer
                            }
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <Change
                    changeHandler={ this.changeHandler.bind(this) }
                    item={ changeItem }
                    type={ type }
                    getAllNewsAndEvents={ this.getAllNewsAndEvents.bind(this)}
                />
            )
        }
    }
}
