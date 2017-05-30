import React, {Component} from 'react';
import {
    Row,
    Col,
    Well
} from 'react-bootstrap';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import File from './File';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            news: true
        }
    }
    render(){
        return (
            <div>
                <Header/>
                <Row>
                    <Col xs={8}  md={8} xsOffset={2}  style={{textAlign: 'center'}}>
                        <Well bsSize="large">
                            <h1>Програма розвитку кафедри</h1>
                            <h3>прикладних інформаційних систем </h3>
                            <h4>факультету інформаційних технологій</h4>
                             <h5>Київського національного університету імені Тараса Шевченка</h5>
                        </Well>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} md={8} xsOffset={2} >
                        <File/>
                    </Col><br/>
                </Row>
                <Row>
                    <Col xs={8} md={8} xsOffset={2} style={{textAlign: 'justify'}}>
                        <Well bsSize="large">
                            <h5>
                                Орієнтовний план розвитку кафедри прикладних інформаційних систем підготувала завідувач кафедри прикладних інформаційних систем факультету інформаційних технологій Київського національного університету імені Тараса Шевченка, кандидат технічних наук, доктор економічних наук, професор <strong>Плескач Валентина Леонідівна</strong>.
                            </h5>
                            <h4>Обговорено та прийнято за основу рішенням кафедри (витяг із протоколу засідання кафедри № 13 від 24 квітня 2017 р.)</h4>
                        </Well>
                    </Col>
                </Row>
                <Footer news={ this.state.news }/>
            </div>
        );
    }
}
