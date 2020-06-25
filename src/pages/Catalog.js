import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { fetchTools, showTools } from '../store/store';

import Head from '../components/Head';
import ToolsList from '../components/ToolsList';
import Footer from '../components/Footer';

import '../styles/main.css';

function Catalog({ fetchTools, tools}) {
    const [findTool, setFindTool] = useState();
    useEffect(() => {
        fetchTools('all', 'all');
	},[]);

	useEffect(() => {
        console.log(tools)
    }, [tools]);

    console.log(tools)
    return (<div>
        <Head/>
        <ToolsList tools={tools}/>
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
)(Catalog);