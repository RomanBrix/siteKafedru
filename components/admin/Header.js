import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        const { name }= this.props;

        return(
            <div className="header">
                <div className="logo">
                   <i className="icon-cog-1 animate-spin"/>
                    Admin Panel
                </div>
                <div className="menu">
                    <ul>
                        <li onClick={()=>{
                            location.reload();
                        }}>
                            <i className="icon-newspaper"/>
                            Новости
                        </li>
                    </ul>
                </div>
                <div className="user">
                    <div className="name">
                        <i className="icon-user-circle-o"/>
                        { name }
                    </div>
                </div>
                <div className="exit" onClick={()=>{
                    document.cookie = 'hash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    document.cookie = 'name=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    document.cookie = 'id=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    location.reload();
                }}>
                    <div className="btn btn_exit">
                        <i className="icon-lock-open"/>
                        Выйти
                    </div>
                </div>
            </div>
        )
    }
}
