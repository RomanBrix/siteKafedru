import React, {Component} from 'react';
import {
    Row,
    Col,
    Well
} from 'react-bootstrap';
import Header from '../../layers/Header';
import Footer from '../../layers/Footer';
import File from './File';
import { getLanguage, getCookie } from '../functions';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            translate: getLanguage(getCookie("language")).progress || getLanguage("ua").progress
        }
    }
    changeLang(){
        this.setState({
            translate: getLanguage(getCookie("language")).progress
        })
    }
    render(){
        const { translate } = this.state;

        return (
            <div>
                <Header changeLang={this.changeLang.bind(this)}/>
                <Row>
                    <Col xs={8}  md={8} xsOffset={2}  style={{textAlign: 'center'}}>
                        <Well bsSize="large">
                            <h1>{translate.top.head1}</h1>
                            <h3>{translate.top.head3}</h3>
                            <h4>{translate.top.head4}</h4>
                             <h5>{translate.top.head5}</h5>
                        </Well>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} md={8} xsOffset={2} >
                        <File translate={translate.file}/>
                    </Col><br/>
                </Row>
                <Row>
                    <Col xs={8} md={8} xsOffset={2} style={{textAlign: 'justify'}}>
                        <Well bsSize="large">
                            <h5>
                                {translate.bottom.head5}
                                <strong>{translate.bottom.author}</strong>.
                            </h5>
                            <h4>{translate.bottom.head4}</h4>
                        </Well>
                    </Col>
                </Row>
                <Footer news={ true }/>
            </div>
        );
    }
}
