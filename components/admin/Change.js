import React, {Component} from 'react';
import axios from "axios";
import Add from "./Add";

export default class Change extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    getValuesForChange(imgName){
        const { item, getAllNewsAndEvents, type } = this.props;
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
        const newValues = {
            type: type,
            id: item.id,
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
        axios.post("http://localhost:8888/public/admin/change.php", newValues)
            .then(({data}) => {
                console.log(data);
                // this.getValuesForChange(data);
                if(data === "newValOk"){
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
    render() {
        const {changeHandler, item, type, getAllNewsAndEvents} = this.props;
        if (type !== "add") {
            return (
                <div className="change">
                    <h1>ID: <span className="id">{item.id}</span></h1>
                    <div className="btn_back" onClick={() => changeHandler(false)}>Вернуться</div>
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
                            defaultValue={item.title_ua}
                            ref="title_ua"
                        />
                        <input
                            type="text"
                            id="title_eng"
                            placeholder="Title"
                            defaultValue={item.title_eng}
                            ref="title_eng"
                        />
                    </div>

                    <div className="box box_date">
                        <span> Дата: </span>
                        <input
                            type="text"
                            id="date_ua"
                            placeholder="Дата"
                            defaultValue={item.date_ua}
                            ref="date_ua"
                        />
                        <input
                            type="text"
                            id="date_eng"
                            placeholder="Date"
                            defaultValue={item.date_eng}
                            ref="date_eng"
                        />
                    </div>

                    <div className="box box_text">
                        <span> Текст: </span>
                        <textarea
                            type="text"
                            id="text_ua"
                            placeholder="Текст"
                            defaultValue={item.text_ua}
                            ref="text_ua"
                        />
                        <textarea
                            type="text"
                            id="text_eng"
                            placeholder="Text"
                            defaultValue={item.text_eng}
                            ref="text_eng"
                        />
                    </div>

                    <div className="box box_end">
                        <span> Заключительные слова: </span>
                        <input
                            type="text"
                            id="end_ua"
                            placeholder="Заключительные слова"
                            defaultValue={item.end_ua}
                            ref="end_ua"
                        />
                        <input
                            type="text"
                            id="end_eng"
                            placeholder="End of text"
                            defaultValue={item.end_eng}
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
                            type="text"
                            id="file"
                            placeholder="src for file"
                            defaultValue={item.file_src}
                            ref="file"
                        />
                    </div>
                    <div className="btn_add" onClick={() => this.handlerUpload()}>
                        <i className="icon-plus-squared"/>
                        Сохранить
                    </div>
                </div>
            )
        }else{
            return (
                <Add getAllNewsAndEvents={ getAllNewsAndEvents } changeHandler={ changeHandler }/>
            )
        }
    }
}
