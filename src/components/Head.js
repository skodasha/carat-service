import React, { useState } from 'react';
import '../styles/head.css';
import address from '../pictures/adress.svg';
import call from '../pictures/call.svg';
import email from '../pictures/email.svg';
import phone from '../pictures/phone.svg';
import time from '../pictures/time.svg';
import logo from '../pictures/logo.svg';
import searchIcon from '../pictures/search.svg';

function Head() {
    const [search, setSearch] = useState('');

    const onChangeSearch = e => {
        setSearch(e.target.value);
    }
    return(
        <div className='head'>
            <div className='contacts'>
                <div className='contacts-item'>
                    <img className='contacts-img' src={address} alt='icon'/>
                    <h4 className='contacts-h4'>ул. Брестская, 29</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={time} alt='icon'/>
                    <h4 className='contacts-h4'>ПН - ПТ 8.00 - 17.00</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={email} alt='icon'/>
                    <h4 className='contacts-h4'>karat.servis@tut.by</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={phone} alt='icon'/>
                    <h4 className='contacts-h4'>8 017 75 34 798</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={call} alt='icon'/>
                    <h4 className='contacts-h4'>+375 29 682 02 35</h4>
                </div>
            </div>
            <div className='nav-head'>
                <div className='wrapper'>
                    <img src={logo} alt='logo'/>
                    <ul className='nav-container'>
                        <li className='nav-li'><a className='nav-a' href='/carat-service'>ГЛАВНАЯ</a></li>
                        <li className='nav-li'><a className='nav-a' href='/catalog'>КАТАЛОГ</a></li>
                        <li className='nav-li'><a className='nav-a' href='/about'>О НАС</a></li>
                    </ul>
                    <div className='nav-search'>
                        <input className='nav-input' placeholder='Название товара...' onChange={onChangeSearch}/>
                        <a href={`/catalog?search=${search}`} ><img src={searchIcon} className='search-ico' alt='icon'/></a>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Head