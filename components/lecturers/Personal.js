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
                        <Thumbnail src="./src/teachers/pleskach.jpg" alt="242x200">
                            <h3>Плескач Валентина Леонідівна</h3>
                            <hr/>
                            <p style={styles.p}>Доктор економічних наук, кандидат технічних наук, завідувач кафедри прикладних інформаційних систем</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="./src/teachers/saiko.jpg" alt="242x200">
                            <h3>Сайко Володимир Григорович</h3>
                            <hr/>
                            <p style={styles.p}>професор, д.т. н.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="./src/teachers/mironova.jpg" alt="242x200">
                            <h3>Міронова Вікторія Леонідівна </h3>
                            <hr/>
                            <p style={styles.p}>доцент, к. т. н.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="./src/teachers/domrachev.jpg" alt="242x200">
                            <h3>Домрачев Володимир Миколайович</h3>
                            <hr/>
                            <p style={styles.p}>доцент, к. ф.-м. н.</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="./src/teachers/jihareva.jpg" alt="242x200">
                            <h3>Жихарєва Юлія Ігорівна</h3>
                            <hr/>
                            <p style={styles.p}>Кандидат фізико-математичних наук,  асистент</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="./src/teachers/garko.jpg" alt="242x200">
                            <h3>Гарко Ірина Ігорівна</h3>
                            <hr/>
                            <p style={styles.p}>асистент</p>
                        </Thumbnail>
                    </Col>

                    <Col xs={6} md={4}>
                        <Thumbnail src="./src/teachers/duhnovska.jpg" alt="242x200">
                            <h3>Духновська Ксенія Костянтинівна</h3>
                            <hr/>
                            <p style={styles.p}>Асистент</p>
                        </Thumbnail>
                    </Col>     
                    
                    <Col xs={6} md={4}>
                        <Thumbnail src="./src/teachers/pirog.jpg" alt="242x200">
                            <h3>Пирог Микола Володимирович</h3>
                            <hr/>
                            <p style={styles.p}>асистент</p>
                        </Thumbnail>
                    </Col>
                    
                    {/* <Col xs={6} md={4}>
                        <Thumbnail src="./src/teachers/fenik.jpg" alt="242x200">
                            <h3>Феник Євгеній Олександрович</h3>
                            <hr/>
                            <p style={styles.p}>асистент</p>
                        </Thumbnail>
                    </Col>  */}
                </Row>
            </Grid>
        )
    }
}
