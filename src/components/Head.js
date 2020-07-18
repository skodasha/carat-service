import React, { useState } from 'react';
import '../styles/head.css';
import address from '../pictures/adress.svg';
import call from '../pictures/call.svg';
import email from '../pictures/email.svg';
import phone from '../pictures/phone.svg';
import time from '../pictures/time.svg';
import logo from '../pictures/logo.svg';
import searchIcon from '../pictures/search.svg';
import { NavLink } from 'react-router-dom';

function Head() {
    const [search, setSearch] = useState('');

    const onChangeSearch = e => {
        setSearch(e.target.value);
    }

    return(
        <div className='head'>
            <div className='contacts'>
                <div className='contacts-item'>
                    <img className='contacts-img' src={address} alt='адрес'/>
                    <h4 className='contacts-h4'>ул. Брестская, 29</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={time} alt='время работы'/>
                    <h4 className='contacts-h4'>ПН - ПТ 8.00 - 17.00</h4>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={email} alt='почта'/>
                    <a className='contacts-h4' href='mailto:karat.servis@tut.by'>karat.servis@tut.by</a>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={phone} alt='домашний телефон'/>
                    <a className='contacts-h4' href='tel:80177534798'>8 017 75 34 798</a>
                </div>
                <div className='contacts-item'>
                    <img className='contacts-img' src={call} alt='мобильный телефон'/>
                    <a className='contacts-h4' href='tel:+375296820235'>+375 29 682 02 35</a>
                </div>
            </div>
            <div className='nav-head'>
                <div className='wrapper'>
                    <NavLink to={'/'}><img src={logo} alt='карат-сервис жодино'/></NavLink>
                    <label for='toggle-1' className='toggle-menu' id='tm'>
                        
                    </label>
                    <input type='checkbox' id='toggle-1'/>
                    <ul className='nav-container'>
                        <li className='nav-li'><NavLink className='nav-a' to='/'>ГЛАВНАЯ</NavLink></li>
                        <li className='nav-li'><NavLink className='nav-a' to='/catalog'>КАТАЛОГ</NavLink></li>
                        <li className='nav-li'><NavLink className='nav-a' to='/about'>О НАС</NavLink></li>
                        <li className='nav-li nav-search'>
                            <input className='nav-input' placeholder='Название товара...' onChange={onChangeSearch}/>
                            <NavLink to={`/catalog?search=${search}`} ><img src={searchIcon} className='search-ico' alt='Искать товар'/></NavLink>
                        </li> 
                    </ul>   
                </div>
            </div>
        </div>
    )
}

export default Head