import React, {Component} from 'react';
import  TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MailOutLine from 'material-ui/svg-icons/communication/mail-outline';
import { blueA400, orangeA700 } from 'material-ui/styles/colors';

export default class Subscription extends Component {
    constructor(props){
        super(props);
        this.state = {
            disable: true
        }
    }
    DisableFalse(){
        this.setState({
            disable: false
        })
    }
    DisableTrue(){
        this.setState({
            disable: true
        })
    }
    chek(func){
        const  email = this.refs.EMAIL.input.value;
         if(email.indexOf('@') !== -1 && email.length > 5){
             func(email);
         } else {
             alert('не вірний E-mail');
         }
    }
    send(e){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "contacts.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("email=" + e);
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('Дякуємо за підписку');

            }
        };
        xhr.onerror = ()=>{
            alert('Спробуйте через 5 хвилин');
        }


    }

    render(){
        const styles = {
            button: {
                position: 'relative',
                left: '50%',
                marginLeft: '-44px',
                marginTop: '12px'
            }
        };


        const { disable } = this.state;
        return(
            <div>
                <TextField
                    hintText="example@gmail.com"
                    floatingLabelText="E-mail"
                    fullWidth={true}
                    name="Email"
                    underlineFocusStyle={{borderColor:orangeA700}}
                    underlineStyle={{borderColor: blueA400}}
                    floatingLabelFocusStyle={{color: orangeA700}}
                    onChange={({ target })=>{
                          if(target.value.length > 0){
                              this.DisableFalse();
                          }else {
                              this.DisableTrue();
                          }
            }}
                    ref='EMAIL'
                /><br/>
                    <RaisedButton
                        backgroundColor={blueA400}
                        icon={<MailOutLine color="white"/>}
                        style={styles.button}
                        disabled={disable}
                        onTouchTap={()=>{

                           this.chek(this.send);

                        }}
                    />
            </div>
        )
    }
}