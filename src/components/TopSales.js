import React, { useEffect, useState } from 'react';
import '../styles/top.css';
import Rectangle from '../pictures/Rectangle.svg';
import { fetchTop, showTools, filterTools, findTools } from '../store/store';
import loader from '../pictures/loader.svg';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function TopSales({fetchTop, showTools, tools}) {
    useEffect(() => {
        fetchTop();
              
     },[]);
 
     useEffect(() => {
     }, [tools])
    
    return(
        <div className='top'>
            <h2 className='top-h2'><img src={Rectangle} alt='square'/>  Выберете свой товар  <img src={Rectangle} alt='square'/></h2>
            <div className='wrap-top-list'>
            <div className='list-top'>
            {
                (tools.length == 0) ? <div className='wrapper-loader'><img className='loader' src={loader} alt='loading...'/></div>: null
            }
               {tools.map(
                    (item, idx) =>
                        <NavLink key={idx} className='top-item' to={`/info?tool=${encodeURI(JSON.stringify(item))}`}>
                            <div className='top-img-wrap'><img className='top-img' src={item.image} alt='строительные материалы'/></div>
                            <h1 className='top-title'>{item.title}</h1>
                            <div className='top-price'>{item.price}</div>
                        </NavLink>
                 
                )}
         
            </div>
            </div>
            <br/>
            <NavLink className='top-a' to='/catalog'>смотреть больше</NavLink>
        </div>
    )
}
const mapStateToProps = (state) => ({
    tools: state
});

const mapDispatchToProps = {
    fetchTop,

};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TopSales);