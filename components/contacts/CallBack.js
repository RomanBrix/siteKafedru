import React, {Component} from 'react';
import  TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MailOutLine from 'material-ui/svg-icons/communication/mail-outline';
import { blueA400, orangeA700 } from 'material-ui/styles/colors';


export default class CallBack extends Component {
    check(func){
        const name = this.refs.NAME.input.value;
        const email = this.refs.EMAIL.input.value;
        const msg = this.refs.MSG.input.refs.input.value;
        if( name.length > 1) {
            if (email.indexOf('@') !== -1 && email.length > 5) {
                    func(name, msg, email);

            } else alert('не вірний E-mail');
        }else alert('Як Вас звати?');

    }
    render(){
        const { send } = this.props;
        return(
            <div>
                <TextField
                    hintText="Всеволод"
                    floatingLabelText="Ім'я"
                    fullWidth={true}
                    name="Name"
                    underlineFocusStyle={{borderColor:orangeA700}}
                    underlineStyle={{borderColor: blueA400}}
                    floatingLabelFocusStyle={{color: orangeA700}}
                    ref="NAME"

                /><br/>
                <TextField
                    hintText="example@gmail.com"
                    floatingLabelText="E-mail"
                    fullWidth={true}
                    name="Email"
                    underlineFocusStyle={{borderColor:orangeA700}}
                    underlineStyle={{borderColor: blueA400}}
                    floatingLabelFocusStyle={{color: orangeA700}}
                    ref="EMAIL"
                /><br/>
                <TextField
                    hintText="Коли буде інтернет в корпусі?"
                    floatingLabelText="Повідомлення"
                    underlineFocusStyle={{borderColor:orangeA700}}
                    underlineStyle={{borderColor: blueA400}}
                    floatingLabelFocusStyle={{color: orangeA700}}
                    multiLine={true}
                    fullWidth={true}
                    name="Message"
                    rows={2}
                    ref="MSG"
                /><br/>
                <RaisedButton
                    backgroundColor={blueA400}
                    icon={<MailOutLine color="white"/>}
                    fullWidth={true}
                    onTouchTap={()=>{
                        this.check(send);
                    }}
                />
            </div>
        )
    }

}
