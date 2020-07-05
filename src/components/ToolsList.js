import React from 'react';
import loader from '../pictures/loader.svg';
import '../styles/tools.css';

function ToolsList({tools}) {
    return(
        <div className='list'>
            {
                (tools.length == 0) ? <div className='wrapper-loader'><img className='loader' src={loader} alt='loading...'/></div>: null
            }
               {tools.map(
                    (item, idx) =>
                        <a key={idx} className='top-item' href={`/info?tool=${encodeURI(JSON.stringify(item))}`}>
                            <div className='top-img-wrap'><img className='top-img' src={item.image} alt='tool'/></div>
                            <div className='top-title'>{item.title}</div>
                            <div className='top-price'>{item.price}</div>
                        </a>
                 
                )}
         
        </div>
    )
}

export default ToolsList