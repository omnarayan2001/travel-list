import React from "react";
function Item(props) {
    
    return (
        <li>
        <input type="checkbox" value={props.item.packed} onChange={()=>props.onToggleItem(props.id)}/>
        <span style={props.item.packed ? {textDecoration : "line-through"} : {}}>
        {props.item.description} {"-->"} {props.item.quantity}
        </span>
        <button onClick={()=> props.onDeleteItem(props.id)}>❌</button>
        </li>
    );
}

export default Item;
