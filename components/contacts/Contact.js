import React, {Component} from 'react';
import Place from 'material-ui/svg-icons/maps/place';
import Phone from 'material-ui/svg-icons/communication/phone';
import Email from 'material-ui/svg-icons/communication/email';
import {
    Row,
    Col
} from 'react-bootstrap';
import { blueA400 } from 'material-ui/styles/colors';


export default class Contact extends Component {
    render(){
        const style = {
            marginBottom: '-5px',
            color: blueA400
        }
        const { translate } = this.props;
        return(
            <Row className="vertical-line" style={{marginTop: "25px", paddingTop: '20px'}}>
                <Col  md={4} xs={4}><Place style={style}/> {translate.map}</Col>
                <Col  md={4} xs={4}> <Phone style={style}/><span style={{marginRight: "5px"}}> 0969239667 ,</span><span>044&nbsp;481&nbsp;44&nbsp;82</span></Col>
                <Col  md={4} xs={4}><Email style={style}/> kafedra.pis@gmail.com</Col>
            </Row>
        )
    }
};
