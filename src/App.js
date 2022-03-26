import React, {createContext, useReducer} from 'react';
import { reducer } from './Reducers/reducer';
import { Route, Routes, Link  } from 'react-router-dom';
import Items from './Routes/Items';
import { initialState } from './Reducers/reducer';

const demoCart = {
  items: [
    "bananas",
    "wine",
    "orange juice",
    "grapes"
  ]
};

export const CartContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return(
    <CartContext.Provider value={{initialState, dispatch}}>
      <div>
        <h1>This is the main App page</h1>
        <h1>Link should be here</h1>
        <Link to="/items" element={<Items />}>Items</Link>
      </div>
    </CartContext.Provider>
  )
};

export default App;