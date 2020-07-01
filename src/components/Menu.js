import React, { useEffect, useState } from 'react';
import '../styles/menu.css';
import { connect } from 'react-redux';
import { showTools, filterTools } from '../store/store';

function Menu({ showTools, filterTools }){

    return(
        <div className='menu'>
            <div class="dropdown">
                <button class="dropbtn">Гипсокартон и комплектующие</button>
                <div class="dropdown-content">
                    <button className='menu-item'>Гипсокартон</button>
                    <button className='menu-item'>Профиль для гипсокартона</button>
                    <button className='menu-item'>Комплектующие для гипсокартона</button>
                    <button className='menu-item'>Саморезы</button>
                    <button className='menu-item'>Дюбели</button>
                    <button className='menu-item'>Серпянки, ленты</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Строительные смеси</button>
                <div class="dropdown-content">
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('строительные_смеси', 'штукатурка')}>Штукатурка</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('строительные_смеси', 'штукатурка', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('строительные_смеси', 'штукатурка', 'taifun')}>taifun</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('строительные_смеси', 'шпатлевка')}>Шпатлевка</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('строительные_смеси', 'шпатлевка', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('строительные_смеси', 'шпатлевка', 'taifun')}>taifun</button>
                        </div>
                    </div>
                    <button className='menu-item'>fbvhfvbhf</button>
                    <button className='menu-item'>fbvhfvbhf</button>
                    <button className='menu-item'>fbvhfvbhf</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                    <button className='menu-item'>fbvhfvbhf</button>
                    <button className='menu-item'>fbvhfvbhf</button>
                    <button className='menu-item'>fbvhfvbhf</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tools: state
});

const mapDispatchToProps = {
    showTools,
    filterTools,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Menu);