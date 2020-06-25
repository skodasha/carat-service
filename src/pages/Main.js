import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { fetchTools, showTools } from '../store/store';

import '../styles/main.css';

function Main({ fetchTools, tools}) {
    const [findTool, setFindTool] = useState();
    useEffect(() => {
        fetchTools('all', 'all');
	},[]);

	useEffect(() => {
        console.log(tools)
    }, [tools]);

    console.log(tools)
    return <div>
        <main className="main">
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
        <div className="App">
    <YMaps>
        <Map className='map' defaultState={{
            center: [54.083866, 28.314445],
            zoom: 16,
        }}>
        <Placemark geometry={[54.083866, 28.314445]} />
        </Map>
    </YMaps>
    </div>
    </div> 
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