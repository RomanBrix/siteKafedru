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
        switch (stepIndex) {
            case 0:
                return (
                    <ListGroup>
                        <ListGroupItem>Забезпечення іногородніх студентів першого курсам місцями в гуртожитках, з доступом до мережі Internet, WI-FI.</ListGroupItem>
                        <ListGroupItem>Забезпечення всіх студентів першого курсу бюджетної форми навчання стипендією</ListGroupItem>
                        <ListGroupItem>Постійне проведення спільних науково - практичних конференцій, виконання студентських проектів, організація «круглих столів», семінарів, олімпіад серед студентської молоді.</ListGroupItem>
                        <ListGroupItem>Розвинена система спортивних секцій з багатьох видів спорту. Діють спортзал, стадіон, спортивний майданчик; можливість увійти до складу збірних команд університету.</ListGroupItem>
                    </ListGroup>
                );
            case 1:
                return (
                    <ListGroup>
                        <ListGroupItem header="До заяви абітурієнт приносить:" bsStyle="info"/>
                        <ListGroupItem>Документ про повну загальну середню освіту (оригінал або його завірену копію);</ListGroupItem>
                        <ListGroupItem bsStyle="warning">Сертифікат з трьох предметів: українська мова та література, математика, фізика або іноземна мова за вибором;</ListGroupItem>
                        <ListGroupItem>Медичну довідку за формою 086-У;</ListGroupItem>
                        <ListGroupItem>6 кольорових фото розміром 3х4 см;</ListGroupItem>
                        <ListGroupItem>Копію довідки про присвоєння ідентифікаційного коду, три поштових конверти з марками, папку-обкладинку, конверти форматів А4, А5;</ListGroupItem>
                        <ListGroupItem>Паспорт, військовий квиток або посвідчення про приписку до призовної дільниці та документи, що дають право на пільги, вступник пред'являє особисто в терміни, визначені для подання документів</ListGroupItem>
                    </ListGroup>
                    );
            case 2:
                return (
                    <div className='lastStep'>
                        <h2>За додатковою інформацією - зв'яжіться з нами!</h2>
                        <RaisedButton
                            label={'Зв\'язатися'}
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
        console.log();
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        return(
            <div className="container">

                <Card className="root_card">
                    <CardTitle title="Абітурієнтам" subtitle="" />
                    <CardText>
                        <p>
                            Кафедра прикладних інформаційних систем
                            запршує на навччання абітурієнтів на навчальну програму «Прикладне програмування » спеціальності 122 «Комп'ютерні науки»
                        </p>
                        <hr/>
                        <p>
                            <b>Програма подвійних дипломів</b>: вища школа
                            бізнеса в <b>Домброві (ПОЛЬША)</b> та комп'ютерна школа <b>ЛІДС (ВЕЛИКОБРИТАНИЯ)</b> (факультети информатики, менеджмента)
                            <br/><em>Термін навчання: денна - 4 роки та інші.</em>
                        </p>
                        <Stepper activeStep={stepIndex}>
                            <Step>
                                <StepButton onClick={()=>{ this.setState({stepIndex: 0})}}>Наші пріоритети</StepButton>
                            </Step>
                            <Step>
                                <StepButton onClick={()=>{ this.setState({stepIndex: 1})}}>Прийом документів</StepButton>
                            </Step>
                            <Step>
                                <StepButton onClick={()=>{ this.setState({stepIndex: 2})}}>Додадотка інформація</StepButton>
                            </Step>
                        </Stepper>
                        <div style={contentStyle}>
                            {finished ? (
                                <div className="end">
                                    <p>Чекаємо Вас на парах! <Mood/> </p>
                                    <RaisedButton
                                        label={'Продивитись ще раз'}
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
                                            label="Назад"
                                            disabled={stepIndex === 0}
                                            onTouchTap={this.handlePrev.bind(this)}
                                            style={{marginRight: 12}}
                                        />
                                        <RaisedButton
                                            label={stepIndex === 2 ? 'Закінчити' : 'Далі'}
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
