import React, {Component} from 'react';
import {
    Grid,
    Row
} from 'react-bootstrap';
import { lessonsData } from '../../Data';
import Data from './Data';

export default class Personal extends Component {
    render(){
        const container = lessonsData.map((item, index)=>{
           return <Data item={ item } key={ index }/>
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
