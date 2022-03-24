import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return [...state.items, action.payload]
        case "CONSOLE_ITEMS":
            state.map(item => console.log(item));
            return state;
    default:
        return state;
    }
};

export default reducer;
