import React from 'react';
import Navigation from "./Navigation";
import LanguageSelect from "./LanguageSelect";
import {navItemsArray} from "../utils/constants";
import styles from '../styles/Header.module.css'

const Header = () =>
{
    return (
        <div className={`${styles['header']}`}>
            <div className={'d-flex w-100'}>
                <Navigation items = {navItemsArray}/>
                <LanguageSelect/>
            </div>
            <header>Stalkers Bar</header>
        </div>
    );
};

export default Header;