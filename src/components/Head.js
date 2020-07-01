import React, { useEffect, useState } from 'react';
import '../styles/head.css';
import address from '../pictures/adress.svg';
import call from '../pictures/call.svg';
import email from '../pictures/email.svg';
import phone from '../pictures/phone.svg';
import time from '../pictures/time.svg';
import logo from '../pictures/logo.svg';
import searchIcon from '../pictures/search.svg';

import {Redirect} from "react-router-dom";

function Head() {
    const [search, setSearch] = useState('');
    const [key, setKey] = useState(false);

    const onChangeSearch = e => {
        setSearch(e.target.value);
    }

    function handleKeyPress(e){
        if (e.key === 'Enter'){ 
            setKey(true)
        }
    }

    if(key){
        return <Redirect to={`/catalog/?search=${search}`}/>
    }
    return(
        <div className='head'>
            <div className='contacts'>
                <div className='contacts-item'>
                    <img className='contacts-img' src={address}/>
                    <h4 className='contacts-h4'>ул. Брестская, 29</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={time}/>
                    <h4 className='contacts-h4'>ПН - ПТ 8.00 - 17.00</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={email}/>
                    <h4 className='contacts-h4'>karat.servis@tut.by</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={phone}/>
                    <h4 className='contacts-h4'>8 017 75 34 798</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={call}/>
                    <h4 className='contacts-h4'>+375 29 682 02 35</h4>
                </div>
            </div>
            <div className='nav-head'>
                <div className='wrapper'>
                    <img src={logo} alt='logo'/>
                    <ul className='nav-container'>
                        <li className='nav-li'><a className='nav-a' href='/carat-service/#/catalog'>КАТАЛОГ</a></li>
                        <li className='nav-li'><a className='nav-a' href='/carat-service/#/catalog'>О НАС</a></li>
                        <li className='nav-li'><a className='nav-a' href='#footer'>КОНТАКТЫ</a></li>
                    </ul>
                    <div className='nav-search'>
                        <input className='nav-input' placeholder='Название товара...' onChange={onChangeSearch} onKeyPress={handleKeyPress}/>
                        <a href={`/carat-service/#/catalog?search=${search}`} ><img src={searchIcon} className='search-ico'/></a>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Head