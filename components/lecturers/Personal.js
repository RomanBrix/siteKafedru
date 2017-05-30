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
                        <Thumbnail src="https://static.wixstatic.com/media/ba0ce4_fcedc1a17b2c49a98227c5b03ef4c4ce~mv2.jpg/v1/fill/w_206,h_226,al_c,q_80,usm_0.66_1.00_0.01/ba0ce4_fcedc1a17b2c49a98227c5b03ef4c4ce~mv2.jpg" alt="242x200">
                            <h3>Ковтун Оксана Іванівна</h3>
                            <hr/>
                            <p style={styles.p}>Кандидат фізико-математичних наук, доцент</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="https://static.wixstatic.com/media/ba0ce4_4d588f8c4f5c4f92b9aed336c2352795~mv2.jpg/v1/fill/w_198,h_225,al_c,q_80,usm_0.66_1.00_0.01/ba0ce4_4d588f8c4f5c4f92b9aed336c2352795~mv2.jpg" alt="242x200">
                            <h3>Сенченко Олексій Сергійович</h3>
                            <hr/>
                            <p style={styles.p}>Доцент, кандидат фізико-математичних наук</p>
                        </Thumbnail>
                    </Col>
                </Row>

                <Row>
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
                    <Col xs={6} md={4}>
                        <Thumbnail src="https://static.wixstatic.com/media/ba0ce4_5d096b3e7a904e73aea19a95cddd8102~mv2.jpg/v1/crop/x_40,y_50,w_392,h_538/fill/w_178,h_228,al_c,q_80,usm_0.66_1.00_0.01/ba0ce4_5d096b3e7a904e73aea19a95cddd8102~mv2.jpg" alt="242x200">
                            <h3>Лахно Валерій Анатолійович</h3>
                            <hr/>
                            <p style={styles.p}>Доктор технічних наук, доцент</p>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4} xsOffset={3} mdOffset={4}>
                        <Thumbnail src="https://static.wixstatic.com/media/ba0ce4_65ec0e32880541328384a32286f70aae~mv2.jpg/v1/crop/x_0,y_27,w_608,h_576/fill/w_247,h_234,al_c,q_80,usm_0.66_1.00_0.01/ba0ce4_65ec0e32880541328384a32286f70aae~mv2.jpg" alt="242x200">
                            <h3>Печененко Євгенія Михайлівна</h3>
                            <hr/>
                            <p style={styles.p}>Фахівець кафедри</p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
