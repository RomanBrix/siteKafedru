import React, {Component} from 'react';
import axios from "axios";

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    getValuesForChange(imgName){
        const { getAllNewsAndEvents } = this.props;
        const {
            title_ua,
            title_eng,
            date_ua,
            date_eng,
            text_ua,
            text_eng,
            end_ua,
            end_eng,
            file
        } = this.refs;
        let type = document.getElementsByName('type');
        for (let i = 0; i < type.length; i++) {
            if (type[i].checked){
                // alert(options[i].value);
                type = type[i].value;
            }
        };
        const newValues = {
            type: type,
            title_ua: title_ua.value,
            title_eng: title_eng.value,
            date_ua: date_ua.value || null,
            date_eng: date_eng.value || null,
            text_ua: text_ua.value,
            text_eng: text_eng.value,
            end_ua: end_ua.value || null,
            end_eng: end_eng.value || null,
            file: file.value || null,
            img: imgName
        };
        console.log(newValues);
        axios.post("http://localhost:8888/public/admin/add.php", newValues)
            .then(({data}) => {
                console.log(data);
                // this.getValuesForChange(data);
                if(data === true){
                    getAllNewsAndEvents();
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handlerUpload(){
        const { selectedFile } = this.state;
        if(selectedFile !== null) {
            const fd = new FormData();
            fd.append('image', selectedFile, selectedFile.name);

            axios.post("http://localhost:8888/public/admin/upload.php", fd)
                .then(({data}) => {
                    console.log(data);
                    this.getValuesForChange(data);
                })
                .catch((err) => {
                    console.log(err)
                })
        } else{
            this.getValuesForChange(null);
        }
    }
    fileSelected(target){
        console.log(target.files[0]);
        this.setState({
            selectedFile:target.files[0]
        });
    }
    render(){
        const { changeHandler } = this.props;
        return (
            <div className="change">
                <h1> <i className="icon-crown-plus"/>Новая Запись!</h1>
                <div className="btn_back" onClick={() => changeHandler(false)}>
                    <i className="icon-undo"/>
                    Вернуться</div>
                <div className="type">
                    <label htmlFor="type1">Новость</label>
                    <input type="radio" name="type" id="type1" value="news" defaultChecked/>
                    <label htmlFor="type2">Событие</label>
                    <input type="radio" name="type" id="type2" value="events"/>
                </div>
                <div className="lang">
                    <div>
                        <img src="../src/header/ukraine.svg" alt="UA"/>
                        <img src="../src/header/gb.svg" alt="UA"/>

                    </div>
                </div>
                <div className="box box_title">
                    <span> Заголовок: </span>
                    <input
                        type="text"
                        id="title_ua"
                        placeholder="Заголовок"
                        ref="title_ua"
                    />
                    <input
                        type="text"
                        id="title_eng"
                        placeholder="Title"
                        ref="title_eng"
                    />
                </div>

                <div className="box box_date">
                    <span> Дата: </span>
                    <input
                        type="text"
                        id="date_ua"
                        placeholder="Дата"
                        ref="date_ua"
                    />
                    <input
                        type="text"
                        id="date_eng"
                        placeholder="Date"
                        ref="date_eng"
                    />
                </div>

                <div className="box box_text">
                    <span> Текст: </span>
                    <textarea
                        type="text"
                        id="text_ua"
                        placeholder="Текст"
                        ref="text_ua"
                    />
                    <textarea
                        type="text"
                        id="text_eng"
                        placeholder="Text"
                        ref="text_eng"
                    />
                </div>

                <div className="box box_end">
                    <span> Заключительные слова: </span>
                    <input
                        type="text"
                        id="end_ua"
                        placeholder="Заключительные слова"
                        ref="end_ua"
                    />
                    <input
                        type="text"
                        id="end_eng"
                        placeholder="End of text"
                        ref="end_eng"
                    />
                </div>

                <div className="box box_add box_img">
                    <span>Фото: </span>
                    <input
                        type="file"
                        id="img"
                        ref="img"
                        onChange={({target}) => this.fileSelected(target)}
                        accept=".jpg, .jpeg, .png"
                    />
                </div>

                <div className="box box_add box_file">
                    <span>Больше информации: </span>
                    <input
                        type="url"
                        id="file"
                        placeholder="src for file"
                        ref="file"
                    />
                </div>
                <div className="btn_add" onClick={() => this.handlerUpload()}>
                    <i className="icon-plus-squared"/>
                    Добавить
                </div>
            </div>
        )
    }
}
