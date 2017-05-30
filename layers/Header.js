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
    CONTACTS,
    NEWS,
    LECTURERS,
    CONSULTATION,
    PUBLIC_LESSON,
    PROGRESS,
    LOGO,
} from '../Globals'

export default class Header extends Component {
    render(){
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
                        <li role="presentation"><a href={MAIN}>Головна</a></li>
                        <li role="presentation"><a href={LECTURERS}>Викладачі</a></li>
                        <li role="presentation"><a href={PROGRESS}>Розвиток Кафедри</a></li>
                        <NavDropdown eventKey={3} title="Графік" id="basic-nav-dropdown">
                            <li role="presentation"><a href={CONSULTATION}>Консультацій</a></li>
                            <MenuItem divider />
                            <li role="presentation"><a href={PUBLIC_LESSON}>Відкритих Занять</a></li>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <li role="presentation"><a href={NEWS}>Новини</a></li>
                        <li role="presentation"><a href={CONTACTS}>Контакти</a></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
