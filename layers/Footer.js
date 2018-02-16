import React, {Component} from 'react';
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
} from '../Globals';
import { getLanguage, getCookie } from '../components/functions';



export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: getLanguage(getCookie("language")).footer || getLanguage("ua").footer
        }
    }

    render(){
    let style = {};
    if(this.props.news) {
        style = {
            position: 'absolute',
            bottom: '0',
            width: '100%',
            zIndex: '99999'
        }
    }
        const { translate } = this.state;

        return(
        <footer className="footer" style={style}>
                <Grid >
                    <Row>
                        <Col md={3}  xs={3}>
                            <span id="location">
                                {/*<Place color={ blueA400 }/>*/}
                                <i className="icon-location-circled"/>
                                <p><a href={PIS_MAP} target="_blank">{translate.address}</a></p>
                            </span>
                        </Col>
                        <Col md={3}  xs={3}>
                            <span id="Phone">
                                {/*<Phone color={ blueA400 }/>*/}
                                <i className="icon-phone-circled"/>
                                <p>
                                    <a href="tel:0444814482">044&nbsp;481&nbsp;44&nbsp;82</a>
                                    <a href="tel:0969239667">096&nbsp;923&nbsp;96&nbsp;67</a>
                                </p>
                            </span>
                        </Col>
                        <Col md={3}  xs={3}>
                            <span id="group">
                                {/*<Email color={ blueA400 }/>*/}
                                <i className="icon-mail"/>
                                <p><a href={MAIL_TO_PIS} data-type="mail">kafedra.pis@gmail.com</a></p>
                            </span>
                        </Col>
                        <Col md={3}  xs={3}>
                            <span id="group">
                                {/*<Chat color={ blueA400 }/>*/}

                                <i className="icon-facebook-circled"/>
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



