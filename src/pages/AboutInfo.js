import React, { useEffect, useState } from 'react';
import '../styles/aboutInfo.css';
import Rectangle from '../pictures/Rectangle.svg';
import Head from '../components/Head';
import Footer from '../components/Footer';

import abim1 from '../pictures/abim1.png';
import abim2 from '../pictures/abim2.svg';
import rab1 from '../pictures/rab1.svg';
import rab2 from '../pictures/rab2.svg';
import s1 from '../pictures/01.svg';
import s2 from '../pictures/02.svg';
import s3 from '../pictures/03.svg';
import s4 from '../pictures/04.svg';
import s5 from '../pictures/05.svg';

function AboutInfo() {
    return (
        <div className='about-info'> 
            <Head/>
            <h2 className='top-h2'><img src={Rectangle} alt='icon'/>  Наша компания  <img src={Rectangle}/></h2>
            <img className='rec1' src={rab1} alt='rec'/>
            <div className='ab-item'>
                <img className='ab-img1' src={abim1} alt='img'/>
                <div className='ab-text'>Наша компания предлагает современные строительные материалы физическим лицам и организациям. Все представленные строительные материалы проверены на практике и имеют высокое качество, подтвержденное сертификатами.
                <br/><br/>Ознакомиться со списком предлагаемых к продаже строительных материалов можно в каталоге нашего сайта и в магазине по адресу г. Жодино ул. Брестская, 29. Вы можете приобрести необходимые строительные материалы и оформить доставку
                <br/><br/>Выбирая нас, вы получаете надежного партнера, который готов выполнять свои обязательства на высоком уровне. Вы можете рассчитывать на предоставление полной информации по предлагаемой строительной продукции и профессиональные рекомендации со стороны наших специалистов</div>
            </div>
            <div className='ab-item'>
                <div className='ab-text'>У нас вы найдёте то, что давно искали:
                <br/><br/>У нас можно выбрать большинство материалов, необходимых для строительства
                <br/><br/>Доступные цены. Дешевле стройматериалы купить просто невозможно. При этом мы следим за изменениями цен, чтобы предложить своим клиентам наиболее выгодное сочетание цена-качество
                <br/><br/>Возможность доставки. Не достаточно стройматериалы купить – их необходимо еще и доставить. С нами вам не придется тратить на это время. Мы оперативно доставим Вашу покупку в указанное место
                <br/><br/>Удобство заказа и оплаты, возможность консультации. Менеджер поможет определиться с выбором, подскажет, что лучше для решения определенной строительной задачи</div>
                <img className='ab-img1' src={abim2} alt='img'/>
            </div>
            <img className='rec2' src={rab2} alt='rec'/>
            <h2 className='top-h2'><img src={Rectangle} alt='icon'/>  Сертификаты  <img src={Rectangle}/></h2>
            <div className='sert'>
                <img className='sert-img' src={s1} alt='rec'/>
                <img className='sert-img' src={s2} alt='rec'/>
                <img className='sert-img' src={s3} alt='rec'/>
                <img className='sert-img' src={s4} alt='rec'/>
                <img className='sert-img' src={s5} alt='rec'/>
            </div>
            <Footer/>
        </div>
    ) 
}

export default AboutInfo;