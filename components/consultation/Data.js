import React, {Component} from 'react';
import {
    Col,
    Thumbnail
} from 'react-bootstrap';

export default class Data extends Component {
render(){
    const { item } = this.props;
    const style = {
        textAlign: "center",
        fontWeight: '800',
        fontSize: '1.6em'
    };

    return(
        <Col xs={6} md={4}>
            <Thumbnail src={item.src} alt="242x200" bsClass="thumbnail consult">
                <h3>{item.name}</h3>
                <hr/>
                <p style={style}>{item.p}</p>
            </Thumbnail>
        </Col>
    )
}
}
