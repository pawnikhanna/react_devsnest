function Edit ({isEditing,setIsEditing}){
    return (
        <button className="edit" onClick={()=>(setIsEditing(!isEditing))}>Edit</button>
    )
}

export default Edit;