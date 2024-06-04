import React, { useState } from "react";

function Form({onAddItems}) {
    var [description, setDescription] = useState("");
    var [quantity, setQuantity] = useState(1);
    


    function handleSubmit(event) {
        event.preventDefault();
        if(!description) return; // this is the use of a guard clause.
        // console.log(description);
        // console.log(quantity);

        var newItem = { description, quantity, packed:false, id:Date.now(),}
        console.log(newItem);

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    function setItem(event) {
        setDescription(event.target.value);      
    }
    
    return (
        <div>

           <form className="add-form" onSubmit={handleSubmit}>

              <h3>What do you need for your 😄 trip </h3>
                <select value={quantity} onChange = {(event) => setQuantity(Number(event.target.value))}> {/* Instead of defining a callback function for onChange seperately, we can do it like this aswell  */}
                    {Array.from( { length: 20 }, (_,i) => i+1).map((num)=> (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <input type="text" placeholder="Item..." value={description} onChange = {setItem}/> {/* This method is also fine.  */}
                <button type="submit">Add Item</button>
            </form>
            
        </div>
    )
}

export default Form;
