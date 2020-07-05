import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

import db from '../database/config';

const SHOW_TOOLS = 'SHOW_TOOLS';
const FILTER_TOOLS = 'FILTER_TOOLS';
const FIND_TOOLS = 'FIND_TOOLS';
const DATABASE = db.database().ref();

let allTools = {};

const reducerTools = (state = [], action) => {
    let result = []
	switch (action.type) {
		case SHOW_TOOLS:
            result = action.subcategory ? [...action.payload[action.category][action.subcategory]]:
            [...action.payload[action.category]]
            return result
        case FILTER_TOOLS:
            result = action.subcategory ? [...action.payload[action.category][action.subcategory].filter(item => item.brand === action.brand)]:
            [...action.payload[action.category].filter(item => item.brand === action.brand)]
            return result
        case FIND_TOOLS:
            result = []
            for(let item in action.payload){
                if(action.payload[item] instanceof Array){
                    result = [...result,...action.payload[item].filter(i => i.title.toLowerCase().includes(action.title))]
                }else{
                    for (let key in action.payload[item]) {
                        result = [...result,...action.payload[item][key].filter(i => i.title.toLowerCase().includes(action.title))]
                    }
                }
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

export function fetchTools (findTool) {
	return (dispatch) => {
        DATABASE.on('value', snap => {
            allTools = snap.val()
            
            if(findTool){
                dispatch(findTools(decodeURI(findTool)))
            }else{
                console.log(allTools)
                dispatch(showTools('stroitelnie_smesi','shtukaturka'))
            }
        })
	} 
}

export default store;