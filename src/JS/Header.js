import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import Menu from "./Menu"

function Header() {
    return (
        <div className="header">
            <FontAwesomeIcon icon={faCompass} />
            <h2 className="title">My Travel Journal</h2>
            <Menu />
        </div>
    )
}

export default Header