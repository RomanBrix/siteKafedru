import React, {Component} from 'react';
import {
    Col,
    Thumbnail,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';
export default class Data extends Component {
    render(){
        const { item } = this.props;
        const style = {
            position: 'relative',
            right: '0',
            fontWeight: '800',
        }
        return(
            <Col xs={6} md={4}>
                <Thumbnail src={item.img} alt="242x200">
                    <h3>{item.name}</h3>
                    <hr/>
                    <ListGroup fill>
                        <ListGroupItem bsStyle="info">Тема: <br/><span style={style}>{item.theme}</span></ListGroupItem>
                        <ListGroupItem bsStyle="success">Дата:  <span style={style}>{item.date}</span></ListGroupItem>
                        <ListGroupItem bsStyle="warning">Час: <span style={style}>{item.time}</span></ListGroupItem>
                        <ListGroupItem bsStyle="danger">Ауд: <span style={style}>{item.aud}</span></ListGroupItem>
                    </ListGroup>
                </Thumbnail>
            </Col>
        )
    }
}
