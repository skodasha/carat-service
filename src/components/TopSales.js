import React, { useEffect, useState } from 'react';
import '../styles/top.css';
import Rectangle from '../pictures/Rectangle.svg';

function TopSales() {
    return(
        <div className='top'>
            <h2 className='top-h2'><img src={Rectangle}/>  Выберете свой товар  <img src={Rectangle}/></h2>
            <div className='top-row'>
                <div className='top-item'>
                    <img className='top-img' />
                    <div className='top-title'>sljflskjflksdj</div>
                    <div className='top-price'>15 / ШТ</div>
                </div>
                <div className='top-item'>
                    <img className='top-img' />
                    <div className='top-title'>sljflskjflksdj</div>
                    <div className='top-price'>15 / ШТ</div>
                </div>
                <div className='top-item'>
                    <img className='top-img' />
                    <div className='top-title'>sljflskjflksdj</div>
                    <div className='top-price'>15 / ШТ</div>
                </div>
            </div>
            <div className='top-row'>
                <div className='top-item'>
                    <img className='top-img' />
                    <div className='top-title'>sljflskjflksdj</div>
                    <div className='top-price'>15 / ШТ</div>
                </div>
                <div className='top-item'>
                    <img className='top-img' />
                    <div className='top-title'>sljflskjflksdj</div>
                    <div className='top-price'>15 / ШТ</div>
                </div>
                <div className='top-item'>
                    <img className='top-img' />
                    <div className='top-title'>sljflskjflksdj</div>
                    <div className='top-price'>15 / ШТ</div>
                </div>
            </div>
            <button className='top-catalog'><a className='top-a' href='/carat-service/#/catalog'>смотреть больше</a></button>
        </div>
    )
}

export default TopSales