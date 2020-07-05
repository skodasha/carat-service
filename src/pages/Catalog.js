import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTools, showTools, filterTools, findTools } from '../store/store';

import Head from '../components/Head';
import ToolsList from '../components/ToolsList';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

import '../styles/main.css';

function Catalog({ fetchTools, tools}) {
    let search = window.location.search.slice(8);

    useEffect(() => {
       fetchTools(search);      
	},[]);

    useEffect(() => {
    }, [tools])
    
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
