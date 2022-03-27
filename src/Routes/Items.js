import React, {useState, useContext} from 'react';
import { CartContext } from '../App';

const Items = () => {
    const Context = useContext(CartContext);
    return(
        <div>
            <h1>This is the items section</h1>
            <button onClick={() => console.log(Context)}>Show Items</button>
        </div>
    )
};

export default Items;