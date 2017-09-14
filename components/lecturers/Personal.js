import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Thumbnail
} from 'react-bootstrap';
export default class Personal extends Component {
    render(){
        const styles ={
            p:{
                fontSize: "12px"
            }
        }
        return(
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail src="https://static.wixstatic.com/media/ba0ce4_eaf59f2453db4b828fce11c48e797e28~mv2.jpg/v1/crop/x_0,y_30,w_300,h_284/fill/w_246,h_230,al_c,q_80,usm_0.66_1.00_0.01/ba0ce4_eaf59f2453db4b828fce11c48e797e28~mv2.jpg" alt="242x200">
                            <h3>Плескач Валентина Леонідівна</h3>
                            <hr/>
                            <p style={styles.p}>Доктор економічних наук, кандидат технічних наук, завідувач кафедри прикладних інформаційних систем</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="https://static.wixstatic.com/media/ba0ce4_976ec0228b9d4f0fa69001c7859f906c~mv2.jpg/v1/fill/w_246,h_228,al_c,q_80,usm_0.66_1.00_0.01/ba0ce4_976ec0228b9d4f0fa69001c7859f906c~mv2.jpg" alt="242x200">
                            <h3>Жихарєва Юлія Ігорівна</h3>
                            <hr/>
                            <p style={styles.p}>Кандидат фізико-математичних наук,  асистент</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="https://static.wixstatic.com/media/ba0ce4_bdcbbb7f20f04035be71735b7ae48b2d~mv2.jpg/v1/fill/w_246,h_228,al_c,q_80,usm_0.66_1.00_0.01/ba0ce4_bdcbbb7f20f04035be71735b7ae48b2d~mv2.jpg" alt="242x200">
                            <h3>Духновська Ксенія Костянтинівна</h3>
                            <hr/>
                            <p style={styles.p}>Асистент</p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
