import React, {Component} from 'react';
import Place from 'material-ui/svg-icons/maps/place';
import Phone from 'material-ui/svg-icons/communication/phone';
import Chat from 'material-ui/svg-icons/communication/chat';
import Email from 'material-ui/svg-icons/communication/email';
import { blueA400 } from 'material-ui/styles/colors';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import {
    ROMA_INSTA,
    PIS_FACEBOOK,
    MAIL_TO_PIS,
    PIS_MAP
} from '../Globals'


export default class Footer extends Component {
render(){
    let style = {};
    if(this.props.news) {
        style = {
            position: 'absolute',
            bottom: '0',
            width: '98%',
            zIndex: '99999'
        }
    }
    return(
        <footer className="footer" style={style}>
                <Grid >
                    <Row>
                        <Col md={3}  xs={3}>
                            <span id="location">
                                <Place color={ blueA400 }/>
                                <p><a href={PIS_MAP} target="_blank">Ванди Василевської, 24</a></p>
                            </span>
                        </Col>
                        <Col md={3}  xs={3}>
                            <span id="Phone">
                                <Phone color={ blueA400 }/>
                                <p>
                                    <a href="tel:0444814482">044&nbsp;481&nbsp;44&nbsp;82</a>
                                    <a href="tel:0969239667">096&nbsp;923&nbsp;96&nbsp;67</a>
                                </p>
                            </span>
                        </Col>
                        <Col md={3}  xs={3}>
                            <span id="group">
                                <Email color={ blueA400 }/>
                                <p><a href={MAIL_TO_PIS} data-type="mail">kafedra.pis@gmail.com</a></p>
                            </span>
                        </Col>
                        <Col md={3}  xs={3}>
                            <span id="group">
                                <Chat color={ blueA400 }/>
                                <p><a href={PIS_FACEBOOK} target="_blank">FaceBook</a></p>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
                            <p id="made"><a href={ROMA_INSTA} target="_blank">by R.B.C.</a></p>
                        </Col>
                    </Row>
                </Grid>
        </footer>
    )
}
}



