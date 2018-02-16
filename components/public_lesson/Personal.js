import React, {Component} from 'react';
import {
    Grid,
    Row
} from 'react-bootstrap';
// import { lessonsData } from '../../Data';
import Data from './Data';

export default class Personal extends Component {
    render(){
        const { translate } = this.props;
        const container = translate.personal.map((item, index)=>{
           return <Data item={ item } key={ index } translate={translate.static}/>
        });
        return(
            <Grid>
                <Row>
                    { container }
                </Row>
            </Grid>
        )
    }
}
