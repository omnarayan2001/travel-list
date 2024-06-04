function Stats({items}) {

    if(items.length === 0) {  // if(!items.length) , this syntax is also fine.
        return (
            <p className="stats">
                <em>Start adding some items to your packing list 🩴</em>
            </p>
        )
    };
    var numItems = items.length;
    var numPacked = (items.filter((item)=> item.packed)).length;
    var percentage = Math.round((numPacked/numItems)*100)
    return (
        <div className="stats">
        
            <footer>
                 <em>
                 {percentage === 100 ? "You got everything ! Ready to go ✈️" :
                ` 👜 You have ${numItems} items on your list, and you have already packed ${numPacked} (${percentage}%) `
                 }
                 </em> 
            </footer>
            
        </div>
    )
}

export default Stats;
