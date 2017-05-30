import React, {Component} from 'react';
import { Well } from 'react-bootstrap';
import Contact from './Contact';
import CallBack from './CallBack';

export default class Container extends Component {
    render(){
        const { send } = this.props;
        return(
            <Well bsSize="large">
                <CallBack send={ send }/>
                <Contact/>
            </Well>
        )
    }
}
