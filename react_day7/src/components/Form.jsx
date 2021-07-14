import {useState} from 'react'
import Card from './Card';
function From() {
  const [item, setItem] = useState("");
  const [cal,setCal] = useState("");
  const [items, setItems] = useState("");

  function handleSubmit (e){
    if(item && cal){
      setItems([...items,{name: item, calorie: cal}])
      setItem("");
      setCal("");
    }
    
  }

  return (
    <div className="form">
      <form>
        <input type="text" name="title" value ={item} placeholder="Item name" onChange = {e => (setItem(e.target.value))} required></input>
        <input type="number" name="calorie" value ={cal} placeholder="Calorie" onChange = {e => (setCal(e.target.value))} required></input><br></br>
        <button onClick={handleSubmit}>Add Item</button>
      </form>
      
      {
        items.length ? items.map((item, index) => (
          <div  key={index} className="item">
            <Card name={item.name} calorie={item.calorie} items={items} setItems={setItems} index={index}></Card>
            
          </div>
        )): <h1>Start Adding Items</h1>
      }
      

    </div>
  )
}

export default From;