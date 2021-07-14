function Delete ({items, setItems, index}){
    return (
        <button className="delete" onClick={()=>{
            let newItems = items.filter((item,i)=> i !== index )
            setItems(newItems);
        }}>Delete</button>
    )
}

export default Delete;