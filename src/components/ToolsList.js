import React from 'react';
import loader from '../pictures/loader.svg';
import '../styles/tools.css';
import { NavLink } from 'react-router-dom';

function ToolsList({tools}) {
    return(
        <div className='list'>
            {
                (tools.length == 0) ? <div className='wrapper-loader'><img className='loader' src={loader} alt='loading...'/></div>: null
            }
               {tools.map(
                    (item, idx) =>
                        <NavLink key={idx} className='top-item' to={`/info?tool=${encodeURI(JSON.stringify(item))}`}>
                            <div className='top-img-wrap'><img className='top-img' src={item.image} alt='строительные материалы'/></div>
                            <div className='top-title'>{item.title}</div>
                            <div className='top-price'>{item.price}</div>
                        </NavLink>
                 
                )}
         
        </div>
    )
}

export default ToolsList