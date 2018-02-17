import React, {Component} from 'react';
import {
    ListGroup,
    ListGroupItem,
    Popover,
    OverlayTrigger
} from 'react-bootstrap';
import {
    Card,
    CardTitle,
    CardText
} from 'material-ui/Card';
import {
    Tabs,
    Tab
} from 'material-ui/Tabs';
import Glob  from 'material-ui/svg-icons/communication/textsms';
import Det  from 'material-ui/svg-icons/communication/message';
import Edu  from 'material-ui/svg-icons/social/school';
import Realiz  from 'material-ui/svg-icons/social/public';
import Stand from "material-ui/svg-icons/action/check-circle";
import Cert from 'material-ui/svg-icons/av/new-releases';

export default class Container extends Component {

    render(){
        const { translate } = this.props;

        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus" title="стандарт зі спеціальності">
                {translate.pop}
            </Popover>
        );

        const title3container = translate.li3.map((item, index)=>{
            return(
                <ListGroupItem key={index}> {item} </ListGroupItem>
            )
        });

        const title4container = translate.li4.map((item, index)=>{
            if(index === 0 || index === 11 || index === 16 || index === 24) {
                return (
                    <ListGroupItem key={index} header={item} bsStyle="info"/>
            )
            } else{
                return (
                   <ListGroupItem key={index}> {item} </ListGroupItem>
                )
            }
        });
        let titleMap = [];
        let contentMap = [];
        let fullMap = [];
        const title4container2 = translate.li5.map((item, index)=>{
            if(index % 2 === 0){
                titleMap.push(item);

            } else{
                contentMap.push(item);
            }
        });
        for(let i = 0; i < titleMap.length; i++){
            fullMap.push(<ListGroupItem header={titleMap[i]}>{contentMap[i]}</ListGroupItem>);
        }
        return(
            <div className="container">
                <Card>
                    <Tabs className="main_Tab">
                        <Tab
                            icon={<Glob/>}
                            label={translate.label1}
                        >
                            <CardTitle title={translate.title1} subtitle="" />
                            <CardText>
                                <p>{translate.p1}</p>
                            </CardText>
                        </Tab>

                        <Tab
                            icon={<Det/>}
                            label={translate.label2}
                        >
                            <CardTitle title={translate.title2} subtitle="" />
                            <CardText>
                                <p>{translate.p2}</p>
                            </CardText>
                        </Tab>

                        <Tab
                            icon={<Edu />}
                            label={translate.label3}
                        >
                            <CardTitle title={translate.title3} subtitle="" />
                            <CardText>
                                <ListGroup>
                                   {title3container}
                                </ListGroup>
                                <p>{translate.p3}</p>
                            </CardText>
                        </Tab>

                        <Tab
                            icon={<Realiz />}
                            label={translate.label4}
                        >
                            <CardTitle title={translate.title4} subtitle="" />
                            <CardText>
                                <ListGroup>
                                    {title4container}
                                </ListGroup>

                                <p><b>{translate.p4}</b></p>
                                <ListGroup>
                                    { fullMap }
                                </ListGroup>
                            </CardText>
                        </Tab>

                        <Tab
                            icon={<Cert/>}
                            label={translate.label5}
                        >
                            <CardTitle title={translate.title5} subtitle="" />
                            <CardText>
                                <div id="about-pdf">
                                    <a href="https://drive.google.com/file/d/1md3PwNZ9m_2OBLS_gIsAmhePR7RbhzWH/view?usp=sharing" target="_blank">
                                        <img src="./src/pdf.svg"  alt="PDF"/>
                                    </a>
                                </div>
                            </CardText>
                        </Tab>
                        <Tab
                            icon={<Stand/>}
                            label={translate.label6}
                        >
                            <CardTitle title={translate.title6} subtitle="" />
                            <CardText>
                                <p>{translate.p6}</p>
                                <p>{translate.p7}</p>
                                <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus} style={{ marginTop: '100px' }}>
                                    <a  className="link_word" href="https://drive.google.com/file/d/0BwuOv3Xw53PoZWRYZmFCdUZJejA/view?usp=sharing" target="_blank"><img src="./src/word.svg"  className="WORD" alt="word"/></a>
                                </OverlayTrigger>
                            </CardText>
                        </Tab>
                    </Tabs>
                </Card>
            </div>
        )
    }

}
