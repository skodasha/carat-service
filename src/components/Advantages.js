import React, { useEffect, useState } from 'react';
import '../styles/advantages.css';
import Rectangle from '../pictures/Rectangle.svg';
import data from '../pictures/data.svg';
import chat from '../pictures/chat.svg';
import car from '../pictures/car.svg';
import discount from '../pictures/discount.svg';

function Advantages() {
    return(
        <div className='main'>
            <h1 className='ad-h2'><img src={Rectangle} alt='square'/>  Почему мы?  <img src={Rectangle} alt='square'/></h1>
            <div className='adv'>
                <div className='adv-item'>
                    <div className='adv-img'><img src={data} alt='range'/></div>
                    <h2 className='adv-h'>Обновляемый асcортимент</h2>
                    <hr className='adv-hr'/>
                    <h3 className='adv-p'>Большой выбор материалов лучших производителей</h3>
                </div>
                <div className='adv-item'>
                    <div className='adv-img'><img src={car} alt='delivery'/></div>
                    <h2 className='adv-h'>Быстрая доставка</h2>
                    <hr className='adv-hr'/>
                    <h3 className='adv-p'>Доставка в любое место в Жодино</h3>
                </div>
                <div className='adv-item'>
                    <div className='adv-img'><img src={discount} alt='price'/></div>
                    <h2 className='adv-h'>Приятные цены</h2>
                    <hr className='adv-hr'/>
                    <h3 className='adv-p'>Самые низкие цены в городе, налаженная система скидок</h3>
                </div>
                <div className='adv-item'>
                    <div className='adv-img'><img src={chat} alt='consultation'/></div>
                    <h2 className='adv-h'>Консультации</h2>
                    <hr className='adv-hr'/>
                    <h3 className='adv-p'>Ответы профессионалов на любые ваши вопросы</h3>
                </div>
            </div>
        </div>
    )
}

export default Advantages