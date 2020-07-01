import React, { useEffect, useState } from 'react';
import loader from '../pictures/loader.svg';
import '../styles/tools.css';
import {Redirect} from "react-router-dom";

function ToolsList({tools}) {
    const [showInfo, setShowInfo] = useState(false);

    function onButtonClick() {
        setShowInfo(true)
    }

    if(showInfo){
        return <Redirect to={{pathname: '/info', state: { tool: {id:122} }}}/>
    }

    return(
        <div className='list'>
            {
                (tools.length == 0) ? <img src={loader} alt='loading...'/>: null
            }
               {tools.map(
                    (item, idx) =>
                        <div key={idx}className='top-item' onClick={onButtonClick}>
                            <img className='top-img' src={item.image} alt='tool'/>
                            <div className='top-title'>{item.title}</div>
                            <div className='top-price'>{item.price}</div>
                        </div>
                 
                )}
         
        </div>
    )
}

export default ToolsList