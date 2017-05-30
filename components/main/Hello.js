import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Thumbnail,
    Button
} from 'react-bootstrap';
import { LECTURERS, FIT } from '../../Globals';

export default class Hello extends Component {
    render(){
        return(
        <Grid className="Hello">
            <Row>
                <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
                    <Thumbnail
                        style={{
                            minWidth: '200px'
                        }}
                        src={ FIT }
                        alt="FIT" >
                        <h3>Вітаємо Вас на кафедрі прикладних інформаційних систем!</h3>
                        <p>Щиро вітаю Вас, шановний студент, на кафедрі Прикладних Інформаційних Систем. Сподіваюсь, що наше спільне майбутнє  принесе Вам справжнє естетичне задоволення від вивчення передових інформаційних технологій</p>
                        <p>
                            <Button bsStyle="primary" href={ LECTURERS }>Познайомитись</Button>
                        </p>
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>

        )
    }
};
/*
 <div className="row">
 <div className="col-md-6 col-md-offset-3" id="Hello">sdsd</div>

 </div>
 */