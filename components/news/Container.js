import React, {Component} from 'react';
import {
    Row,
    Col,
    Panel,
    Well
} from 'react-bootstrap';
import { blueA400 } from 'material-ui/styles/colors';
import FB from './FB';
import Subscription from './Subscription';


export default class Container extends Component {
    render() {
        return (
            <Row >
                <Col xs={6} md={6} className='Social'>
                    <Panel header='Читай новини в FaceBook' className="bluePanel">
                        <Well bsSize="large"><h4>Залишайся з нами!</h4>
                        <div id="fb-root">
                        <FB/>
                        </div>
                        </Well>
                    </Panel>
                </Col>
                <Col xs={6} md={6}>
                    <Panel header='Підпишись на E-mail новини' className="bluePanel">
                        <Subscription/>
                    </Panel>
                </Col>
            </Row>
        )
    }
}
