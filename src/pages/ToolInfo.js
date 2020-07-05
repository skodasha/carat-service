import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Head from '../components/Head';
import Info from '../components/Info';
import Footer from '../components/Footer';

import '../styles/main.css';

function ToolInfo(prop) {
    let tool = JSON.parse(decodeURI(window.location.search.slice(6)))

    return (<div>
        <Head/>
        <Info tool={tool}/>
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

export default ToolInfo;