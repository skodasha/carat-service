import React, { useEffect, useState } from 'react';
import '../styles/info.css';

function Info({ tool }) {
    return (
        <div className='info'> 
            <div className='info-item'>
                <img className='info-img'/>
                <div className='info-item-desc'></div>
            </div>
        </div>
    ) 
}

export default Info;