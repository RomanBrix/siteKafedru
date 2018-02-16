import React, {Component} from 'react';
import {
    Col,
    Thumbnail,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

export default class Data extends Component {
    render(){
        const { item, translate } = this.props;
        const style = {
            position: 'relative',
            right: '0',
            fontWeight: '800',
        }
        return(
            <Col xs={6} md={4}>
                <Thumbnail src={item.src} alt="242x200" bsClass="thumbnail aud">
                    <h3>{item.name}</h3>
                    <hr/>
                    <ListGroup fill>
                        <ListGroupItem bsStyle="info">{translate.topic}: <br/><span style={style}>{item.topic}</span></ListGroupItem>
                        <ListGroupItem bsStyle="success">{translate.date}:  <span style={style}>{item.date}</span></ListGroupItem>
                        <ListGroupItem bsStyle="warning">{translate.time}: <span style={style}>{item.time}</span></ListGroupItem>
                        <ListGroupItem bsStyle="danger">{translate.aud}: <span style={style}>{item.aud}</span></ListGroupItem>
                    </ListGroup>
                </Thumbnail>
            </Col>
        )
    }
}
