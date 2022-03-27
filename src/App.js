import React, {createContext, useReducer} from 'react';
import { reducer } from './Reducers/reducer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Items from './Routes/Items';
import Total from './Routes/Total';
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
    <CartContext.Provider value={{state, dispatch}}>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Total />} />
    <Route path="items" element={<Items />} />
    </Routes>
  </BrowserRouter>
  </CartContext.Provider>
  )
};

export default App;