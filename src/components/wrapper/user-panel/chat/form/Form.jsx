import React, {Component} from 'react';
import style from './Form.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faGrin, faPaperclip, faAngleRight} from "@fortawesome/free-solid-svg-icons/index";

library.add(faGrin, faPaperclip, faAngleRight);


class Form extends Component {
    render() {
        return (
            <div className={style.form}>
                <div className={style.iconwrap}>
                    <FontAwesomeIcon icon="grin"/>
                    <FontAwesomeIcon icon="paperclip"/>
                </div>
                <textarea placeholder={'Type something to send...'}>
                </textarea>
                <div className={style.sendbtn}>
                    <FontAwesomeIcon icon="angle-right"/>
                </div>
            </div>
        )
    }
}

export default Form;