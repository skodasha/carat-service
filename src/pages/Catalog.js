import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTools, showTools, filterTools, findTools } from '../store/store';

import Head from '../components/Head';
import ToolsList from '../components/ToolsList';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

import '../styles/main.css';

function Catalog({ fetchTools, showTools, filterTools, findTools, tools}) {
    //let search = window.location.hash.slice(17);
    //const [findTool, setFindTool] = useState(search);

    useEffect(() => {
        fetchTools();      
	},[]);

    useEffect(() => {
    }, [tools])
    
   // console.log(tools, findTool)
    return (<div>
        <Head/>
        <div className='wrapper-catalog'>
            <Menu/>
            <ToolsList tools={tools}/>
        </div>
        <Footer/>
    </div>) 
}

const mapStateToProps = (state) => ({
    tools: state
});

const mapDispatchToProps = {
    fetchTools,
    showTools,
    filterTools,
    findTools,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Catalog);

/*
<div>
            <button onClick={e => showTools('строительные_смеси', 'шпатлевка')}>шпатлевка</button>
            <button onClick={e => showTools('строительные_смеси', 'штукатурка')}>штукатурка</button>
            <button onClick={e => filterTools('строительные_смеси', 'штукатурка', 'ilmax')}>штукатурка ilmax</button>
        </div>
        <button onClick={e => findTools('64')}>поиск</button>
        <ToolsList tools={tools}/> */