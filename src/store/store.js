import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

import db from '../database/config';

const SHOW_TOOLS = 'SHOW_TOOLS';
const FILTER_TOOLS = 'FILTER_TOOLS';
const FIND_TOOLS = 'FIND_TOOLS';
const DATABASE = db.database().ref();

let allTools = {};

const reducerTools = (state = [], action) => {
	switch (action.type) {
		case SHOW_TOOLS:
            return [...action.payload[action.category][action.subcategory]];
        case FILTER_TOOLS:
            return [...action.payload[action.category][action.subcategory].filter(item => item.brand == action.brand)]
        case FIND_TOOLS:
            let result = []
            for (const key in action.payload['строительные_смеси']) {
               // console.log([...action.payload['строительные_смеси'][key].filter(i => i.title.includes(action.title))]);
                result = [...result,...action.payload['строительные_смеси'][key].filter(i => i.title.toLowerCase().includes(action.title))]
            }
            console.log(result)
            return result
		default:
			return state;
	}
};

let store = createStore(reducerTools, applyMiddleware(thunkMiddleware));

export function findTools (title) {
    return{
        type: FIND_TOOLS,
        payload: allTools,
        title: title.toLowerCase()
    }
}

export function filterTools (category, subcategory, brand){
    return{
        type: FILTER_TOOLS,
        payload: allTools,
        category: category,
        subcategory: subcategory,
        brand: brand
    }
}

export function showTools (category, subcategory) { 
    return {
        type: SHOW_TOOLS,
        payload: allTools,
        category: category,
        subcategory: subcategory
    }
}

export function fetchTools () { 
	return (dispatch) => {
        DATABASE.on('value', snap => {
            allTools = snap.val()
            dispatch(showTools('строительные_смеси', 'штукатурка'))
        })
	} 
}

export default store;