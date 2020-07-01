import React, { useEffect, useState } from 'react';
import '../styles/info.css';

function Info({ tool }) {
    console.log(tool)
    return (
        <div className='info'> 
            <div className='info-item'>
                <div className='wrap-img'><img className='info-img' src={tool.image} alt='tool'/></div>
                <div className='info-item-desc'>
                    <div className='info-title'>{tool.title}</div>
                    <div className='info-brand'>Бренд: {tool.brand}</div>
                    <div className='info-price'>{tool.price}</div>
                </div>
            </div>
            <div className='info-description'>{tool.description}</div>
            <div className='info-number'>Для заказа: +375 29 682 02 35</div>
        </div>
    ) 
}

export default Info;