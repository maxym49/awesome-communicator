import React, {Component} from 'react';
import style from './Sidebar.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faUserFriends, faCog, faComment, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faUser, faUserFriends, faCog, faComment, faSignOutAlt);

class Sidebar extends Component {
    render() {
        return (
            <div className={style.sidebar}>
                <div className={style.sidenav}>
                    <div className={style.profile}>
                        <div className={style.myimage}/>
                    </div>
                    <ul className={style.menu}>
                        <li className={style.active}> <FontAwesomeIcon icon="comment"/></li>
                        <li> <FontAwesomeIcon icon="user"/></li>
                        <li> <FontAwesomeIcon icon="user-friends"/></li>
                        <li> <FontAwesomeIcon icon="cog"/></li>
                    </ul>
                    <div className={style.sign}><FontAwesomeIcon icon="sign-out-alt"/></div>
                </div>
                <div className={style.users}>
                    <div className={style.topbar}>
                        <div className={style.search}>
                            <input className="effect-21" type="text" placeholder="Search" maxLength={'14'}/>
                            <div className={style.searchicon}>
                                <FontAwesomeIcon icon="search"/>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li><a href="">
                            <div className={style.image}/>
                        </a>
                            <div className={style.info}>
                                <div>
                                    <h5>User I</h5>
                                </div>
                                <div className={style.textwrapper}>
                                    <p>Wanna go to the party? If yes just please let me know! party party party </p>
                                </div>
                            </div>
                        </li>
                        <li><a href="">
                            <div className={style.image}/>
                        </a>
                            <div className={style.info}>
                                <div>
                                    <h5>User I</h5>
                                </div>
                                <div className={style.textwrapper}>
                                    <p>Wanna go to the party? If yes just please let me know! party party party </p>
                                </div>
                            </div>
                        </li>
                        <li><a href="">
                            <div className={style.image}/>
                        </a>
                            <div className={style.info}>
                                <div>
                                    <h5>User I</h5>
                                </div>
                                <div className={style.textwrapper}>
                                    <p>Wanna go to the party? If yes just please let me know! party party party </p>
                                </div>
                            </div>
                        </li>
                        <li><a href="">
                            <div className={style.image}/>
                        </a>
                            <div className={style.info}>
                                <div>
                                    <h5>User I</h5>
                                </div>
                                <div className={style.textwrapper}>
                                    <p>Wanna go to the party? If yes just please let me know! party party party </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;