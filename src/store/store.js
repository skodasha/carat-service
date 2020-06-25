import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

import db from '../database/config';

const SHOW_TOOLS = 'SHOW_TOOLS';
const DB_NAME = 'строительные_смеси';

const reducerTools = (state = [], action) => {
	switch (action.type) {
		case SHOW_TOOLS:
            return [...action.payload];
		default:
			return state;
	}
};

const database = db.database().ref().child(DB_NAME).child('штукатурка')

let store = createStore(reducerTools, applyMiddleware(thunkMiddleware));

export function showTools (tools = [], section, subsection) {    
    let filterTools;

    if(section !== 'all'){
        filterTools = tools.filter(item => item.section === section);
    }
    else{
        filterTools = tools;
    }

    if(subsection !== 'all'){
        filterTools = filterTools.filter(item => item.subsection === subsection);
    }

    return {
        type: SHOW_TOOLS,
        payload: filterTools,
    }
}

export function fetchTools (section, subsection, findTool) { 
	return (dispatch) => {
        database.on('value', snap => {
            let result = snap.val()
            let tools = (findTool) ? result.filter(item => item.title.toLowerCase().includes(findTool.toLowerCase())):
                result;
            dispatch(showTools(tools, section, subsection))
        })
	} 
}

export default store;