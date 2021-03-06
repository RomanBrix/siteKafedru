import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Thumbnail,
    Button
} from 'react-bootstrap';
import { ABOUT, FIT, } from '../../Globals';
import { NEWS } from '../../Data';

export default class Hello extends Component {

    // sorted(a,b){
    //     return  a.id > b.id ?  -1 : 1;
    // }

    render(){
        const {translate, language, news} = this.props;
        // const sortedNews = NEWS.sort(this.sorted);
        let numm = 0;
        language === "ua" ? numm = 0 : numm = 1;

        const newsContainer = news[numm].map((item, index)=>{
            if (index > 1) return;
            let newText = "";
            if(item.text.length > 75){
                newText = item.text.slice(0,55) + "...";
            }else{
                newText = item.text
            }
            return( 
                <div key={index} className="one-news-module">
                    <h3>{ item.title }</h3>
                    <h4>{ item.date }</h4>
                    <p>{ newText }</p>
                    {/* <div className="btn-next"></div> */}
                    <Button bsStyle="warning" href={"news.html"}>{translate.btnMore}</Button>
                </div>
            )
        })
        return(
        <Grid className="Hello">
        
                    <Thumbnail
                        style={{
                            minWidth: '200px',
                            maxWidth: '550px'
                        }}
                        src={ FIT }
                        alt="FIT" >
                        <h3>{translate.head}</h3>
                        <p>{translate.paragraph}</p>
                        <p>
                            <Button bsStyle="primary" href={ ABOUT }>{translate.btn}</Button>
                        </p>
                    </Thumbnail>
                    <Thumbnail
                    className="newsModule"
                        style={{
                            minWidth: '200px'
                        }}>
                        { newsContainer }
                    </Thumbnail>
        </Grid>

        )
    }
};
