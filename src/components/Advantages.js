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
            <h2 className='ad-h2'><img src={Rectangle} alt='icon'/>  Почему мы?  <img src={Rectangle}/></h2>
            <div className='adv'>
                <div className='adv-item'>
                    <div className='adv-img'><img src={data} alt='icon'/></div>
                    <div className='adv-h'>Обновляемый асcортимент</div>
                    <hr className='adv-hr'/>
                    <div className='adv-p'>Большой выбор материалов лучших производителей</div>
                </div>
                <div className='adv-item'>
                    <div className='adv-img'><img src={car} alt='icon'/></div>
                    <div className='adv-h'>Быстрая доставка</div>
                    <hr className='adv-hr'/>
                    <div className='adv-p'>Доставка в любое место в Жодино за 24 часа</div>
                </div>
                <div className='adv-item'>
                    <div className='adv-img'><img src={discount} alt='icon'/></div>
                    <div className='adv-h'>Приятные цены</div>
                    <hr className='adv-hr'/>
                    <div className='adv-p'>Самые низкие цены в городе, налаженная система скидок</div>
                </div>
                <div className='adv-item'>
                    <div className='adv-img'><img src={chat} alt='icon'/></div>
                    <div className='adv-h'>Консультации</div>
                    <hr className='adv-hr'/>
                    <div className='adv-p'>Ответы профессионалов на любые ваши вопросы</div>
                </div>
            </div>
        </div>
    )
}

export default Advantages