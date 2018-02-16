import React, {Component} from 'react';
import {
    Row,
    Col,
    Jumbotron,
    blockquote,
    smalle,
    cite,
    code
} from 'react-bootstrap';


export default class Intro extends Component {

    render(){
        const styles = {
            h1:{
                marginLeft: '-10px'
            },
            p:{
                fontSize: '17px',
                paddingLeft: '6px'
            }
        };
        const {translate} = this.props;
        console.log(translate);

        return(
            <Row bsClass="row myRow">
                <Col xs={10} md={10}  mdOffset={1} xsOffset={1}>
                    <Jumbotron>
                        <h1 style={styles.h1}>{translate.head}</h1>
                        <blockquote>
                            <p style={styles.p}>{translate.paragraph[0]} <br/> {translate.paragraph[1]}</p>
                            <small>{translate.small[0]} <cite title="Source Title">{translate.small[1]}</cite></small>
                        </blockquote>
                    </Jumbotron>
                </Col>
            </Row>
        )
    }
}
