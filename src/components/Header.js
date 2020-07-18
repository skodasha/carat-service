import React from 'react';
import '../styles/header.css';
import saleIco from '../pictures/sale.svg';
import salePic from '../pictures/1.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <div className='header'>
            <div className='wrapper-header'>
                <h1 className='header-h1'>Магазин строительных материалов в Жодино с доставкой</h1>
                <h2 className='header-h2'>Лучших производителей по лучшим ценам</h2>
                <NavLink className='header-a' to='/catalog'>в каталог</NavLink>
                <div className='sale'>
                    <img src={saleIco} alt='акция'/>
                    <div className='sale-info'>
                        <img src={salePic} alt='акционный товар' className='sale-img'/>
                        <div className='sale-sale'>
                            <h3 className='sale-title'>29.50 Р / ШТ</h3>
                            <h4 className='sale-description'>Клеевой состав GEOFLEX применяется для облицовки поверхностей стен и полов внутри и снаружи зданий керамической плиткой, мозаикой, ГРЕС, натуральным и искусственным камнем размером до 3 м². </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header