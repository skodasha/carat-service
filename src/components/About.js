import React from 'react';
import '../styles/about.css';
import Rectangle from '../pictures/Rectangle.svg';
import rect from '../pictures/rect.svg';
import rect2 from '../pictures/rect2.svg';
import img from '../pictures/img.png';
import p2 from '../pictures/2.svg';
import p3 from '../pictures/3.svg';

function About() {
    return(
        <div className='about'>
            <h2 className='about-h2'><img src={Rectangle} alt='img'/>  Наша компания  <img src={Rectangle} alt='img'/></h2>
            <img src={rect} className='img-rect' alt='image'/>
            <img src={rect2} className='img-rect2' alt='image'/>
            <img src={img} className='img-img' alt='image'/>
            <img src={p2} className='img-p2' alt='image'/>
            <img src={p3} className='img-p3' alt='image'/>
            <div className='about-p1'>Наша компания предлагает современные строительные материалы физическим лицам и организациям. Все представленные строительные материалы проверены на практике и имеют высокое качество, подтвержденное сертификатами</div>
            <div className='about-p2'>Ознакомиться со списком предлагаемых к продаже строительных материалов можно в каталоге нашего сайта и в магазине по адресу г. Жодино ул. Брестская, 29. Вы можете приобрести необходимые строительные материалы и оформить доставку</div>
            <div className='about-p3'>Выбирая нас, вы получаете надежного партнера, который готов выполнять свои обязательства на высоком уровне. Вы можете рассчитывать на предоставление полной информации по предлагаемой строительной продукции и профессиональные рекомендации со стороны наших специалистов</div>
        </div>
    )
}

export default About