import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import saleIco from '../pictures/sale.svg';

function Header() {
    return(
        <div className='header'>
            <div className='wrapper-header'>
                <div className='header-h3'>Магазин строительных материалов в Жодино с доставкой</div>
                <div className='header-h2'>Лучших производителей по лучшим ценам</div>
                <button className='header-catalog'><a className='header-a' href='/carat-service/#/catalog'>в каталог</a></button>
                <div className='sale'>
                    <img src={saleIco}/>
                    <div className='sale-info'>
                        <h3 className='sale-title'>Цемент такой вот</h3>
                        <p className='sale-description'>Ну тут типа какая-то акция. Я вообще-то просила предоставить инфу насчет них. Но раз нет, то тут будет этот дебильный текст.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header