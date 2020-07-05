import React from 'react';
import '../styles/footer.css';
import logo from '../pictures/logo.svg';
import glog from '../pictures/glog.svg';
import fottime from '../pictures/fottime.svg';
import fotcall from '../pictures/fotcall.svg';
import fotphone from '../pictures/fotphone.svg';
import fotemail from '../pictures/fotemail.svg';

function Footer() {
    return(
        <div className='footer'>
            <div className='wrapper-footer'>
                <div className='fot-logo'>
                    <img src={logo} alt='logo'/>
                    <div className='fot-h2'>2020 / Все права защищены</div>
                </div>
                <div className='fot-nav'>
                    <ul className='fot-container'>
                        <li className='fot-li'><a className='fot-a' href='/catalog'>Каталог</a></li>
                        <li className='fot-li'><a className='fot-a' href='/about'>О нас</a></li>
                        <li className='fot-li'><a className='fot-a' href='/carat-service'>Главная</a></li>
                    </ul>
                </div>
                <div className='fot-adr'>
                    <div className='fot-work'>
                        <img src={glog} alt='icon'/>
                        <div className='fot-h4'>ул. Брестская, 29</div>
                    </div>
                    <div className='fot-work'>
                        <img src={fottime} alt='icon'/>
                        <div className='fot-h4'>ПН - ПТ 8.00 - 17.00</div>
                    </div>
                </div>
                <div className='fot-phone'>
                    <div className='fot-work'>
                        <img src={fotcall} alt='icon'/>
                        <div className='fot-h4'>+375 29 682 02 35</div>
                    </div>
                    <div className='fot-work'>
                        <img src={fotphone} alt='icon'/>
                        <div className='fot-h4'>8 017 75 34 798</div>
                    </div>
                    <div className='fot-work'>
                        <img src={fotemail} alt='icon'/>
                        <div className='fot-h4'>karat.servis@tut.by</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer