import React, {Component} from 'react';
import style from './UserPanel.module.scss'
import Sidebar from './sidebar/Sidebar'
import Chat from "./chat/Chat";
import RightBar from "./right-bar/RightBar";

class UserPanel extends Component {
    render(){
        return (
            <div className={style.container}>
                <Sidebar />
                <Chat />
                <RightBar/>
            </div>
        )
    }
}

export default UserPanel;