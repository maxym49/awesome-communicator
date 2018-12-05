import React, {Component} from 'react';
import style from './UserPanel.module.scss'
import Sidebar from './sidebar/Sidebar'
import Chat from "./chat/Chat";

class UserPanel extends Component {
    render(){
        return (
            <div className={style.container}>
                <Sidebar />
                <Chat />
            </div>
        )
    }
}

export default UserPanel;