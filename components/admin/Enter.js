import React, {Component} from 'react';

export default class Enter extends Component {

    render(){
        const { loginHandler } = this.props;

        return(
            <div className="login-container">
                <div className="login">
                    <h3>Админ-панель</h3>
                    <h1>FIT: ПИС</h1>
                    <input type="text" id="login" ref={"login"} placeholder="Логин"/>
                    <input type="password" id="password" ref={"pass"} placeholder="Пароль"/>
                    <div className="btn btn_login" onClick={()=> {
                        const {login, pass} = this.refs;
                        loginHandler(login.value, pass.value);
                    }}>
                        <i className="icon-lock"/>
                        Вход
                    </div>
                </div>
            </div>
        )
    }
}
