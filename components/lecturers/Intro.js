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
        return(
            <Row bsClass="row myRow">
                <Col xs={10} md={10}  mdOffset={1} xsOffset={1}>
                    <Jumbotron>
                        <h1 style={styles.h1}>Кафедра прикладних інформаційних систем</h1>
                        <blockquote>
                            <p style={styles.p}>Щиро вітаю Вас, шановний студент, на кафедрі Прикладних Інформаційних Систем. <br/> Сподіваюсь, що наше спільне майбутнє  принесе Вам справжнє естетичне задоволення від вивчення передових інформаційних технологій. Ви не дарма обрали саме нашу кафедру, адже в нас, замість сухої теорії, студенти вивчають практичні знання, які допоможуть Вам стати кваліфікованим спеціалістом у майбутньому. Чекаємо Вас на кафедрі Прикладних Інформаційних Систем!</p>
                            <small>Плескач Валентина Леонідівна, <cite title="Source Title">завідувач кафедри Прикладних Інформаційних Систем</cite></small>
                        </blockquote>
                    </Jumbotron>
                </Col>
            </Row>
        )
    }
}
