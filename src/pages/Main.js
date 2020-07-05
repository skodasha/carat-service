import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { fetchTools, showTools } from '../store/store';
import Head from '../components/Head';
import Header from '../components/Header';
import Advantages from '../components/Advantages';
import TopSales from '../components/TopSales';
import Footer from '../components/Footer';
import About from '../components/About';
import '../styles/main.css';

function Main({ fetchTools, tools}) {
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

const mapStateToProps = (state) => ({
    tools: state
});

const mapDispatchToProps = {
    fetchTools,
    showTools,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Main);

/*
<div className="main--section7">
            <div className="wrapper">
                <div className='tool'>
                    {
                        (tools.length == 0) ? <p>Sorry, nothing was found...</p>: null
                    }
                    <table><tbody>
                    {tools.map(
                    (item, idx) =>
                    <tr key={idx}>
                    <td className="tool--item">
                        <img className="tool--item-pic" src={`${window.location.origin}/uploads/${item.file}`}/>
                        <div className="tool--item-info">
                            <h3>{item.title}</h3>
                            <h4>{item.brand}</h4>
                            <h5>{item.description}</h5>
                            <div className='toolPrice'>
                                <h1>{item.price}$</h1>
                            </div>
                        </div>    
                    </td>
                    </tr>
                    )}
                    </tbody></table>
                </div>
            </div>
        </div>
        </main>
*/