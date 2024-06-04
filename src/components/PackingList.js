import React, { useState } from "react";
import Item from "./Item";

function PackingList({items, onDeleteItem, onToggleItem, onClearList}) {
    var [sortBy, setSortBy] = useState("input");
    var sortedItems;

    if(sortBy === "input") {
        sortedItems = items;
    }

    if(sortBy === "description") {
        sortedItems = items.slice().sort((a,b) =>  a.description.localeCompare(b.description)); // we used a slice() method here because it gives returns a copy of the array to work on . Sort() method will change the 'items' array itself as it is a mutating method , that is why we are using the slice() method.
    }

    if(sortBy === "packed") {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }
    return (
        <div className="list"> 
            <ul>
                {sortedItems.map(
                    (item) => <Item item = {item} key = {item.id} id={item.id}  onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/> // NOTE : 'key' cannot be accessed as a prop by the child component. React doesn't pass the key to your component but only serves as a hint.
                )}
            </ul>

            <div className="actions" >
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value) }>
                    <option value = "input">Sort by input</option>
                    <option value = "description">Sort by description</option>
                    <option value = "packed"> Sort by packed status </option>
                </select>
                <button onClick={onClearList}>
                    Clear List
                </button>
            </div>
        </div>
        
    );
}

export default PackingList;
