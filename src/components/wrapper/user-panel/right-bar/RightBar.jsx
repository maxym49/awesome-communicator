import React, {Component} from 'react';
import style from './RightBar.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBirthdayCake, faEnvelope, faMobileAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/index";


library.add(faBirthdayCake, faEnvelope, faMobileAlt, faMapMarkerAlt);

class RightBar extends Component{
    render() {
        return (
            <div className={style.rightbar}>
            <span/>
                <div>
                    <h2>Chris Motion</h2>
                    <h3>Artist</h3>
                </div>
                <ul>
                    <li><FontAwesomeIcon icon="map-marker-alt"/><p>Wroclaw/Poland</p></li>
                    <li><FontAwesomeIcon icon="mobile-alt"/><p>+48 601 700 490</p></li>
                    <li><FontAwesomeIcon icon="birthday-cake"/><p>February 24, 1995</p></li>
                    <li><FontAwesomeIcon icon="envelope"/><p>c.motion@gmail.com</p></li>
                </ul>
            </div>
        )
    }
}

export default RightBar;