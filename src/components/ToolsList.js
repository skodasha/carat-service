import React, { useEffect, useState } from 'react';
import loader from '../pictures/loader.svg';
import '../styles/tools.css';
import {Redirect} from "react-router-dom";

function ToolsList({tools}) {
    return(
        <div className='list'>
            {
                (tools.length == 0) ? <img className='loader' src={loader} alt='loading...'/>: null
            }
               {tools.map(
                    (item, idx) =>
                        <a key={idx} className='top-item' href={`/info?tool=${encodeURI(JSON.stringify(item))}`}>
                            <img className='top-img' src={item.image} alt='tool'/>
                            <div className='top-title'>{item.title}</div>
                            <div className='top-price'>{item.price}</div>
                        </a>
                 
                )}
         
        </div>
    )
}

export default ToolsList