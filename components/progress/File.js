import React, {Component} from 'react';
import { PDF, PDF_URL } from '../../Globals';
import {
    Popover,
    OverlayTrigger
} from 'react-bootstrap';

export default class File extends Component {

    render(){
        const { translate } = this.props;
        const style = {
            marginTop: '-7px'
        }
        const popoverRight = (
            <Popover id="popover-positioned-right" title={`${translate.caution}!`}  style={style}>
                <strong> {translate.p}.</strong>
            </Popover>
        );
        return (
            <OverlayTrigger trigger={['hover', 'focus']} show={true} placement="right" overlay={popoverRight}>
                <a href={PDF_URL} target="_blank" id="PDF">
                    <img src={PDF} width="50" alt="PDF"/>
                </a>
            </OverlayTrigger>
        )
    }
}
