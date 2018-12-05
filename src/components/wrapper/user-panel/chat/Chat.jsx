import React, {Component} from 'react';
import style from './Chat.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faFolderOpen, faPhoneVolume, faVideo} from "@fortawesome/free-solid-svg-icons/index";
import Form from "./form/Form";

library.add(faFolderOpen, faPhoneVolume, faVideo);

class Chat extends Component {
    render() {
        return (
            <div className={style.chat}>
                <div className={style.topbar}>
                    <div className={style.friendwrap}>
                        <h4 className={style.friendname}>Chris Motion</h4>
                        <div className={style.status}>
                            <span/>
                            <p>online</p>
                        </div>
                    </div>
                    <ul>
                        <li><FontAwesomeIcon icon="folder-open"/></li>
                        <li><FontAwesomeIcon icon="phone-volume"/></li>
                        <li><FontAwesomeIcon icon="video"/></li>
                    </ul>
                </div>
                <div className={style.messages}>
                    <div className={style.friendmessage}>
                        <div className={style.content}>
                            <div className={style.message}>
                                <span/>
                                <div><p>Hi :) How are you?</p></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.mymessage}>
                        <div className={style.content}>
                            <div className={style.message}>
                                <span/>
                                <div><p>I am doing well and you :D? </p></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.friendmessage}>
                        <div className={style.content}>
                            <div className={style.message}>
                                <span/>
                                <div><p>Everything seems to be ok :P What are you doing tomorrow?</p></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.mymessage}>
                        <div className={style.content}>
                            <div className={style.message}>
                                <span/>
                                <div><p>Tomorrow ... hmm nothing special, we can go somewhere ... maybe the cinema :D? </p></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.friendmessage}>
                        <div className={style.content}>
                            <div className={style.message}>
                                <span/>
                                <div><p>Great idea! I am available at 6 pm :> </p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
        )
    }
}

export default Chat;