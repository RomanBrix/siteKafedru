import React, {Component} from 'react';

export default class NewsContainer extends Component {
    render(){
        const {item, changeHandler} = this.props;
        let newText = item.text_ua;
        if(item.text_ua.length > 155){
            newText = item.text_ua.slice(0,155) + "...";
        };
        return(
                <div className="item" onClick={()=> changeHandler(true, item, "news")}>
                    <div className="img" style={{
                        backgroundImage: `url(../src/news/${item.img})`
                    }}/>
                    <div className="date">
                        <i className="icon-clock"/>
                        {item.date_ua}
                    </div>
                    <div className="text">
                        <h3>{item.title_ua}</h3>
                        <p>{newText}</p>
                    </div>
                </div>
        )
    }
}
