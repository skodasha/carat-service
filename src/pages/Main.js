import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Head from '../components/Head';
import Header from '../components/Header';
import Advantages from '../components/Advantages';
import TopSales from '../components/TopSales';
import Footer from '../components/Footer';
import About from '../components/About';
import '../styles/main.css';

function Main() {
    return (<div>
        <Head/>
        <Header/>
        <Advantages/>
        <TopSales/>
        <About/>
        <YMaps>
            <Map className='map' defaultState={{
                center: [54.083866, 28.314445],
                zoom: 16,
            }}>
            <Placemark geometry={[54.083866, 28.314445]} />
            </Map>
        </YMaps>
        <Footer/>
    </div>) 
}

export default Main;