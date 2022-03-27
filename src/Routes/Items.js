import React, {useState, useContext, useEffect} from 'react';
import { CartContext } from '../App';

const Items = () => {
  
    const [itemName, addItem] = useState('');
    const Context = useContext(CartContext);

    function addItemToCart(value){
        Context.dispatch({type: "ADD_TO_CART", payload: value})
    }

    useEffect(() => {
       console.log(itemName);
    }, [itemName]);

    
    return(
        <div>
            <h1>This is the items section</h1>
            <button onClick={() => console.log(Context.state)}>Show Items</button>
            {Context.state.map((item)=> <h1>{item}</h1>)}
            <input type="text" name="item" placeholder='Enter Item Here' onChange={(event) => addItem(event.target.value)}></input>
            <button onClick={() => addItemToCart(itemName)}>Submit</button>
        </div>
    )
};

export default Items;