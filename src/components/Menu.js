import React from 'react';
import '../styles/menu.css';
import { connect } from 'react-redux';
import { showTools, filterTools } from '../store/store';
import $ from 'jquery';

function Menu({ showTools, filterTools }){
    return(
        <div className='menu'>
            <div class="dropdown">
                <button class="dropbtn" onClick={e => $('#d4').toggleClass('block')}>Строительные смеси</button>
                <div class="dropdown-content" id='d4'>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'shtukaturka')}>Штукатурка</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'shtukaturka', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'shtukaturka', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'shpatlevka')}>Шпатлевка</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'shpatlevka', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'shpatlevka', 'condor')}>condor</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'shpatlevka', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'klei_dly_plitki')}>Клеи для плитки</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'klei_dly_plitki', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'klei_dly_plitki', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'phyga')}>Фуга</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'phyga', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'phyga', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'shtucaturka_decorativnaya')}>Декоративная штукатурка</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'shtucaturka_decorativnaya', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'shtucaturka_decorativnaya', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'gidroizolyatiya')}>Гидроизоляция</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'gidroizolyatiya', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'gidroizolyatiya', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'kladochnie_sostavi')}>Кладочные составы</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'kladochnie_sostavi', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'kladochnie_sostavi', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'klei_dly_plitki')}>Клеи для плитки</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'klei_dly_plitki', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'klei_dly_plitki', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'klei_dly_sistem_yteplenia')}>Клеи для систем утепления</button>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'montazhnie_sostavi')}>Монтажные составы</button>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'smesi_dly_pola')}>Смеси для пола</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'klei_dly_plitki', 'ilmax')}>ilmax</button>
                            <button className='menu-item' onClick={e => filterTools('stroitelnie_smesi', 'klei_dly_plitki', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'tement')}>Цемент, извесь, мел, гипс</button>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('stroitelnie_smesi', 'zaschitnie_sostavi')}>Защитные составы</button>
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn" onClick={e => (showTools('gruntovki', ''), $('#d2').toggleClass('block'))}>Грунтовки</button>
                <div class="dropdown-content" id='d2'>
                    <button className='menu-item' onClick={e => filterTools('gruntovki', '', 'ilmax')}>ilmax</button>
                    <button className='menu-item' onClick={e => filterTools('gruntovki', '', 'condor')}>condor</button>
                    <button className='menu-item' onClick={e => filterTools('gruntovki', '', 'taifun')}>тайфун</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn" onClick={e => (showTools('kraski', ''), $('#d3').toggleClass('block'))}>Краски</button>
                <div class="dropdown-content" id='d3'>
                    <button className='menu-item' onClick={e => filterTools('gruntovki', '', 'condor')}>condor</button>
                    <button className='menu-item' onClick={e => filterTools('gruntovki', '', 'taifun')}>тайфун</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn" onClick={e => showTools('derevozaschita', '')}>Деревозащита</button>
            </div>
            <div class="dropdown">
                <button class="dropbtn" onClick={e => showTools('gipsocarton', '')}>Гипсокартон</button>
            </div>
            <div class="dropdown">
                <button class="dropbtn" onClick={e => $('#d5').toggleClass('block')}>Пены и герметики</button>
                <div class="dropdown-content" id='d5'>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('peni_i_germetiki', 'peni')}>Пены</button>
                        <div class="dropdown-content2">
                            <button className='menu-item' onClick={e => filterTools('peni_i_germetiki', 'peni', 'mixfor')}>mixfor</button>
                            <button className='menu-item' onClick={e => filterTools('peni_i_germetiki', 'peni', 'condor')}>condor</button>
                            <button className='menu-item' onClick={e => filterTools('peni_i_germetiki', 'peni', 'taifun')}>тайфун</button>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2" onClick={e => showTools('peni_i_germetiki', 'germetiki')}>Герметики</button>
                    </div>
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