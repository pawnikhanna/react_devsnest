import { useState } from "react"
import Edit from "./Edit";
import Delete from "./Delete"
import Done from "./Done";

function Card ({name, calorie, items, setItems,index}){
    const [food,setFood] = useState(name)
    const [calo,setCalo] = useState(calorie)
    const [isEditing, setIsEditing] = useState(false)
    
    return (
            <div className="card">
                {!isEditing ? <div className="content"><h3>{name}</h3>
                <p>You have consumed {calorie} calories.</p></div>:<>
                <input type="text" id="title" name="title" value ={food} onChange={(e) => (setFood(e.target.value))}></input>
                <input type="number" id="calorie" name="calorie" value ={calo} onChange={(e) => (setCalo(e.target.value))}></input>
                </>
                }
                <Delete items={items} setItems={setItems} index={index} />
                {!isEditing ? <Edit isEditing={isEditing} setIsEditing={setIsEditing}/> : <Done isEditing={isEditing} setIsEditing={setIsEditing} food={food} calo={calo} items={items} setItems={setItems} index={index} />}
                
            </div>
            
    )
}

export default Card;