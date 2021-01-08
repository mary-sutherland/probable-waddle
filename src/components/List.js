import React { useState } from 'react';
import Item from './Item';

const List = () => {

    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems(items.push(newItem))
    }


    return(
        <div>
            <form>
                <input type="text"></input>
                <input 
                type="submit" 
                value="submit" 
                onClick={() => setItems(items.push())></input>
            </form>
            <ul>

                {/* <li>first item</li>
                <li>second item</li> */}

                {/* <Item />
                <Item /> */}

                {items}

            </ul>
        </div>
    )
}

export default List;