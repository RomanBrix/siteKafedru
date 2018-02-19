import React, {Component} from 'react';

export default class EventsContainer extends Component {
    render(){
        const {item, changeHandler} = this.props;
        let newText = item.text_ua;
        if(item.text_ua.length > 125){
            newText = item.text_ua.slice(0,125) + "...";
        };
        console.log(item.img);
        return(
            <div className="item" onClick={()=> changeHandler(true, item, "events")}>
                <div className="img" style={{
                    backgroundImage: `url(../src/news/${item.img})`
                }}/>
                {   item.date_ua ?
                    <div className="date">
                        <i className="icon-clock"/>
                        {item.date_ua}
                    </div>
                    :
                    ""
                }
                <div className="text">
                    <h3>{item.title_ua}</h3>
                    <p>{newText}</p>
                </div>
            </div>
        )
    }
}
