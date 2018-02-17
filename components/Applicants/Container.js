import React, {Component} from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap';
import {
    Card,
    CardTitle,
    CardText
} from 'material-ui/Card';
import {
    Step,
    Stepper,
    StepButton,
    StepLabel
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { CONTACTS } from '../../Globals';
import Mood from 'material-ui/svg-icons/social/mood';

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            finished: false,
            stepIndex: 0,
        }
    }

    handleNext() {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev(){
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    getStepContent(stepIndex) {
        const { translate } = this.props;

        switch (stepIndex) {
            case 0:
                return (
                    <ListGroup>
                        <ListGroupItem>{translate.case0.li1}</ListGroupItem>
                        <ListGroupItem>{translate.case0.li2}</ListGroupItem>
                        <ListGroupItem>{translate.case0.li3}</ListGroupItem>
                        <ListGroupItem>{translate.case0.li4}</ListGroupItem>
                    </ListGroup>
                );
            case 1:
                return (
                    <ListGroup>
                        <ListGroupItem header={`${translate.case1.li1}:`} bsStyle="info"/>
                        <ListGroupItem>{translate.case1.li2}</ListGroupItem>
                        <ListGroupItem bsStyle="warning">{translate.case1.li3}</ListGroupItem>
                        <ListGroupItem>{translate.case1.li4}</ListGroupItem>
                        <ListGroupItem>{translate.case1.li5}</ListGroupItem>
                        <ListGroupItem>{translate.case1.li6}</ListGroupItem>
                        <ListGroupItem>{translate.case1.li7}</ListGroupItem>
                    </ListGroup>
                    );
            case 2:
                return (
                    <div className='lastStep'>
                        <h2>{translate.case2.head}</h2>
                        <RaisedButton
                            label={translate.case2.label}
                            secondary={true}
                            style={{margin: 12}}
                            onTouchTap={()=>{
                                location.href="contacts.html";
                            }}
                        />
                    </div>
                );
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }
    render(){
        const { translate } = this.props;
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        const content = translate.content;

        return(
            <div className="container">
                <Card className="root_card">
                    <CardTitle title={content.title} subtitle="" />
                    <CardText>
                        <p>
                            {content.p1}
                        </p>
                        <hr/>
                        <p>
                            <b>{content.p2[0]}</b>
                            :{content.p2[1]}
                            <b>{content.p2[2]}</b>
                            {content.p2[3]}
                            <b>{content.p2[4]}</b>
                            {content.p2[5]}
                            <br/>
                            <em>{content.p2[6]}</em>
                        </p>
                        <Stepper activeStep={stepIndex}>
                            <Step>
                                <StepButton onClick={()=>{ this.setState({stepIndex: 0})}}>{content.caseHead[0]}</StepButton>
                            </Step>
                            <Step>
                                <StepButton onClick={()=>{ this.setState({stepIndex: 1})}}>{content.caseHead[1]}</StepButton>
                            </Step>
                            <Step>
                                <StepButton onClick={()=>{ this.setState({stepIndex: 2})}}>{content.caseHead[2]}</StepButton>
                            </Step>
                        </Stepper>
                        <div style={contentStyle}>
                            {finished ? (
                                <div className="end">
                                    <p>{content.finish[0]}<Mood/> </p>
                                    <RaisedButton
                                        label={content.finish[1]}
                                        primary={true}
                                        fullWidth={true}
                                        onTouchTap={(event)=>{
                                            event.preventDefault();
                                            this.setState({stepIndex: 0, finished: false});
                                        }}
                                    />

                                </div>
                            ) : (
                                <div>
                                    {this.getStepContent(stepIndex)}
                                    <div style={{marginTop: 12}}>
                                        <FlatButton
                                            label={content.finish[2]}
                                            disabled={stepIndex === 0}
                                            onTouchTap={this.handlePrev.bind(this)}
                                            style={{marginRight: 12}}
                                        />
                                        <RaisedButton
                                            label={stepIndex === 2 ? content.finish[3] : content.finish[4]}
                                            primary={true}
                                            onTouchTap={this.handleNext.bind(this)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardText>
                </Card>
            </div>
        )
    }

}
