import React, {Component} from 'react';
import style from './UserPanel.module.scss'

class UserPanel extends Component {
    render(){
        return (
            <div className={style.wrapper}>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default UserPanel;