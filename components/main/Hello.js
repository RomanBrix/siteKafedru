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
    render(){
        const newsContainer = NEWS.map((item, index)=>{
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
                    <Button bsStyle="warning" href={"news.html"}>Читати далi</Button>
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
                        <h3>Вітаємо Вас на кафедрі прикладних інформаційних систем!</h3>
                        <p>Щиро вітаю Вас, шановний студент, на кафедрі Прикладних Інформаційних Систем. Сподіваюсь, що наше спільне майбутнє  принесе Вам справжнє естетичне задоволення від вивчення передових інформаційних технологій</p>
                        <p>
                            <Button bsStyle="primary" href={ ABOUT }>Про кафедру</Button>
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
/*
 <div className="row">
 <div className="col-md-6 col-md-offset-3" id="Hello">sdsd</div>

 </div>
 */