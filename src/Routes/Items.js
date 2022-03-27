import React, {useState, useContext} from 'react';
import { CartContext } from '../App';

const Items = () => {
    const Context = useContext(CartContext);
    return(
        <div>
            <h1>This is the items section</h1>
            <button onClick={() => console.log(Context.state)}>Show Items</button>
            {Context.state.map((item)=> <h1>{item}</h1>)}
        </div>
    )
};

export default Items;