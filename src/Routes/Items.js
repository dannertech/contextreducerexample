import React, {useState, useContext} from 'react';
import { CartContext } from '../App';

const Items = () => {
    const Context = useContext(CartContext);
    console.log(Context);
    return(
        <div>
            <h1>This is the items section</h1>
        </div>
    )
};

export default Items;