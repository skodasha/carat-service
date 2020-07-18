import React from 'react';
import '../styles/footer.css';
import logo from '../pictures/logo.svg';
import glog from '../pictures/glog.svg';
import fottime from '../pictures/fottime.svg';
import fotcall from '../pictures/fotcall.svg';
import fotphone from '../pictures/fotphone.svg';
import fotemail from '../pictures/fotemail.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
    return(
        <div className='footer'>
            <div className='wrapper-footer'>
                <div className='fot-logo'>
                    <img src={logo} alt='karat-service'/>
                    <div className='fot-h2'>2020 / Все права защищены</div>
                </div>
                <div className='fot-nav'>
                    <ul className='fot-container'>
                        <li className='fot-li'><NavLink className='fot-a' to='/catalog'>Каталог</NavLink></li>
                        <li className='fot-li'><NavLink className='fot-a' to='/about'>О нас</NavLink></li>
                        <li className='fot-li'><NavLink className='fot-a' to='/'>Главная</NavLink></li>
                    </ul>
                </div>
                <div className='fot-adr'>
                    <div className='fot-work'>
                        <img src={glog} alt='address'/>
                        <div className='fot-h4'>ул. Брестская, 29</div>
                    </div>
                    <div className='fot-work'>
                        <img src={fottime} alt='time'/>
                        <div className='fot-h4'>ПН - ПТ 8.00 - 17.00</div>
                    </div>
                </div>
                <div className='fot-phone'>
                    <div className='fot-work'>
                        <img src={fotcall} alt='tel'/>
                        <a className='fot-h4' href='tel:+375296820235'>+375 29 682 02 35</a>
                    </div>
                    <div className='fot-work'>
                        <img src={fotcall} alt='tel'/>
                        <a className='fot-h4' href='tel:+375296344046'>+375 29 634 40 46</a>
                    </div>
                    <div className='fot-work'>
                        <img src={fotphone} alt='phone'/>
                        <a className='fot-h4' href='tel:80177534798'>8 017 75 34 798</a>
                    </div>
                    <div className='fot-work'>
                        <img src={fotemail} alt='mail'/>
                        <a className='fot-h4' href='mailto:karat.servis@tut.by'>karat.servis@tut.by</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer