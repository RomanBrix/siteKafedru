import React, {Component} from 'react';
import Enter from "./Enter";
import Header from "./Header";
import News from "./News";
import { getCookie } from "../functions";
import axios from "axios";

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            cookieHash: getCookie('hash') || null
        };
        const hash = this.state.cookieHash;

        if(hash !== null){
            const that = this;

            axios.get('http://localhost:8888/public/admin/login.php',{ params:{ id: getCookie('id'), hash: hash, kind: "hash" } })
                .then(function({data}) {
                    console.log(data);
                    if(data === true){
                        that.setState({
                            auth: true
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    loginHandler(login, pass){
        const that = this;
        axios.get('http://localhost:8888/public/admin/login.php',{ params:{ log: login, pass: pass, kind: "login" } })
            .then(function({data}) {
                console.log(data);
                if(data[0] === true){
                    that.setState({
                        auth: true
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }
    render(){
        const { auth } = this.state;
        return(
            <div className="admin">
                {auth ? <Header name={ getCookie('name') }/> : ""}

                {
                    !auth ?
                        <Enter loginHandler={this.loginHandler.bind(this)}/>
                        :
                        <News/>
                }

            </div>
        )
    }
}
