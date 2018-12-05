import React, {Component} from 'react';
import style from './Wrapper.module.scss'
import UserPanel from "./user-panel/UserPanel";

class Wrapper extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <UserPanel/>
            </div>
        )
    }
}

export default Wrapper;