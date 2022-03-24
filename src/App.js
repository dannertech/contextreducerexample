import React, {createContext, useReducer, useState} from 'react';
import reducer from './Reducers/reducer';
import { Route, Routes  } from 'react-router-dom';
import ItemSection from './Components/ItemSection';

const demoCart = ["bananas", "oranges", "sushi", "trees"];


const App = () => {
  const [state, dispatch] = useReducer(reducer, demoCart);
  const CartContext = createContext(0);
  return(
    <CartContext.Provider value={{state, dispatch}}>
      <Routes>
        <Route path="/" exact component={ItemSection} />
      </Routes>
    </CartContext.Provider>
  )
};

export default App;