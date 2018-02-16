import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';
import {
    MAIN,
    ABOUT,
    APPLICANTS,
    CONTACTS,
    NEWS,
    LECTURERS,
    CONSULTATION,
    PUBLIC_LESSON,
    PROGRESS,
    LOGO,
} from '../Globals';
// import trnas from '../Data/translate.json';
import { getLanguage, getCookie, setCookie } from '../components/functions/index.js';
import "../css/icons/css/fontello.css";

export default class Header extends Component {
    constructor(props) {
        super(props);
        // this.setCookie('language', 'ru',{expires: 350});
        this.state = {
            // language: this.getCookie("language") || "ua",
            translate: getLanguage(getCookie("language")).header || getLanguage("ua").header
        }
    }


    render(){
        const { translate } = this.state;
        const { changeLang } = this.props;

        return (
            <Navbar inverse collapseOnSelect fluid staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                       <img src={LOGO}
                             alt="opa"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <li role="presentation"><a href={MAIN}>{translate.main}</a></li>
                        <li role="presentation"><a href={ABOUT}>{translate.about}</a></li>
                        <li role="presentation"><a href={APPLICANTS}>{translate.applicants}</a></li>
                        <li role="presentation"><a href={LECTURERS}>{translate.teachers}</a></li>
                        <li role="presentation"><a href={PROGRESS}>{translate.department}</a></li>
                        <NavDropdown eventKey={3} title={translate.schedule} id="basic-nav-dropdown">
                            <li role="presentation"><a href={CONSULTATION}>{translate.consultation}</a></li>
                            <MenuItem divider />
                            <li role="presentation"><a href={PUBLIC_LESSON}>{translate.openLessons}</a></li>
                        </NavDropdown>
                    </Nav>

                    <Nav pullRight>
                        <li role="presentation"><a href={NEWS}>{translate.news}</a></li>
                        <li role="presentation"><a href={CONTACTS}>{translate.contacts}</a></li>
                        <li role="presentation">
                            <div className="lang-dropdown">
                            <span id="active_lang">
                                <i className="icon-globe-1 animate-spin"/>
                            </span>
                                <div className="dropdown-content dropdown-main">
                                    <span onClick={() => {
                                        setCookie('language', 'ua', {expires: 350});
                                        this.setState({translate: getLanguage(getCookie("language")).header});
                                        changeLang();
                                    }}>
                                        <img src="./src/header/ukraine.svg" alt="ua"/>
                                    </span>
                                    <span onClick={() => {
                                        setCookie('language', 'eng', {expires: 350});
                                        this.setState({translate: getLanguage(getCookie("language")).header});
                                        changeLang();
                                    }}>
                                    <img src="./src/header/gb.svg" alt="eng"/>
                                </span>
                                </div>
                            </div>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
