import React from 'react';
import '../styles/header.css';
import saleIco from '../pictures/sale.svg';
import salePic from '../pictures/1.png';

function Header() {
    return(
        <div className='header'>
            <div className='wrapper-header'>
                <div className='header-h3'>Магазин строительных материалов в Жодино с доставкой</div>
                <div className='header-h2'>Лучших производителей по лучшим ценам</div>
                <button className='header-catalog'><a className='header-a' href='/catalog'>в каталог</a></button>
                <div className='sale'>
                    <img src={saleIco} alt='icon'/>
                    <div className='sale-info'>
                        <img src={salePic} alt='sale' className='sale-img'/>
                        <div className='sale-sale'>
                            <h3 className='sale-title'>29.50 BYN. / ШТ</h3>
                            <p className='sale-description'>Клеевой состав GEOFLEX применяется для облицовки поверхностей стен и полов внутри и снаружи зданий керамической плиткой, мозаикой, ГРЕС, натуральным и искусственным камнем размером до 3 м². </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header