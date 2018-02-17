import React, {Component} from 'react';
import {
    Row,
    Col,
    Panel,
    Well
} from 'react-bootstrap';
import { NEWS, EVENTS } from '../../Data';
import { blueA400 } from 'material-ui/styles/colors';
import FB from './FB';
import Subscription from './Subscription';



export default class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: true
        }
    }

    changeToggle(a){
        this.setState({
            toggle: a
        })
    }

    sorted(a,b){
        return  a.id > b.id ?  -1 : 1;
    }
    render() {
        const { translate } = this.props;
        const sortedNews = NEWS.sort(this.sorted);        
        const newsCont = sortedNews.map((item, index)=>{
        const { toggle } = this.state;
        return(
            <div className="news" key={index}>
                <div className="logo">
                    <img src={`./src/news/${item.img}`} />
                </div>
                <div className="info">
                    <h2>{item.title}</h2>
                    <h3>{item.date}</h3>
                    <p>{item.text}</p>
                    <p>{item.end}
                    {item.file ? 
                        <a href={item.file} target="_blank"> ТУТ </a>
                        : ""
                    }
                    </p>
                    
                </div>
            </div>
        ) 
        });
        const { toggle } = this.state;  
        const active = {
            backgroundColor: '#343f64',
            color: 'white'
        }    
          
        const sortedEvents = EVENTS.sort(this.sorted);
        const eventsCont = sortedEvents.map((item, index)=>{
        
            return(
                <div className="news" key={index}>
                    <div className="logo">
                        <img src={`./src/news/${item.img}`} />
                    </div>
                    <div className="info">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <p>{item.end}</p>
                    </div>
                </div>
            ) 
            });
        return (
            <div >
                <Col className="pad50">
                    <Subscription translate={ translate }/>
                </Col>
                <div className="btns-render">
                    <span onClick={()=>{
                        this.changeToggle(true)
                    }}>{ translate.news }</span>
                    <span onClick={()=>{
                        this.changeToggle(false)
                    }}>{ translate.event }</span>
                </div>
                { toggle ?
                    <div className="news-container">
                    {newsCont}
                </div>
                :<div className="news-container">
                    {eventsCont}
                </div>
                 }
                
            </div>
        )
    }
}
